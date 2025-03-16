# React CRA TypeScript H5 模板

基于 create-react-app + craco + typescript 的 H5 项目模板，提供了完整的移动端开发环境和构建配置。

## 特性

- ⚛️ React 18
- 📱 移动端适配（使用 postcss-px-to-viewport）
- 🔢 TypeScript 支持
- 🎨 样式支持（Less、CSS Modules）
- 📦 Craco 配置覆盖
- 🧪 Jest 测试框架
- 🔍 ESLint + Prettier 代码规范
- 📱 移动端调试工具（eruda）
- 📊 性能监控与分析

## 使用方法

```bash
# 创建项目
npx @rjkt/create-your-app create my-app -t @rjkt/cya-react-cra-ts-h5-template
```

## 项目结构

```
my-app/
  ├── public/                # 静态资源
  │   ├── index.html         # HTML 模板
  │   └── favicon.ico        # 网站图标
  ├── src/                   # 源代码
  │   ├── assets/            # 资源文件
  │   ├── components/        # 组件
  │   ├── pages/             # 页面
  │   ├── services/          # 服务
  │   ├── utils/             # 工具函数
  │   ├── App.tsx            # 应用入口组件
  │   └── index.tsx          # 入口文件
  ├── craco.config.js        # Craco 配置
  ├── .eslintrc.js           # ESLint 配置
  ├── .prettierrc.js         # Prettier 配置
  ├── tsconfig.json          # TypeScript 配置
  ├── package.json           # 包信息
  └── README.md              # 项目说明
```

## 可用脚本

```bash
# 启动开发服务器
npm start

# 构建生产版本
npm run build

# 运行测试
npm test

# 代码检查
npm run lint

# 代码格式化
npm run format
```

## 移动端适配

该模板使用 `postcss-px-to-viewport` 进行移动端适配，默认设计稿宽度为 375px。你可以在 `craco.config.js` 中修改相关配置：

```js
const pxToViewport = require('postcss-px-to-viewport');

module.exports = {
  style: {
    postcss: {
      plugins: [
        pxToViewport({
          viewportWidth: 375, // 设计稿宽度
          unitPrecision: 5,
          viewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false
        })
      ]
    }
  }
  // ...其他配置
};
```

## 自定义配置

### Craco 配置

你可以在 `craco.config.js` 文件中修改 CRA 的默认配置，包括 webpack、babel、postcss 等。

### TypeScript 配置

你可以在 `tsconfig.json` 文件中修改 TypeScript 配置。

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
```

## 创建组件

你可以使用 Create Your App 的组件创建功能：

```bash
npx @rjkt/create-your-app component MyComponent -t ts-react
```

这将在 `src/components` 目录下创建一个新的 TypeScript React 组件。
