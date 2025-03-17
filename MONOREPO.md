# Monorepo 最佳实践指南

本文档提供了在这个基于 TypeScript 的 monorepo 项目中的最佳实践指南。

## 目录结构

```
.
├── packages/                # 所有子包
│   ├── create-your-app/     # CLI工具
│   ├── lib-template/        # 库模板
│   ├── lib-monorepo-template/ # 库monorepo模板
│   ├── react-*-template/    # 各种React模板
│   ├── template/            # 子包通用模板
│   │   ├── tsconfig.json    # 子包通用TS配置
│   │   ├── .eslintrc.js     # 子包通用ESLint配置
│   │   ├── package.json     # 子包通用package.json
│   │   └── rollup.config.js # 子包通用Rollup配置
│   └── tsconfig.json        # 子包通用TS配置
├── docs/                    # 文档网站
├── .changeset/              # Changeset配置
├── .github/                 # GitHub工作流配置
│   └── workflows/           # GitHub Actions工作流
│       ├── ci.yml           # CI工作流
│       └── main.yml         # 发布工作流
├── .vscode/                 # VSCode配置
├── .husky/                  # Git hooks
├── tsconfig.base.json       # 基础TS配置
├── tsconfig.json            # 项目引用配置
├── .eslintrc.js             # ESLint配置
├── .prettierrc.js           # Prettier配置
├── turbo.json               # Turborepo配置
├── pnpm-workspace.yaml      # PNPM工作区配置
├── Dockerfile               # Docker配置
├── .dockerignore            # Docker忽略文件
├── .npmrc                   # NPM配置
└── package.json             # 根包配置
```

## 开发工作流

### 安装依赖

```bash
pnpm install
```

### 创建新包

#### 方法一：使用 cya package 命令（推荐）

使用项目内置的 CLI 工具可以快速创建新包：

```bash
# 基本用法
npx cya package my-new-package

# 指定作用域
npx cya package my-new-package --scope @custom

# 指定目标目录
npx cya package my-new-package --dir packages

# 指定模板目录
npx cya package my-new-package --template packages/template

# 强制覆盖已存在的目录
npx cya package my-new-package --force
```

这个命令会：

1. 从 `packages/template` 复制模板文件到新包目录
2. 自动修改 package.json 中的包名、版本等信息
3. 更新根目录的 tsconfig.json，添加新包的引用

#### 方法二：手动创建

1. 在`packages`目录下创建新目录
2. 复制`packages/template`目录下的文件到新目录
3. 修改`package.json`中的包名、描述等信息
4. 在根目录的`tsconfig.json`中添加新包的引用

### 开发

```bash
# 开发特定包
pnpm --filter=@rjkt/package-name dev

# 构建所有包
pnpm build:all

# 构建特定包
pnpm --filter=@rjkt/package-name build

# 运行测试
pnpm test

# 运行lint
pnpm lint

# 修复lint问题
pnpm lint:fix

# 格式化代码
pnpm format

# 检查依赖
pnpm check-deps

# 检查更新
pnpm check-updates

# 分析包大小
pnpm size

# 分析构建产物
pnpm analyze
```

### 提交代码

```bash
# 创建changeset
pnpm changeset

# 提交代码
pnpm commit
```

### 发布

```bash
# 版本更新
pnpm ci:version

# 发布
pnpm ci:publish
```

### 文档开发

```bash
# 开发文档
pnpm docs:dev

# 构建文档
pnpm docs:build
```

### Docker 构建

```bash
# 构建Docker镜像
docker build -t create-your-app .

# 运行Docker容器
docker run create-your-app --help
```

## 依赖管理

### 添加依赖到根目录

```bash
pnpm add -D <package>
```

### 添加依赖到特定包

```bash
pnpm --filter=@rjkt/package-name add <package>
```

### 添加工作区包作为依赖

```bash
pnpm --filter=@rjkt/package-name add @rjkt/another-package
```

## TypeScript 配置

所有包共享`tsconfig.base.json`中的基础配置，并在各自的`tsconfig.json`中扩展。

每个子包应该有自己的`tsconfig.json`，并根据自己的需求设置`rootDir`和`include`。

## ESLint 配置

所有包共享`.eslintrc.js`中的基础配置，并在各自的`.eslintrc.js`中扩展。

## 构建优化

使用 Turborepo 进行构建缓存和依赖管理，提高构建速度。

## 版本管理

使用 Changeset 进行版本管理和发布，支持独立版本和关联版本。

## CI/CD

使用 GitHub Actions 进行持续集成和部署，包括：

- 代码检查
- 测试
- 构建
- 发布

## 性能分析

- 使用`rollup-plugin-visualizer`分析构建产物
- 使用`size-limit`检查包大小

## 最佳实践

1. **保持包的独立性**：每个包应该有明确的职责和边界
2. **共享配置**：通过根目录的配置文件共享通用配置
3. **统一代码风格**：使用 ESLint 和 Prettier 保持一致的代码风格
4. **自动化测试**：为每个包编写单元测试
5. **文档**：为每个包提供清晰的文档
6. **版本管理**：使用 Changeset 管理版本和发布
7. **构建优化**：使用 Turborepo 优化构建流程
8. **性能监控**：使用 size-limit 监控包大小
9. **容器化**：使用 Docker 容器化应用
10. **持续集成**：使用 GitHub Actions 进行持续集成
