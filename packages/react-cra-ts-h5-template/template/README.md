# <%= appName %>

## 运行命令

建议使用 `pnpm`，暂不支持切换成 `yarn`/`npm`

```bash
pnpm start              # 本地调试
pnpm build              # 打包 & 本地环境代码
pnpm build:analyze      # 打包本地环境代码 & 查看编译产物分析

# 不同环境发布
pnpm build-test         # 打包 & 测试环境代码
pnpm build-uat          # 打包 & UAT 环境代码
pnpm build-prod         # 打包 & 生产环境代码

pnpm commit             # （推荐）交互式书写 commit message
pnpm changelog          # （推荐）根据 commit message，自动升级 version、生成 CHANGELOG.md
# 更多命令
# yarn changelog  -f                # 初次创建项目，执行命令生成 CHANGELOG.md
# yarn changelog  -r patch          # 指定本次仅升级 patch 版本
# yarn changelog  -r minor          # 指定本次仅升级 minor 版本
# yarn changelog  -r major          # 指定本次仅升级 major 版本
# yarn changelog  -p alpha          # 指定本次升级 alpha 版本
# yarn changelog  -p beta           # 指定本次升级 beta 版本

yarn test               # 运行测试

# 推荐不要使用 eject，以便能够跟随 React 官方的脚步，随时在你的项目中升级 react-scripts
```

```bash
├── dist/                           # 打包目录
├── public/
├── src
│   ├── @types                      # 全局通用的类型，以 *.d.ts 结尾，不需要导入导出
│   │   └── index.d.ts
│   ├── assets                      # 公用静态资源
│   │     ├── images/                   # 公用图片
│   │     └── styles/                   # 全局公用样式
│   │
│   ├── utils
│   │   ├── $axios.ts                 # axios 请求通用配置
│   │   ├── hooks.ts                  # 一些有用的 hooks
│   │   ├── index.ts                  # 常用方法
│   │   ├── origin                    # 封装自动根据编译环境生成 origin
│   │   │     ├── generate.ts            # 通用生成函数
│   │   │     └── index.ts               # 常量
│   │   └── env.ts                    # 编译环境相关封装
│   │
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts          # 全局类型声明
│   ├── reportWebVitals.ts
│   ├── setupProxy.js               # 本地开发代理
│   └── setupTests.ts
│
├── .commitlintrc.js            # commitlint 配置
├── .env-cmdrc.js               # node 运行环境配置 & react-scripts 环境变量配置
├── .gitignore
├── .prettierignore
├── craco.config.js             # craco 配置，覆盖 react-scripts & webpack 配置
├── package.json
├── README.md
└──  tsconfig.json
```

> 项目根目录下 `.env-cmdrc.js` 文件配置了 node 运行环境变量和 react-scripts 环境变量，可以在这里配置，也可以在 `.env` 文件中配置，具体可以参考 [react-scripts 环境变量](https://create-react-app.dev/docs/adding-custom-environment-variables/)

## 问题答疑

- 由于 `craco@7.10` 版本存在 `postcss plugin` 无法注入的问题，`craco`最新代码已经修复，只是没有发布行版本，项目使用了 `pnpm patch` 进行修复，如此一来，请使用 pnpm 进行包管理开发。后续可以通过升级 `craco` 新版本解决这个问题，并可以使用其它 `npm`/`yarn` 包管理工具进行开发。
