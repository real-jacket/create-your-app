## Package 命令

`package` 命令用于在 monorepo 项目中创建新的包。

### 基本用法

```bash
cya package <pkg-name> [options]
```

### 选项

- `-f, --force`: 如果目标目录已存在，强制覆盖
- `-d, --dir <directory>`: 指定创建包的目录，默认为当前目录
- `-t, --template <template-path>`: 指定使用的模板，可以是预设模板名称或路径
- `-s, --scope <scope>`: 包的作用域（例如 @scope/package-name）
- `-v, --version <version>`: 初始包版本
- `--description <description>`: 包描述

### 预设模板

- `packages/template`: 默认库模板
- `packages/lib-template`: React 组件库模板
- `packages/lib-monorepo-template`: Monorepo 子包模板

### 工作区目录

创建包时，命令会自动检测 monorepo 项目中的工作区目录，并提供交互式选择界面：

1. **首先显示工作区目录选择列表**，默认选择第一个有效的工作区目录（而不是当前目录）
2. 如果选择"自定义路径"，可以输入任意目录路径，系统会自动创建目录并添加到工作区配置
3. 选择目录后，才会进入包名、版本等其他配置的交互式选择
4. 如果没有找到任何工作区目录，会默认使用 `packages` 目录

这确保了新创建的包能够被正确地集成到 monorepo 项目中，并且始终放置在适当的工作区目录下，而不是当前执行命令的目录。

### 示例

创建基本包：

```bash
cya package my-package
```

创建带作用域的包：

```bash
cya package my-package -s my-org
```

使用特定模板创建包：

```bash
cya package my-package -t packages/lib-template
```

指定版本和描述：

```bash
cya package my-package -v 1.0.0 --description "我的awesome包"
```

在特定目录创建包：

```bash
cya package my-package -d packages/libs
```

在自定义目录创建包（会自动检查并添加到工作区）：

```bash
cya package my-package -d custom/path
```

### 功能

- 交互式配置：如果未提供必要参数，将提示用户输入
- 自动更新 tsconfig.json：添加对新包的引用
- 自动更新工作区配置：更新根目录 package.json 的 workspaces 配置
- 创建 README.md：自动生成基本的文档
- 替换模板中的占位符：使用包名替换模板中的占位符
- 工作区目录检测：自动检测并管理 monorepo 工作区目录
