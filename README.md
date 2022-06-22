# Create Your App

这是一个 cli 工具，旨在降低 web 开发的前置成本。

## 功能

目前支持作者内置的 react + webpack 模板，后续功能持续开发中，具体开发计划可以参考项目的 [issue](https://github.com/real-jacket/create-your-app/issues)。

## 本地开发指南

1. 安装依赖 `pnpm i`，如果没有安装 `pnpm` ，请参考 [pnpm官网](https://pnpm.io/) 进行安装。
2. 在项目 `create-your-app/package/create-your-app`目录下使用 `yarn link` 或 `npm link` 链接到全局。
3. 获取内置模板`react-template` 的本地路径，使用命令 `cya create -t <local-template-path> <project-name>`进行项目的创建测试。

注意：在 Linux 与 Macos 系统下还需要修改执行命令文件的权限为 775,`chmod 755 cya.js`
