import path from 'path';
import inquire from 'inquirer';
import fs from 'fs-extra';
import camelcase from 'camelcase';
import replace from 'replace-in-file';
import chalk from 'chalk';

/**
 * 获取组件模版存放目录
 * @param type 组件类型或者组件模板存放路径
 * @returns 组件模版存放目录绝对路径
 */
export const getComponentTemplatePath = (type = 'react') => {
  if (type.match(/^((.{1,2})?\/|file:).*/)) {
    return cwdPath(type);
  } else {
    const tempPath = path.resolve(__dirname, '../../component');
    return path.join(tempPath, type);
  }
};

/**
 * 获取当前目录
 * @param args 拼接路径
 * @returns 当前目录或者基于当前目录的路径
 */
export function cwdPath(...args: string[]) {
  return path.resolve(process.cwd(), ...args);
}

/**
 * 判断目录是否存在，新建同名副本或者强制覆盖删除
 * @param {String} targetDir
 * @param {boolean} force
 */
export async function checkDir(targetDir: string, force: boolean) {
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
export function updateFiles(rootApp: string, appName: string) {
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

/**
 *
 * @param filePath 文件路径
 * @param onFile 处理文件的函数
 * @param isContinue 是否继续遍历
 */
export function traverseFile(
  filePath: string,
  onFile: (abPath: string) => void,
  isContinue: (abPath: string) => boolean = () => true
) {
  // 遍历目录
  for (const abPath of fs.readdirSync(filePath)) {
    const path = `${filePath}/${abPath}`;

    // 判断是否继续遍历
    if (!isContinue(path)) {
      continue;
    }

    // 判断是否为目录
    if (fs.statSync(path).isDirectory()) {
      // 如果是目录，则递归遍历
      traverseFile(path, onFile, isContinue);
    } else {
      // 如果是文件，则处理文件
      onFile(path);
    }
  }
}
