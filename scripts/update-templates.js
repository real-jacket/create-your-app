#!/usr/bin/env node

/**
 * 自动更新所有模板的依赖版本
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 模板目录
const templatesDir = path.join(__dirname, '../packages');
// 模板列表
const templates = [
  'react-webpack-template',
  'react-cra-ts-h5-template',
  'react-vite-h5-template',
  'react-vite-admin-template',
  'lib-template',
  'lib-monorepo-template'
];

// 更新单个模板的依赖
function updateTemplateDependencies(templatePath) {
  console.log(`更新模板: ${path.basename(templatePath)}`);

  try {
    // 检查 package.json 是否存在
    const packageJsonPath = path.join(templatePath, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
      console.log(`  跳过: ${packageJsonPath} 不存在`);
      return;
    }

    // 更新依赖
    console.log('  检查依赖更新...');
    execSync('npx npm-check-updates -u', {
      cwd: templatePath,
      stdio: 'inherit'
    });

    console.log('  依赖更新完成');
  } catch (error) {
    console.error(`  更新失败: ${error.message}`);
  }
}

// 主函数
function main() {
  console.log('开始更新模板依赖...');

  // 遍历所有模板
  templates.forEach((template) => {
    const templatePath = path.join(templatesDir, template);
    if (fs.existsSync(templatePath)) {
      updateTemplateDependencies(templatePath);
    } else {
      console.log(`跳过: ${template} 目录不存在`);
    }
  });

  console.log('所有模板依赖更新完成');
}

main();
