import path from 'path';

import chalk from 'chalk';
import fsextra from 'fs-extra';
import ignore from 'ignore';
import ora from 'ora';

import { getCurDirectory, getGitRemoteUrl } from './git';
import { traverseFile } from './path';
import { createPackageJson } from './pkg';

import type { Ignore } from 'ignore';

const {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readJsonSync,
  writeFileSync
} = fsextra;

// 添加PackageJson接口定义
interface PackageJson {
  [key: string]: unknown;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

// 添加TemplateJson接口定义
interface TemplateJson {
  package: {
    [key: string]: unknown;
    dependencies?: Record<string, string>;
  };
}

export function createOrUpdateTemplate(
  sourceTemplatePath: string,
  targetTemplatePath: string,
  name?: string
) {
  const isCreated = !existsSync(targetTemplatePath);
  const packagePAth = path.join(targetTemplatePath, 'package.json');
  let templateName;

  if (isCreated) {
    templateName = name || path.basename(sourceTemplatePath);
  } else {
    const pkgJson = readJsonSync(packagePAth) as { name: string };
    templateName = pkgJson.name;
  }

  const spinner = ora({
    text: `${isCreated ? '创建' : '更新'}模板${chalk.green(templateName)}...`,
    color: 'yellow'
  }).start();

  // .gitignore 文件路径
  const gitIgnorePath = path.join(sourceTemplatePath, '.gitignore');

  // 读取 .gitignore 文件内容
  let data: string | Ignore | readonly (string | Ignore)[];

  if (existsSync(gitIgnorePath)) {
    data = readFileSync(gitIgnorePath, 'utf8');
  } else {
    data = ['node_modules', 'dist', 'coverage', '.DS_Store', '*lock*'];
  }

  // 创建一个 "ignore" 解析器对象
  const ig = ignore().add(data).add('*lock*');

  // template 存放目录
  const templatePath: string = path.join(targetTemplatePath, '/template');

  // 遍历模板文件
  traverseFile(
    sourceTemplatePath,
    (abPath: string) => {
      // 获取源文件路径目录名
      const relativePath = path.relative(sourceTemplatePath, abPath);

      // 获取目标文件路径名
      const targetFileName = path.join(templatePath, relativePath);

      // 获取目标文件目录
      const targetDirectory = path.dirname(targetFileName);

      // 使用 fs 模块检查目标目录是否存在，如果不存在则创建
      if (!existsSync(targetDirectory)) {
        mkdirSync(targetDirectory, { recursive: true });
      }
      try {
        // 使用 fs 模块拷贝文件
        copyFileSync(abPath, targetFileName);
      } catch (error) {
        if (error) {
          console.error('拷贝文件出错:', error);
        }
      }
    },
    (abPath: string) => {
      // 获取文件路径
      const filePath = abPath.slice(sourceTemplatePath.length + 1);

      if (path.basename(filePath) === '.git') {
        return false;
      }
      // 获取文件类型
      return !ig.ignores(filePath);
    }
  );

  // 处理 .ignore 文件
  writeFileSync(
    path.join(templatePath, '.gitignore'),
    readFileSync(path.join(templatePath, 'gitignore'))
  );

  // 创建 package.json

  if (!existsSync(packagePAth)) {
    createPackageJson(targetTemplatePath, templateName as string, {
      files: ['template', 'template.json'],
      repository: {
        type: 'git',
        url: getGitRemoteUrl(),
        directory: getCurDirectory()
      }
    });
  }

  // 处理源模板 package.json 文件，生成 template.json
  const pkgJson = readJsonSync(
    path.join(templatePath, 'package.json')
  ) as PackageJson;

  const templateJson: TemplateJson = {
    package: {}
  };

  const templatePackageBlackList = [
    'name',
    'version',
    'maitainers',
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

  Object.keys(pkgJson).forEach((key: string) => {
    if (templatePackageBlackList.indexOf(key) === -1) {
      templateJson.package[key] = pkgJson[key as keyof PackageJson];
    }
  });

  // 更新 package.json 中的依赖
  if (templateJson.package && pkgJson.dependencies) {
    Object.keys(pkgJson.dependencies).forEach((key) => {
      if (!templateJson.package.dependencies) {
        templateJson.package.dependencies = {};
      }
      const depValue = pkgJson.dependencies?.[key];
      if (depValue) {
        templateJson.package.dependencies[key] = depValue;
      }
    });
  }

  writeFileSync(
    path.join(targetTemplatePath, 'template.json'),
    JSON.stringify(templateJson, null, 2)
  );

  writeFileSync(
    path.join(templatePath, 'package.json'),
    JSON.stringify(pkgJson, null, 2)
  );

  spinner.succeed(
    `${isCreated ? '创建' : '更新'}模板${chalk.green(templateName)}成功！`
  );

  console.log(`模板路径: ${targetTemplatePath}`);
}
