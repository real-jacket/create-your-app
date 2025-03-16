# 命令行 API

Create Your App 提供了一系列命令行 API，用于创建项目、组件和管理 monorepo。

## 主要命令

### `cya create`

创建新项目。

```bash
cya create <app-name> [options]
```

**参数：**

- `<app-name>`：项目名称，必填

**选项：**

- `-f, --force`：如果目标目录已存在，强制覆盖
- `-t, --template <path-to-template>`：指定模板路径或名称

**示例：**

```bash
# 使用默认模板创建项目
cya create my-app

# 使用指定模板创建项目
cya create my-app -t @rjkt/cya-react-cra-ts-h5-template

# 强制覆盖已存在的目录
cya create my-app --force
```

### `cya component`

创建组件。

```bash
cya component [component-name] [options]
```

**参数：**

- `[component-name]`：组件名称，可选（如果不提供，会通过交互式命令行询问）

**选项：**

- `-t, --template <component-type-template>`：组件类型或模板目录，默认为 `react`
- `-d, --dir <dir-of-component>`：组件创建的目录

**示例：**

```bash
# 创建React组件
cya component MyComponent

# 创建TypeScript React组件
cya component MyComponent -t ts-react

# 指定组件目录
cya component MyComponent -d src/components
```

### `cya package`

在 monorepo 项目中创建子包。

```bash
cya package <pkg-name> [options]
```

**参数：**

- `<pkg-name>`：包名称，必填

**选项：**

- `-f, --force`：如果目标目录已存在，强制覆盖
- `-d, --dir <dir-path>`：创建包的目录，默认为 `packages`
- `-t, --template <template-path>`：模板目录路径，默认为 `packages/template`
- `-s, --scope <scope>`：包的作用域，默认为 `@rjkt`

**示例：**

```bash
# 创建基本包
cya package my-package

# 指定作用域
cya package my-package --scope @custom

# 指定目标目录和模板
cya package my-package --dir libs --template packages/custom-template
```

### `cya transform`

将源项目转换为模板。

```bash
cya transform <source-template-path> <target-template-path> [options]
```

**参数：**

- `<source-template-path>`：源项目路径，必填
- `<target-template-path>`：目标模板路径，必填

**选项：**

- `-n, --name <package-name>`：模板包名

**示例：**

```bash
# 转换项目为模板
cya transform ./my-project ./templates/my-template

# 指定模板包名
cya transform ./my-project ./templates/my-template -n my-custom-template
```

## 快捷命令

### `cya react`

使用 create-react-app 创建 React 项目。

```bash
cya react <app-name> [options]
```

### `cya vue`

使用 vite 创建 Vue 项目。

```bash
cya vue <app-name> [options]
```

## 其他命令

### `cya list`

列出所有内置模板。

```bash
cya list
```

### `cya --version`

显示当前版本。

```bash
cya --version
# 或
cya -v
```

### `cya --help`

显示帮助信息。

```bash
cya --help
# 或
cya -h
```
