const chalk = require('chalk');
const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

function isInGitRepository() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
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
function tryGitInit() {
  try {
    execSync('git --version', { stdio: 'ignore' });
    if (isInGitRepository() || isInMercurialRepository()) {
      return false;
    }

    execSync('git init', { stdio: 'ignore' });
    return true;
  } catch (e) {
    console.warn('Git repo not initialized', e);
    return false;
  }
}

/**
 * 初始化 commit
 * @returns {boolean}
 */
function tryGitCommit() {
  try {
    console.log('\nGit commit:');
    console.log(' git add -A');
    execSync('git add -A', { stdio: 'inherit' });
    console.log(' git commit -m "feat(chore): init project"');
    execSync('git commit -m "feat(chore): init project"', {
      stdio: 'inherit'
    });
    return true;
  } catch (e) {
    console.log(chalk.red('Git commit failed'));
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
function createGitIgnore(appPath) {
  const gitignoreExists = fs.existsSync(path.join(appPath, '.gitignore'));
  if (gitignoreExists) {
    // Append if there's already a `.gitignore` file there
    const data = fs.readFileSync(path.join(appPath, 'gitignore'));
    fs.appendFileSync(path.join(appPath, '.gitignore'), data);
    fs.unlinkSync(path.join(appPath, 'gitignore'));
  } else {
    // Rename gitignore after the fact to prevent npm from renaming it to .npmignore
    // See: https://github.com/npm/npm/issues/1862
    fs.moveSync(
      path.join(appPath, 'gitignore'),
      path.join(appPath, '.gitignore'),
      []
    );
  }
}

module.exports = {
  tryGitInit,
  tryGitCommit,
  createGitIgnore
};
