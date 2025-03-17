import os from 'os';
import path from 'path';

import chalk from 'chalk';
import * as crossSpawn from 'cross-spawn';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import npmFetch from 'npm-registry-fetch';
import ora from 'ora';
import * as shell from 'shelljs';
import * as tar from 'tar';

import { NpmRegistry } from './constants';

const { exec } = shell;
const { sync } = crossSpawn;

// 定义 spawn 返回值类型
interface SpawnResult {
  status: number | null;
  [key: string]: unknown;
}

/**
 * 创建基础的 package.json
 * @param {string} rootApp
 * @param {string} componentName
 */
function createPackageJson(
  rootApp: string,
  appName: string,
  extra: Record<string, unknown> = {}
) {
  const userNameGit = exec('git config user.name', {
    silent: true
  }).stdout.trim();
  const userEmail = exec('git config user.email', {
    silent: true
  }).stdout.trim();
  const userNameNpm = exec(`npm whoami --registry=${NpmRegistry}`, {
    silent: true
  }).stdout.trim();

  // 初始化基础的 package.json

  const pkgJson = {
    name: appName,
    version: '1.0.0',
    author: `${userNameGit} <${userEmail}>`,
    maitainers: [userNameNpm],
    description: '',
    keywords: [],
    license: 'MIT',
    repository: {
      type: 'git',
      url: ''
    },
    ...extra
  };

  fs.writeFileSync(
    path.join(rootApp, 'package.json'),
    JSON.stringify(pkgJson, null, 2) + os.EOL
  );
}

/**
 * 添加依赖
 * @param deps 依赖列表
 * @param callback 回调函数
 */
function pkgAdd(deps: string[], callback?: () => void) {
  const spinner = ora({
    text: `Installing ${chalk.cyan(deps.join(' '))}...`,
    color: 'yellow'
  }).start();

  const child = sync('yarn', ['add', ...deps], {
    stdio: 'pipe'
  }) as unknown as SpawnResult;

  if (child.status !== 0) {
    spinner.fail(`Install ${chalk.cyan(deps.join(' '))} fail`);
    callback && callback();
    return;
  }

  spinner.succeed(`Install ${chalk.cyan(deps.join(' '))} success`);
}

function pkgRemove(deps: string[], error: () => void) {
  console.log(`\nRemoving ${chalk.cyan(deps.join(','))}...`);

  const child = sync('yarn', ['remove', ...deps], {
    stdio: 'inherit'
  }) as unknown as SpawnResult;

  if (child.status !== 0) {
    console.log(chalk.red(`Error: yarn remove ${deps.join(',')} failed`));
    typeof error === 'function' && error();
    process.exit(1);
  }
}

interface PkgInfo {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords: string[];
  date: string;
  links: {
    npm: string;
    homepage: string;
    repository: string;
    bugs: string;
  };
  author: {
    name: string;
    email: string;
    username: string;
  };
  publisher: { username: string; email: string };
  maintainers: [{ username: string; email: string }];
}

async function pkgGet(scope: string) {
  try {
    const result = (await npmFetch.json(
      `/-/v1/search?text=scope:${scope}`
    )) as {
      objects: { package: PkgInfo }[];
    };

    const pkgNames: { name: string; description: string }[] = [];

    result.objects.forEach((item) => {
      const name = item.package.name;
      const description = item.package.description;
      if (name.endsWith('-template')) {
        pkgNames.push({ name, description });
      }
    });

    return pkgNames;
  } catch (err) {
    console.error('查询失败: ', err);
    return [];
  }
}

async function pkgDownload(pkgName: string, version?: string): Promise<string> {
  const result = (await npmFetch.json(
    `/${pkgName}/${version || 'latest'}`
  )) as {
    dist: {
      tarball: string;
    };
  };
  const tarballUrl = result.dist.tarball;

  const file = fs.createWriteStream('package.tgz');

  const res = await fetch(tarballUrl);

  res.body?.pipe(file);

  return new Promise<string>((resolve, reject) => {
    file.on('finish', () => {
      file.close();

      tar
        .x({
          file: 'package.tgz'
        })
        .then(() => {
          fs.unlinkSync('package.tgz');

          const dirPath = path.resolve(process.cwd(), './package');

          resolve(dirPath);
        })
        .catch((err: unknown) => {
          reject(err);
        });
    });
  });
}

export { createPackageJson, pkgAdd, pkgRemove, pkgGet, pkgDownload };
