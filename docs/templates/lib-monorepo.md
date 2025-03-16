# Monorepo 库模板

基于 pnpm + TypeScript 的 monorepo 库模板，用于创建和管理多包 JavaScript/TypeScript 库项目。

## 特性

- 📦 基于 pnpm workspace
- 🔄 统一的构建流程
- 📘 TypeScript 支持
- 🧪 Jest 测试框架
- 📊 代码覆盖率报告
- 📏 ESLint + Prettier 代码规范
- 📝 自动生成类型声明文件
- 🔄 版本管理（Changesets）
- 🚀 CI/CD 工作流（GitHub Actions）
- 📚 文档站点（VitePress）

## 使用方法

```bash
# 创建 monorepo 库项目
npx @rjkt/create-your-app create my-lib-monorepo -t @rjkt/cya-lib-monorepo-template
```

## 项目结构

```
my-lib-monorepo/
  ├── .changeset/           # Changesets 配置
  ├── .github/              # GitHub 工作流配置
  ├── docs/                 # 文档
  │   ├── .vitepress/       # VitePress 配置
  │   └── index.md          # 文档首页
  ├── packages/             # 子包
  │   ├── core/             # 核心包
  │   │   ├── src/          # 源代码
  │   │   ├── tests/        # 测试
  │   │   └── package.json  # 包信息
  │   ├── utils/            # 工具包
  │   │   ├── src/          # 源代码
  │   │   ├── tests/        # 测试
  │   │   └── package.json  # 包信息
  │   └── template/         # 子包模板
  ├── .eslintrc.js          # ESLint 配置
  ├── .prettierrc.js        # Prettier 配置
  ├── jest.config.js        # Jest 配置
  ├── tsconfig.json         # TypeScript 配置
  ├── package.json          # 根包信息
  ├── pnpm-workspace.yaml   # pnpm workspace 配置
  └── README.md             # 项目说明
```

## 可用脚本

```bash
# 安装依赖
pnpm install

# 构建所有包
pnpm build

# 开发模式（监听文件变化）
pnpm dev

# 运行测试
pnpm test

# 代码检查
pnpm lint

# 代码格式化
pnpm format

# 创建变更集
pnpm changeset

# 版本更新
pnpm version-packages

# 发布包
pnpm release

# 启动文档开发服务器
pnpm docs:dev

# 构建文档
pnpm docs:build
```

## 创建新包

你可以使用 Create Your App 的包创建功能：

```bash
# 在项目根目录执行
npx @rjkt/create-your-app package my-new-package
```

或者手动复制 `packages/template` 目录：

```bash
cp -r packages/template packages/my-new-package
```

然后修改 `packages/my-new-package/package.json` 中的包名和其他信息。

## 版本管理

该模板使用 Changesets 进行版本管理：

```bash
# 创建变更集
pnpm changeset

# 更新版本号
pnpm version-packages

# 发布包
pnpm release
```

## 包间依赖

在子包之间添加依赖：

```bash
# 在 utils 包中添加对 core 包的依赖
cd packages/utils
pnpm add @my-scope/core@workspace:*
```

## CI/CD 工作流

该模板包含以下 GitHub Actions 工作流：

- **CI**：在 Pull Request 时运行测试和构建
- **Release**：在合并到主分支时发布包
- **Docs**：在合并到主分支时构建和部署文档

## 自定义配置

### pnpm 配置

你可以在 `pnpm-workspace.yaml` 文件中修改 workspace 配置。

### TypeScript 配置

你可以在根目录的 `tsconfig.json` 和各个包中的 `tsconfig.json` 文件中修改 TypeScript 配置。

### ESLint 配置

你可以在 `.eslintrc.js` 文件中修改 ESLint 配置。

### Prettier 配置

你可以在 `.prettierrc.js` 文件中修改 Prettier 配置。

### Jest 配置

你可以在 `jest.config.js` 文件中修改 Jest 配置。

## 文档

该模板使用 VitePress 构建文档站点，文档源文件位于 `docs` 目录。

```bash
# 启动文档开发服务器
pnpm docs:dev

# 构建文档
pnpm docs:build
```
