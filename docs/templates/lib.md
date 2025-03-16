# 库模板

基于 rollup + typescript 的库模板，用于创建可发布到 npm 的 JavaScript/TypeScript 库。

## 特性

- 📦 基于 Rollup 构建
- 🔄 支持 CommonJS 和 ES Module
- 📘 TypeScript 支持
- 🧪 Jest 测试框架
- 📊 代码覆盖率报告
- 📏 ESLint + Prettier 代码规范
- 📝 自动生成类型声明文件
- 📈 包大小分析

## 使用方法

```bash
# 创建库项目
npx @rjkt/create-your-app create my-lib -t @rjkt/cya-lib-template
```

## 项目结构

```
my-lib/
  ├── src/                 # 源代码
  │   └── index.ts         # 入口文件
  ├── tests/               # 测试文件
  │   └── index.test.ts    # 测试用例
  ├── .eslintrc.js         # ESLint 配置
  ├── .prettierrc.js       # Prettier 配置
  ├── jest.config.js       # Jest 配置
  ├── rollup.config.js     # Rollup 配置
  ├── tsconfig.json        # TypeScript 配置
  ├── package.json         # 包信息
  └── README.md            # 项目说明
```

## 可用脚本

```bash
# 开发模式（监听文件变化）
npm run dev

# 构建库
npm run build

# 运行测试
npm test

# 代码检查
npm run lint

# 代码格式化
npm run format

# 分析包大小
npm run size

# 分析构建产物
npm run analyze
```

## 发布到 npm

1. 更新 `package.json` 中的版本号
2. 构建库：`npm run build`
3. 发布到 npm：`npm publish`

## 输出格式

库模板支持以下输出格式：

- CommonJS (CJS)：适用于 Node.js 环境
- ES Module (ESM)：适用于现代浏览器和支持 ES Module 的构建工具

## 自定义配置

### Rollup 配置

你可以在 `rollup.config.js` 文件中修改 Rollup 配置。

### TypeScript 配置

你可以在 `tsconfig.json` 文件中修改 TypeScript 配置。

### Jest 配置

你可以在 `jest.config.js` 文件中修改 Jest 配置。

### ESLint 配置

你可以在 `.eslintrc.js` 文件中修改 ESLint 配置。

### Prettier 配置

你可以在 `.prettierrc.js` 文件中修改 Prettier 配置。

## 添加依赖

```bash
# 添加生产依赖
npm install <package-name>

# 添加开发依赖
npm install <package-name> --save-dev

# 添加同级依赖
npm install <package-name> --save-peer
```
