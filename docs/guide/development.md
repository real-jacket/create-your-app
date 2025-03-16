# 开发环境配置

本文档提供了设置和使用开发环境的详细指南。

## 系统要求

- **Node.js**: 16.x 或更高版本
- **PNPM**: 8.x 或更高版本
- **Git**: 最新版本

## 安装依赖

### 安装 Node.js

推荐使用 [nvm](https://github.com/nvm-sh/nvm) 或 [fnm](https://github.com/Schniz/fnm) 管理 Node.js 版本：

```bash
# 使用 nvm
nvm install 16
nvm use 16

# 或使用 fnm
fnm install 16
fnm use 16
```

### 安装 PNPM

```bash
npm install -g pnpm@8
```

## 克隆仓库

```bash
git clone https://github.com/real-jacket/create-your-app.git
cd create-your-app
```

## 安装项目依赖

```bash
pnpm install
```

## 开发工作流

### 启动开发模式

```bash
# 开发 CLI 工具
pnpm dev

# 开发文档网站
pnpm docs:dev
```

### 构建项目

```bash
# 构建所有包
pnpm build:all

# 构建特定包
pnpm --filter=@rjkt/create-your-app build
```

### 运行测试

```bash
# 运行所有测试
pnpm test

# 运行特定包的测试
pnpm --filter=@rjkt/create-your-app test
```

### 代码检查和格式化

```bash
# 运行 ESLint 检查
pnpm lint

# 自动修复 ESLint 问题
pnpm lint:fix

# 格式化代码
pnpm format
```

## Docker 开发环境

我们提供了 Docker 开发环境，确保所有开发者使用相同的环境：

### 构建 Docker 镜像

```bash
docker build -t create-your-app-dev -f Dockerfile.dev .
```

### 运行 Docker 容器

```bash
docker run -it --rm -v $(pwd):/app create-your-app-dev bash
```

## 开发新功能

1. 创建新分支：

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. 开发功能并提交代码：

   ```bash
   git add .
   pnpm commit
   ```

3. 创建变更集：

   ```bash
   pnpm changeset
   ```

4. 推送分支并创建 Pull Request：

   ```bash
   git push origin feature/your-feature-name
   ```

## 调试

### 调试 CLI 工具

1. 链接 CLI 工具到全局：

   ```bash
   cd packages/create-your-app
   pnpm link --global
   ```

2. 使用 Node.js 调试器：

   ```bash
   node --inspect-brk $(which cya) create my-app
   ```

### 调试测试

```bash
# 使用 Jest 调试模式
pnpm --filter=@rjkt/create-your-app test --debug
```

## 常见问题

### 依赖问题

如果遇到依赖问题，尝试清理缓存并重新安装：

```bash
pnpm clean
pnpm install
```

### 构建错误

如果遇到构建错误，检查 TypeScript 配置和依赖版本：

```bash
pnpm type-check
```

## IDE 配置

### VSCode

我们在 `.vscode` 目录中提供了推荐的 VSCode 配置，包括：

- 推荐的扩展
- 编辑器设置
- 调试配置

打开项目后，VSCode 会提示安装推荐的扩展。
