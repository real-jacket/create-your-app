import { execSync } from 'child_process';
import path from 'path';

import chalk from 'chalk';
import fsextra from 'fs-extra';
const {
  appendFileSync,
  existsSync,
  moveSync,
  readFileSync,
  removeSync,
  unlinkSync
} = fsextra;
import ora from 'ora';
import * as shell from 'shelljs';

const { exec } = shell;

function isInGitRepository() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
    // 判断目录是否在git仓库的根目录下
    const gitPath = execSync('git rev-parse --show-toplevel').toString().trim();
    const cwd = process.cwd();
    if (gitPath !== cwd) {
      console.log(chalk.red('不建议在一个 git 仓库子目录创建项目'));
      console.log('');
      console.log('撤销已创建文件');
      const spinner = ora('Loading unicorns').start();
      spinner.color = 'yellow';
      spinner.text = '...';
      process.chdir('../');
      removeSync(cwd);
      spinner.stop();
      spinner.succeed('撤销成功');
      process.exit(1);
    }
    return true;
  } catch (e) {
    return false;
  }
}

function isInMercurialRepository() {
  try {
    execSync('hg --cwd . root', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * 初始化 git 仓库
 * @returns {boolean}
 */
function tryGitInit(): boolean {
  try {
    execSync('git --version', { stdio: 'ignore' });
    if (isInGitRepository() || isInMercurialRepository()) {
      return false;
    }

    execSync('git init', { stdio: 'ignore' });
    return true;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.warn('Git repo not initialized', error.message);
    } else {
      console.warn('Git repo not initialized', String(error));
    }
    return false;
  }
}

/**
 * 初始化 commit
 * @returns {boolean}
 */
function tryGitCommit(): boolean {
  try {
    console.log('\nGit commit:');
    console.log(' git add -A');
    execSync('git add -A', { stdio: 'inherit' });
    console.log(' git commit -m "feat(chore): init project"');
    execSync('git commit -m "feat(chore): init project"', {
      stdio: 'ignore'
    });
    return true;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(chalk.red('Git commit failed'), error.message);
    } else {
      console.log(chalk.red('Git commit failed'), String(error));
    }
    console.log(chalk.green('Please handle error and try commit again'));
    // We couldn't commit in already initialized git repo,
    // maybe the commit author config is not set.
    // In the future, we might supply our own committer
    // like Ember CLI does, but for now, let's just
    // remove the Git files to avoid a half-done state.
    // console.warn('Git commit not created', e);
    // console.warn('Removing .git directory...');
    // try {
    //   // unlinkSync() doesn't work on directories.
    //   fs.removeSync(path.join(appPath, '.git'));
    // } catch (removeErr) {
    //   // Ignore.
    // }
    return false;
  }
}

/**
 * 创建 .gitignore
 * @param {string} appPath
 */
function createGitIgnore(appPath: string) {
  const gitignoreExists = existsSync(path.join(appPath, '.gitignore'));
  if (gitignoreExists) {
    // Append if there's already a `.gitignore` file there
    const data = readFileSync(path.join(appPath, 'gitignore'));
    appendFileSync(path.join(appPath, '.gitignore'), data);
    unlinkSync(path.join(appPath, 'gitignore'));
  } else {
    // Rename gitignore after the fact to prevent npm from renaming it to .npmignore
    // See: https://github.com/npm/npm/issues/1862
    moveSync(path.join(appPath, 'gitignore'), path.join(appPath, '.gitignore'));
  }
}
/**
 * 给 husky 相关 hooks 添加可执行权限
 * @param {string} hookPath
 */
function makeHookExecutable(hookPath: string) {
  if (!existsSync(hookPath)) return;

  // 使用 shell.ls 获取文件列表
  const files = shell.ls(hookPath);

  let error = false;
  files.forEach((file) => {
    const filePath = path.join(hookPath, file);

    // 检查文件是否存在且可执行
    if (shell.test('-f', filePath)) {
      try {
        // 设置可执行权限
        shell.chmod(755, filePath);
      } catch (err) {
        console.log(
          chalk.red(`Failed to set executable permissions for ${filePath}`)
        );
        error = true;
      }
    }
  });

  if (error) {
    console.log(
      chalk.red(
        'Failed to set executable permissions for some hooks.\n' +
          'Please set them manually.'
      )
    );
    process.exit(1);
  }
}

/**
 * 获取 git 子目录
 * @returns git 子目录
 */
export function getCurDirectory() {
  try {
    const { stdout } = exec('git rev-parse --show-prefix', {
      silent: true
    });
    return stdout.trim();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('获取 git 子目录失败：', error.message);
    } else {
      console.error('获取 git 子目录失败：', String(error));
    }
    return '';
  }
}

/**
 * 获取 git 远程仓库地址
 * @returns git 远程仓库地址
 */
export function getGitRemoteUrl() {
  try {
    const { stdout } = shell.exec('git remote get-url origin', {
      silent: true
    });
    return stdout.trim();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('获取 git 远程仓库地址失败：', error.message);
    } else {
      console.error('获取 git 远程仓库地址失败：', String(error));
    }
    return '';
  }
}

export { tryGitInit, tryGitCommit, createGitIgnore, makeHookExecutable };
