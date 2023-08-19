import path from 'path';
import fs from 'fs-extra';
import ignore, { Ignore } from 'ignore';
import { traverseFile } from './path';
import { createPackageJson } from './pkg';
import ora from 'ora';
import chalk from 'chalk';

export async function createOrUpdateTemplate(
  sourceTemplatePath: string,
  targetTemplatePath: string,
  name?: string
) {
  const isCreated = !fs.existsSync(targetTemplatePath);
  const packagePAth = path.join(targetTemplatePath, 'package.json');
  let templateName;

  if (isCreated) {
    templateName = name || path.basename(sourceTemplatePath);
  } else {
    const pkgJson = await fs.readFileSync(packagePAth, 'utf-8');
    templateName = JSON.parse(pkgJson).name;
  }

  const spinner = ora({
    text: `${isCreated ? '创建' : '更新'}模板${chalk.green(templateName)}...`,
    color: 'yellow'
  }).start();

  // .gitignore 文件路径
  const gitIgnorePath = path.join(sourceTemplatePath, '.gitignore');

  // 读取 .gitignore 文件内容
  let data: string | Ignore | readonly (string | Ignore)[];

  if (fs.existsSync(gitIgnorePath)) {
    data = await fs.readFile(gitIgnorePath, 'utf8');
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
    async (abPath: string) => {
      // 获取源文件路径目录名
      const relativePath = path.relative(sourceTemplatePath, abPath);

      // 获取目标文件路径名
      const targetFileName = path.join(templatePath, relativePath);

      // 获取目标文件目录
      const targetDirectory = path.dirname(targetFileName);

      // 使用 fs 模块检查目标目录是否存在，如果不存在则创建
      if (!fs.existsSync(targetDirectory)) {
        fs.mkdirSync(targetDirectory, { recursive: true });
      }
      try {
        // 使用 fs 模块拷贝文件
        fs.copyFileSync(abPath, targetFileName);
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
  fs.renameSync(
    path.join(templatePath, '.gitignore'),
    path.join(templatePath, 'gitignore')
  );

  // 创建 package.json

  if (!fs.existsSync(packagePAth)) {
    createPackageJson(targetTemplatePath, templateName, {
      files: ['template', 'template.json']
    });
  }

  // 处理源模板 package.json 文件，生成 template.json
  const pkgJson = JSON.parse(
    fs.readFileSync(path.join(templatePath, 'package.json')).toString()
  );

  const templateJson = {
    package: {
      scripts: pkgJson.scripts || {},
      dependencies: pkgJson.dependencies || {},
      devDependencies: pkgJson.devDependencies || {},
      config: pkgJson.config || {}
    }
  };

  fs.writeFileSync(
    path.join(targetTemplatePath, 'template.json'),
    JSON.stringify(templateJson, null, 2)
  );

  fs.rmSync(path.join(templatePath, 'package.json'));

  spinner.succeed(
    `${isCreated ? '创建' : '更新'}模板${chalk.green(templateName)}成功！`
  );

  console.log(`模板路径: ${targetTemplatePath}`);
}
