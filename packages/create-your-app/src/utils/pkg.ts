import spawn from 'cross-spawn';
import { NpmRegistry, TaobaoNpmRegistry } from './constants';
import { exec } from 'shelljs';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import os from 'os';
import npmFetch from 'npm-registry-fetch';
import fetch from 'node-fetch';
import tar from 'tar';

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
 *
 * @param {Array} deps 需要安装的依赖
 * @param {Function} error 安装失败的错误回调
 * @param {Array} options 安装参数
 */
function pkgAdd(
  deps: string[],
  error: () => void,
  options: Array<unknown> = []
) {
  console.log(`Install ${chalk.cyan(deps.join(','))} ...`);

  const child = spawn.sync(
    'yarn',
    ['add', ...deps, ...options, '--registry', TaobaoNpmRegistry],
    {
      stdio: 'inherit'
    }
  );

  if (child.status !== 0) {
    console.log(chalk.red(`Error: yarn add ${deps.join('.')} error`));
    error?.();
    process.exit(1);
  }
}

function pkgRemove(deps: string[], error: () => void) {
  console.log(`\nRemoving ${chalk.cyan(deps.join(','))}...`);

  const child = spawn.sync('yarn', ['remove', ...deps], {
    stdio: 'inherit'
  });

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

  return new Promise((resolve, reject) => {
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
