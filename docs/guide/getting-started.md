# 快速开始

## 安装

你可以通过 npm、yarn 或 pnpm 全局安装 Create Your App：

```bash
# 使用 npm
npm install -g @rjkt/create-your-app

# 使用 yarn
yarn global add @rjkt/create-your-app

# 使用 pnpm
pnpm add -g @rjkt/create-your-app
```

安装后，你可以使用 `cya` 命令来使用 Create Your App。

## 创建项目

### 使用内置模板

```bash
# 创建基于 React + Webpack 的项目
cya create my-app

# 创建基于 React + CRA + TypeScript 的 H5 项目
cya create my-app -t @rjkt/cya-react-cra-ts-h5-template
```

### 使用快捷命令

```bash
# 创建基于 create-react-app 的项目
cya react my-app

# 创建基于 vite 的 Vue 项目
cya vue my-app
```

## 创建组件

```bash
# 创建 React 组件
cya component MyComponent

# 创建 TypeScript React 组件
cya component MyComponent -t ts-react

# 指定组件目录
cya component MyComponent -d src/components
```

## 在 Monorepo 中创建子包

```bash
# 基本用法
cya package my-package

# 指定作用域
cya package my-package --scope @custom

# 指定目标目录
cya package my-package --dir packages

# 指定模板目录
cya package my-package --template packages/template
```

## 转换模板

将现有项目转换为模板：

```bash
cya transform <源项目路径> <目标模板路径>
```

## 查看帮助

```bash
# 查看所有命令
cya --help

# 查看特定命令的帮助
cya create --help
cya component --help
cya package --help
```

## 下一步

- [配置选项](/guide/configuration) - 了解更多配置选项
- [模板列表](/templates/) - 查看所有可用模板
- [API 参考](/api/) - 查看详细的 API 文档
