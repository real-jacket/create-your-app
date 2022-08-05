# Create Your App

这是一个 cli 工具，旨在降低 web 开发的前置成本。

## 快速开始

```shell
npx @rjkt/create-your-app create my-app
cd my-app
yarn dev
```

然后在浏览器里打开 [http://localhost:9000/](http://localhost:9000/)。

## 使用方法

## 定制化创建项目

目前只支持内置的 react + webpack 自定义项目。

```bash
npx @rjkt/create-your-app create my-app
```

### 快速创建项目

- react：基于 create-react-app 创建项目，`npx @rjkt/create-your-app react my-app`
- vue：基于 vite 创建项目，`npx @rjkt/create-your-app vue my-app`

## 功能

目前支持作者内置的 react + webpack 模板，后续功能持续开发中，具体开发计划可以参考项目的 [issue](https://github.com/real-jacket/create-your-app/issues)。

### 创建组件

支持使用 `npx @rjkt/create-your-app component my-component` 创建组件。目前内置仅支持 react、ts-react 组件。其余框架需自定义,唯一的占位符即创建组件的名字 `component-name`

## 本地开发指南

1. 安装依赖 `pnpm i`，如果没有安装 `pnpm` ，请参考 [pnpm官网](https://pnpm.io/installation) 进行安装。
2. 在项目 `create-your-app/package/create-your-app`目录下使用 `yarn link` 或 `npm link` 链接到全局。
3. 获取内置模板`react-template` 的本地路径，使用命令 `cya create -t <local-template-path> <project-name>`进行项目的创建测试。

注意：在 Linux 与 Macos 系统下还需要修改执行命令文件的权限为 755,`chmod 755 cya.js`
