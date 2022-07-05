import spawn from 'cross-spawn';
import { NpmRegistry, TaobaoNpmRegistry } from './constants';
import { exec } from 'shelljs';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import os from 'os';

/**
 * 创建基础的 package.json
 * @param {string} rootApp
 * @param {string} componentName
 */
function createPackageJson(rootApp: string, appName: string) {
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
    }
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
 * @param {Array} options
 */
function pkgAdd(deps: string[], error: () => void, options = []) {
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

export { createPackageJson, pkgAdd, pkgRemove };
