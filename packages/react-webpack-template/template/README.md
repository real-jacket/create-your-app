<%= appName %>

# 开始

## 安装依赖

使用 `pnpm`/`npm`/`yarn` 安装依赖

## 可用的命令

以下命令以 `npm` 为例


### `npm start`

本地启动应用，在浏览器打开 [http://localhost:9000](http://localhost:9000) 

### `npm build`

打包应用，生成 `dist` 目录。

在 `npm` 环境下，`build` 命令会默认执行 `prebuild` 命令，构建 dll，然后会进行打包。
:::info
如果是使用 `pnpm`, 则 `prebuild` 命令不会执行，需要手动执行，这是由于 `pnpm` 特性决定的
:::


### `npm commit`

提交代码，使用 `commitlint` 校验提交信息，并 lint 提交的代码。

## 项目介绍

### 目录结构
```
.
├── README.md                 # 项目介绍
├── commitlint.config.js      # commit 提交配置
├── config                    # webpack 配置目录
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   ├── webpack.dll.js
│   └── webpack.prod.js
├── jsconfig.json             # js docs 配置文件
├── lint-staged.config.js
├── package.json
├── public
│   └── index.html
└── src                        
    ├── App.css
    ├── App.js
    ├── assets                 # 静态资源目录
    │   ├── img
    │   │   └── cat.svg
    │   └── index.scss
    ├── components             # 组件目录
    │   └── Cat
    │       └── index.js
    ├── index.css
    └── index.js               # 入口文件
```
