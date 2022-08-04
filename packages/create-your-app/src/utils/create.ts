import inquire from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import os from 'os';
import {
  tryGitInit,
  tryGitCommit,
  createGitIgnore,
  makeHookExecutable
} from './git';
import { createPackageJson, pkgAdd, pkgRemove } from './pkg';
import { checkDir, cwdPath, updateFiles } from './path';

/**
 * 项目配置
 */
const config = {
  framework: null,
  pkgManagement: null,
  platform: null,
  router: null,
  dataFlow: null
};

/**
 * 输入配置
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function input(options: { template: string; force: boolean }) {
  const { template } = options;

  const answers = await inquire.prompt([
    {
      type: 'list',
      name: 'pkgManagement',
      choices: [
        {
          name: 'npm',
          value: 'npm'
        },
        {
          name: 'yarn',
          value: 'yarn'
        },
        {
          name: 'pnpm',
          value: 'pnpm'
        }
      ],
      default: 'yarn'
    },
    {
      type: 'list',
      name: 'framework',
      choices: [
        {
          name: 'react',
          value: 'react'
        },
        {
          name: 'react-ts',
          value: ['react', 'ts']
        },
        {
          name: 'vue',
          value: 'vue'
        },
        {
          name: 'vue-ts',
          value: ['react', 'ts']
        },
        {
          name: 'package-js',
          value: 'commonjs'
        },
        {
          name: 'package-ts',
          value: ['commonjs', 'ts']
        }
      ],
      message: 'choose the framework',
      default: 'react',
      when: () => !template
    },
    {
      type: 'list',
      name: 'platform',
      choices: [
        {
          name: 'create-your-app',
          value: 'cya'
        },
        {
          name: 'webpack',
          value: 'webpack'
        },
        {
          name: 'create-react-app',
          value: 'cra'
        },
        {
          name: 'vite',
          value: 'vite'
        },
        { name: 'rollup', value: 'rollup' }
      ],
      message: 'choose the bundle tool',
      default: 'cya',
      when: () => !template
    },
    {
      type: 'list',
      name: 'framework',
      choices: [
        {
          name: 'react',
          value: 'react'
        },
        {
          name: 'react-ts',
          value: ['react', 'ts']
        },
        {
          name: 'vue',
          value: 'vue'
        },
        {
          name: 'vue-ts',
          value: ['react', 'ts']
        },
        {
          name: 'package-js',
          value: 'commonjs'
        },
        {
          name: 'package-ts',
          value: ['commonjs', 'ts']
        }
      ],
      message: 'choose the framework',
      default: 'react',
      when: () => !template
    }
  ]);

  Object.assign(config, answers);
  return answers;
}

export default async function (
  name: string,
  options: { force: boolean; template?: string }
) {
  // 首先确定输入目录名
  const { appName } = await inquire.prompt({
    type: 'input',
    name: 'appName',
    message: 'create dir name',
    default: name || 'new-app'
  });

  // 当前命令行选择的目录
  const cwd = cwdPath();

  // 需要创建的目录地址
  let rootApp = path.join(cwd, appName);

  // 判断目录是否存在，并返回最终的目录路径
  rootApp = await checkDir(rootApp, options.force);

  console.log('rootApp: ', rootApp);

  // 确定项目配置
  // const { platform } = await input(options);
  // 模版名称
  const { template } = options;

  let templateName = template || '@rjkt/cya-react-webpack-template';
  let templateToInstall = template || '@rjkt/cya-react-webpack-template';

  // 本地路径：统一转化成绝对路径
  if (template?.match(/^((.{1,2})?\/|file:).*/)) {
    const localTemplatePath = path.resolve(cwd, template);
    console.log('localTemplatePath: ', localTemplatePath);

    templateToInstall = `file:${localTemplatePath}`;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { name } = require(path.join(localTemplatePath, 'package.json'));
    console.log('name: ', name);
    templateName = name;
  }
  console.log('templateName: ', templateName);

  console.log(`\nCreating a new app in ${chalk.green(rootApp)}\n`);

  // 创建基础的 package.json
  createPackageJson(rootApp, appName);

  // 切换进程到新建项目目录
  process.chdir(rootApp);

  // install template
  pkgAdd([templateToInstall], () => {
    console.log(`Error: install template ${chalk.red(templateName)} fail`);
  });

  const templatePath = path.dirname(
    require.resolve(`${templateName}/package.json`, {
      paths: [rootApp]
    })
  );

  const templateJsonPath = path.join(templatePath, 'template.json');
  console.log('templatePath: ', templatePath);

  let templateJson: TemplatePkgJson = {
    package: {
      scripts: {},
      dependencies: {},
      devDependencies: {}
    }
  };

  if (fs.existsSync(templateJsonPath)) {
    templateJson = require(templateJsonPath);
  }

  // 项目的 package.json
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const appPackage = require(path.resolve(rootApp, 'package.json'));

  // template package 默认配置，会用一个 package key 包一层
  const templatePackage = templateJson.package || {};
  const templateDir = path.join(templatePath, 'template');

  // template.json 中应该忽略的配置
  const templatePackageBlackList = [
    'name',
    'version',
    'description',
    'keywords',
    'bugs',
    'license',
    'author',
    'contributors',
    'browser',
    'bin',
    'man',
    'directories',
    'repository',
    'bundledDependencies',
    'optionalDependencies',
    'engineStrict',
    'os',
    'cpu',
    'preferGlobal',
    'private',
    'publishConfig'
  ];

  // template.json 中需要 merge 的配置
  const templatePackageToMerge = ['dependencies', 'scripts'];

  // 筛选去除该忽略的配置
  const templatePackageItems = Object.keys(templatePackage).filter(
    (key) => !templatePackageBlackList.includes(key)
  );

  //合并配置
  templatePackageItems.forEach((key) => {
    if (templatePackageToMerge.includes(key)) {
      // 用于调整 package.json 的位置，与 template.json 书写的位置保持一致
      const temp = appPackage[key];

      delete appPackage[key];

      appPackage[key] = {
        ...temp,
        ...templatePackage[key]
      };
    } else {
      appPackage[key] = templatePackage[key];
    }
  });

  fs.writeFileSync(
    path.join(rootApp, 'package.json'),
    JSON.stringify(appPackage, null, 2) + os.EOL
  );

  if (fs.existsSync(templateDir)) {
    fs.copySync(templateDir, rootApp);
  } else {
    console.log(
      chalk.red(`Error: 从模板 ${templateName} 复制内容到 ${appName} 失败`)
    );

    process.exit(1);
  }

  // create .ignore
  console.log('\nInitialized .gitignore file.');
  createGitIgnore(rootApp);

  // update files
  updateFiles(rootApp, appName);

  // Initialize git repo
  let initializedGit = false;
  if (tryGitInit()) {
    initializedGit = true;
    console.log();
    console.log('Initialized a git repository.');
  }

  // Install additional template dependencies, if present
  const dependenciesToInstall = Object.entries({
    ...templatePackage.dependencies,
    ...templatePackage.devDependencies
  });

  if (dependenciesToInstall.length) {
    const deps = dependenciesToInstall.map(
      ([dependency, version]) => `${dependency}@${version}`
    );

    pkgAdd(deps, () => {
      console.log(chalk.red('Install template dependencies failed'));
      process.exit(1);
    });
  }

  // remove template pkg
  pkgRemove([templateName], () => {
    console.log(chalk.red('Remove template pkg failed'));
    process.exit(1);
  });

  // Make hook executable
  makeHookExecutable(path.join(process.cwd(), '.husky'));

  // Create git commit if git repo was initialized
  if (initializedGit && tryGitCommit()) {
    console.log();
    console.log('\nCreated git commit.');
  }
}
