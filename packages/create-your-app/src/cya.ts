#! /usr/bin/env node

import { program } from 'commander';
import { cli, cliList } from './cli';
import pkg from '../package.json';
import create from './utils/create';

program
  // 创建项目
  .command('create <app-name>')
  .description('create your new app')
  .option('-f,--force', 'overwrite target directory if it exit')
  .option('-t,--template <path-to-template>', 'template', '')
  .action((appName: string, options) => {
    create(appName, options);
  });

/**
 * 兼容使用常见的 cli 命令
 * vue： vite
 * react： create-react-app
 */
cliList.map(({ name, description }) => {
  program
    .command(name)
    .description(description)
    .action(() => {
      cli(program.args);
    });
});

program
  // 创建组件
  .command('component <component-type> [component-name]')
  .description('create your new component')
  .option('-f,--force', 'overwrite target directory if it exit')
  .option('-d,--dir', 'the dir that created component should locate in ')
  .action((componentType, componentName, option) => {
    console.log('type, name, option: ', componentType, componentName, option);
    // require('../lib/create')(name, option);
  });

program
  // 当为 monorepo 包时，创建子包
  .command('package <pkg-name>')
  .description('create your new package in the monorepo project')
  .option('-f,--force', 'overwrite target directory if it exit')
  .option('-d,--dir', 'the dir that created package should locate in', '.')
  .option('-t,--template', 'template', '')
  .action((pkgName, option) => {
    console.log('项目：', pkgName, option);
    // require('../lib/create')(name, option);
  });

program
  // 配置版本号信息
  .version(`cya current version : \nv${pkg.version}`, '-v,--version')
  .usage('<command> [option]');

// 解析用户执行命令传入参数
program.parse(process.argv);
