import path from 'path';

import camelcase from 'camelcase';
import chalk from 'chalk';
import fsExtra from 'fs-extra';
import inquirer from 'inquirer';
import replace from 'replace-in-file';

const { ensureDir, existsSync, readdirSync, remove, statSync } = fsExtra;
const { prompt } = inquirer;

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
  if (existsSync(targetDir)) {
    if (force) {
      await remove(targetDir);
    } else {
      const { action } = await prompt<{ action: boolean }>([
        {
          type: 'confirm',
          name: 'action',
          message: '当前目录已经存在，是否需要覆盖创建,否则新建同名副本目录',
          default: true
        }
      ]);

      if (action) {
        await remove(targetDir);
      } else {
        let i = 1;
        let latestDir = targetDir + '1';
        // 存在则目录名递增
        while (existsSync(latestDir)) {
          latestDir = targetDir + `${++i}`;
        }
        targetDir = latestDir;
      }
    }
  }

  // 确保目录存在，并等待操作完成
  await ensureDir(targetDir);
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
    // 使用 glob 模式匹配文件
    const files = [
      path.join(rootApp, 'src', '**/*'),
      path.join(rootApp, 'public', '/*'),
      path.join(rootApp, 'README.md')
    ];

    // 替换模板中的占位符
    replace.sync({
      files,
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
  for (const abPath of readdirSync(filePath)) {
    const pathStr = `${filePath}/${abPath}`;

    // 判断是否继续遍历
    if (!isContinue(pathStr)) {
      continue;
    }

    // 判断是否为目录
    if (statSync(pathStr).isDirectory()) {
      // 如果是目录，则递归遍历
      traverseFile(pathStr, onFile, isContinue);
    } else {
      // 如果是文件，则处理文件
      onFile(pathStr);
    }
  }
}
