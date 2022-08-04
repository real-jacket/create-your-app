import { cwdPath, getComponentTemplatePath } from './path';
import path from 'path';
import fs from 'fs-extra';
import camelcase from 'camelcase';
import replace from 'replace-in-file';
import chalk from 'chalk';

/**
 *
 * @param name 组件名
 * @param option 组件配置
 */
export default function (
  name: string,
  option: {
    template: string;
    dir: string | undefined;
  }
) {
  // 默认组件目录为 src/components
  const { template, dir: componentPath = 'src/components' } = option;
  const templatePath = getComponentTemplatePath(template);
  const curPath = cwdPath();
  const appPascalName = camelcase(name, { pascalCase: true });
  const targetPath = path.join(curPath, componentPath, appPascalName);

  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, {
      recursive: true
    });
  }

  try {
    fs.copySync(templatePath, targetPath);
  } catch (error) {
    console.log(
      chalk.red('复制模板出错,请检查模板路径是否正确或者目标文件夹是否存在')
    );
    console.log('Error Message: ', error.message);
  }

  try {
    replace.sync({
      files: [path.join(targetPath, '/*')],
      from: [/ComponentName/g],
      to: [appPascalName]
    });
  } catch (error) {
    console.log(chalk.red('更新 component template 内容出错了'));
  }
}
