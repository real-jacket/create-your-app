# Create Your App

一个强大的 CLI 工具，旨在降低 Web 开发的前置成本，快速创建和定制化各类前端项目。

## 快速开始

```shell
# 使用 npm
npx @rjkt/create-your-app create my-app

# 使用 yarn
yarn create @rjkt/create-your-app my-app

# 使用 pnpm
pnpm create @rjkt/create-your-app my-app

# 进入项目目录
cd my-app

# 启动开发服务器
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

然后在浏览器中打开 [http://localhost:9000/](http://localhost:9000/) 查看你的应用。

## 使用方法

### 创建项目

#### 使用默认模板

```bash
npx @rjkt/create-your-app create my-app
```

#### 指定模板

```bash
npx @rjkt/create-your-app create my-app -t @rjkt/cya-react-cra-ts-h5-template
```

#### 强制覆盖已存在目录

```bash
npx @rjkt/create-your-app create my-app -f
```

### 快捷命令

Create Your App 提供了一些快捷命令，用于快速创建特定类型的项目：

- **React 项目**：基于 create-react-app 创建

  ```bash
  npx @rjkt/create-your-app react my-app
  ```

- **Vue 项目**：基于 vite 创建

  ```bash
  npx @rjkt/create-your-app vue my-app
  ```

### 创建组件

```bash
# 创建基本React组件
npx @rjkt/create-your-app component MyComponent

# 创建TypeScript React组件
npx @rjkt/create-your-app component MyComponent -t ts-react

# 指定组件创建目录
npx @rjkt/create-your-app component MyComponent -d src/components
```

### 在 Monorepo 中创建包

```bash
# 创建基本包
npx @rjkt/create-your-app package my-package

# 指定作用域
npx @rjkt/create-your-app package my-package -s @custom

# 指定目标目录和模板
npx @rjkt/create-your-app package my-package -d libs -t packages/custom-template
```

### 转换项目为模板

```bash
npx @rjkt/create-your-app transform ./my-project ./templates/my-template -n my-custom-template
```

## 内置模板

Create Your App 提供了多种项目模板，满足不同的开发需求：

- **[@rjkt/cya-react-webpack-template](/packages/react-webpack-template)**：基于 webpack + js 的 React 项目
- **[@rjkt/cya-react-cra-ts-h5-template](/packages/react-cra-ts-h5-template)**：基于 create-react-app + craco + typescript + h5 的项目
- **[@rjkt/cya-react-vite-h5-template](/packages/react-vite-h5-template)**：基于 vite + typescript 的 H5 项目（开发中）
- **[@rjkt/cya-react-vite-admin-template](/packages/react-vite-admin-template)**：基于 vite + typescript 的管理后台项目（开发中）
- **[@rjkt/cya-lib-template](/packages/lib-template)**：基于 rollup + typescript 的库模板（开发中）
- **[@rjkt/cya-lib-monorepo-template](/packages/lib-monorepo-template)**：基于 pnpm + typescript 的 monorepo 库模板（开发中）

## 本地开发指南

### 环境准备

1. 安装依赖

   ```bash
   pnpm i
   ```

   如果没有安装 `pnpm`，请参考 [pnpm 官网](https://pnpm.io/installation) 进行安装。

2. 链接到全局

   ```bash
   # 进入CLI工具目录
   cd packages/create-your-app

   # 链接到全局
   npm link
   # 或
   yarn link
   ```

3. 在 Linux 与 macOS 系统下，还需要修改执行命令文件的权限

   ```bash
   chmod 755 lib/cya.js
   ```

### 测试 CLI 工具

获取内置模板的本地路径，使用以下命令进行项目的创建测试：

```bash
cya create -t <local-template-path> <project-name>
```

### 模板开发

1. 基于现有项目创建模板

   ```bash
   cya transform <source-template-path> <target-template-path>
   ```

2. 更新现有模板
   - 使用命令创建项目：`cya create -t <local-template-path> <project-name>`
   - 在这个项目的基础上进行改动
   - 改动完成后执行 `cya transform` 命令更新模板

## 贡献指南

欢迎贡献代码或提出建议！请查看我们的[贡献指南](CONTRIBUTING.md)了解更多信息。

## 开发计划

具体开发计划可以参考项目的 [Issues](https://github.com/real-jacket/create-your-app/issues)。

## 许可证

[MIT](LICENSE)
