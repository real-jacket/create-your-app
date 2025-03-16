# React Webpack 模板

基于 Webpack 的 React 项目模板，提供完整的开发环境和构建配置。

## 特性

- 🚀 基于 Webpack 5 构建
- ⚛️ React 18 支持
- 📦 开箱即用的 Babel 配置
- 🎨 支持 CSS Modules 和 Sass
- 🔍 ESLint 和 Prettier 集成
- 🧪 Jest 测试框架集成
- 📱 响应式设计支持
- 🌐 多环境配置（开发、测试、生产）

## 快速开始

使用 Create Your App CLI 创建项目：

```bash
npx @rjkt/create-your-app create my-app --template react-webpack
# 或使用简写命令
npx @rjkt/create-your-app react my-app
```

进入项目目录并启动开发服务器：

```bash
cd my-app
npm install
npm run dev
```

## 项目结构

```
my-app/
├── public/               # 静态资源目录
│   ├── index.html        # HTML 模板
│   └── favicon.ico       # 网站图标
├── src/                  # 源代码目录
│   ├── assets/           # 资源文件（图片、字体等）
│   ├── components/       # 组件目录
│   ├── pages/            # 页面目录
│   ├── styles/           # 样式目录
│   ├── utils/            # 工具函数
│   ├── App.jsx           # 应用入口组件
│   └── index.jsx         # 应用入口文件
├── .babelrc              # Babel 配置
├── .eslintrc.js          # ESLint 配置
├── .prettierrc           # Prettier 配置
├── jest.config.js        # Jest 配置
├── webpack.config.js     # Webpack 配置
└── package.json          # 项目配置和依赖
```

## 可用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run test` - 运行测试
- `npm run lint` - 运行 ESLint 检查
- `npm run lint:fix` - 自动修复 ESLint 问题
- `npm run format` - 格式化代码

## 自定义配置

### Webpack 配置

可以通过修改 `webpack.config.js` 文件来自定义 Webpack 配置。

### Babel 配置

可以通过修改 `.babelrc` 文件来自定义 Babel 配置。

### ESLint 配置

可以通过修改 `.eslintrc.js` 文件来自定义 ESLint 配置。

## 部署

构建生产版本：

```bash
npm run build
```

构建完成后，`dist` 目录中的文件可以部署到任何静态文件服务器。
