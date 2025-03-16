# React Webpack 模板

基于 webpack + js 的 React 项目模板，提供了完整的开发环境和构建配置。

## 特性

- 🚀 基于 Webpack 5 构建
- ⚛️ React 18
- 🔄 热更新
- 📦 代码分割
- 🎨 CSS Modules 支持
- 🧪 Jest 测试框架
- 🔍 ESLint + Prettier 代码规范
- 🪝 Git Hooks (husky + lint-staged)
- 📝 Conventional Commits

## 使用方法

```bash
# 创建项目
npx @rjkt/create-your-app create my-app

# 或者使用快捷命令
npx @rjkt/create-your-app react my-app
```

## 项目结构

```
my-app/
  ├── config/                # Webpack 配置
  │   ├── webpack.common.js  # 通用配置
  │   ├── webpack.dev.js     # 开发环境配置
  │   ├── webpack.prod.js    # 生产环境配置
  │   └── webpack.dll.js     # DLL 配置
  ├── public/                # 静态资源
  │   ├── index.html         # HTML 模板
  │   └── favicon.ico        # 网站图标
  ├── src/                   # 源代码
  │   ├── components/        # 组件
  │   ├── App.js             # 应用入口组件
  │   └── index.js           # 入口文件
  ├── .babelrc               # Babel 配置
  ├── .eslintrc.js           # ESLint 配置
  ├── .prettierrc.js         # Prettier 配置
  ├── jsconfig.json          # JavaScript 配置
  ├── package.json           # 包信息
  └── README.md              # 项目说明
```

## 可用脚本

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 构建 DLL
npm run build:dll

# 运行测试
npm test

# 代码检查
npm run lint

# 代码格式化
npm run format
```

## 自定义配置

### Webpack 配置

你可以在 `config` 目录下修改 Webpack 配置：

- `webpack.common.js` - 通用配置
- `webpack.dev.js` - 开发环境配置
- `webpack.prod.js` - 生产环境配置
- `webpack.dll.js` - DLL 配置

### Babel 配置

你可以在 `.babelrc` 文件中修改 Babel 配置。

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
npx @rjkt/create-your-app component MyComponent
```

这将在 `src/components` 目录下创建一个新的组件。
