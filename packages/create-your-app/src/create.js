const inquire = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const os = require('os');
const camelcase = require('camelcase');
const replace = require('replace-in-file');
const { tryGitInit, tryGitCommit, createGitIgnore } = require('./git');
const { createPackageJson, pkgAdd, pkgRemove } = require('./pkg');

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
// eslint-disable-next-line no-unused-vars
async function input(options) {
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
          name: 'creat-your-app',
          value: 'cya'
        },
        {
          name: 'webpack',
          value: 'webpack'
        },
        {
          name: 'creat-react-app',
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

/**
 * 判断目录是否存在，新建同名副本或者强制覆盖删除
 * @param {String} targetDir
 * @param {boolean} force
 */
async function checkDir(targetDir, force) {
  if (fs.existsSync(targetDir)) {
    if (force) {
      await fs.remove(targetDir);
    } else {
      const { action } = await inquire.prompt([
        {
          type: 'confirm',
          name: 'action',
          message: '当前目录已经存在，是否需要覆盖创建,否则新建同名副本目录',
          default: true
        }
      ]);

      if (action) {
        await fs.remove(targetDir);
      } else {
        let i = 1;
        let latestDir = targetDir + '1';
        // 存在则目录名递增
        while (fs.existsSync(latestDir)) {
          latestDir = targetDir + `${++i}`;
        }
        targetDir = latestDir;
      }
    }
  }

  fs.ensureDir(targetDir);
  return targetDir;
}

/**
 * 替换模板里内置的应用名称
 * @param {string} rootApp 项目路径
 * @param {string} appName 应用名称
 */
function updateFiles(rootApp, appName) {
  const appPascalName = camelcase(appName, { pascalCase: true });

  try {
    replace.sync({
      files: [
        path.join(rootApp, 'src', '**/*'),
        path.join(rootApp, 'public', '/*'),
        path.join(rootApp, 'README.md')
      ],
      from: [/Template/g, /<%= appName %>/g],
      to: [appPascalName, appName],
      ignore: ['**/mode_modules/**']
    });
  } catch (error) {
    console.log(chalk.red('更新 Template 内容出错了'));
  }
}

module.exports = async function (name, options) {
  // 首先确定输入目录名
  const { appName } = await inquire.prompt({
    type: 'input',
    name: 'appName',
    message: 'creat dir name',
    default: name || 'new-app'
  });

  // 当前命令行选择的目录
  const cwd = process.cwd();

  // 需要创建的目录地址
  let rootApp = path.join(cwd, appName);

  // 判断目录是否存在，并返回最终的目录路径
  rootApp = await checkDir(rootApp, options.force);

  console.log('rootApp: ', rootApp);

  // 确定项目配置
  // const { platform } = await input(options);
  // 模版名称
  const { template } = options;

  let templateName = template || '@rjkt/cya-react-template';
  let templateToInstall = template;

  // 本地路径：统一转化成绝对路径
  if (template.match(/^((.{1,2})?\/|file:).*/)) {
    const localTemplatePath = path.resolve(cwd, template);
    console.log('localTemplatePath: ', localTemplatePath);

    templateToInstall = `file:${localTemplatePath}`;

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

  let templateJson = {};

  if (fs.existsSync(templateJsonPath)) {
    templateJson = require(templateJsonPath);
  }

  // 项目的 package.json
  const appPackage = require(path.resolve((rootApp, 'package.json')));

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

  // Create git commit if git repo was initialized
  if (initializedGit && tryGitCommit()) {
    console.log();
    console.log('\nCreated git commit.');
  }
};
