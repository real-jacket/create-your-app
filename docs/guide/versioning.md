# 版本管理策略

本项目使用 [Changesets](https://github.com/changesets/changesets) 进行版本管理和发布。这个文档描述了我们的版本管理策略和工作流程。

## 语义化版本

我们遵循 [语义化版本 2.0.0](https://semver.org/lang/zh-CN/) 规范，版本号格式为：`主版本号.次版本号.修订号`。

- **主版本号**：当你做了不兼容的 API 修改
- **次版本号**：当你做了向下兼容的功能性新增
- **修订号**：当你做了向下兼容的问题修正

## 版本增量规则

在创建 changeset 时，需要根据变更的性质选择版本增量类型：

- **major**：不兼容的 API 变更，如：
  - 删除或重命名公共 API
  - 更改公共 API 的行为方式
  - 更改公共 API 的参数或返回类型
- **minor**：向下兼容的功能性新增，如：
  - 添加新功能或新的公共 API
  - 添加新的可选参数
  - 添加新的配置选项
- **patch**：向下兼容的问题修正，如：
  - 修复 bug
  - 性能优化
  - 文档更新
  - 依赖更新（不影响 API）

## 工作流程

### 1. 创建变更集

当你完成一个功能或修复一个 bug 时，需要创建一个变更集：

```bash
pnpm changeset
```

这个命令会引导你：

1. 选择受影响的包
2. 选择版本增量类型（major、minor 或 patch）
3. 提供变更描述

### 2. 提交变更

创建变更集后，将生成的 `.changeset` 目录下的文件一起提交：

```bash
git add .changeset
git commit -m "chore: add changeset for [简短描述]"
```

### 3. 版本更新

当变更集被合并到主分支后，CI 会自动运行版本更新：

```bash
pnpm ci:version
```

这个命令会：

1. 读取所有变更集
2. 更新受影响包的版本
3. 更新依赖关系
4. 生成或更新 CHANGELOG.md

### 4. 发布

版本更新后，CI 会自动发布包：

```bash
pnpm ci:publish
```

## 依赖关系处理

在 monorepo 中，包之间可能存在依赖关系。Changesets 会自动处理这些依赖关系：

- 当一个包发生变更时，所有依赖它的包也会更新
- 内部依赖的版本更新策略在 `.changeset/config.json` 中配置

## 预发布

对于重大变更，我们使用预发布版本进行测试：

```bash
pnpm changeset pre enter next
pnpm ci:version
pnpm ci:publish
```

这会发布带有 `next` 标签的预发布版本。

## 手动发布

在特殊情况下，可能需要手动发布：

```bash
# 进入需要发布的包目录
cd packages/my-package

# 发布
npm publish
```

## 版本历史

每个包的版本历史记录在其 `CHANGELOG.md` 文件中，包含每个版本的变更内容和贡献者信息。
