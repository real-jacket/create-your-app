# 配置

## 命令行选项

### create 命令

创建新项目的命令。

```bash
cya create <app-name> [options]
```

选项：

| 选项                                | 描述                         | 默认值                             |
| ----------------------------------- | ---------------------------- | ---------------------------------- |
| `-f, --force`                       | 如果目标目录已存在，强制覆盖 | `false`                            |
| `-t, --template <path-to-template>` | 指定模板路径或名称           | `@rjkt/cya-react-webpack-template` |

### component 命令

创建组件的命令。

```bash
cya component [component-name] [options]
```

选项：

| 选项                                       | 描述               | 默认值   |
| ------------------------------------------ | ------------------ | -------- |
| `-t, --template <component-type-template>` | 组件类型或模板目录 | `react`  |
| `-d, --dir <dir-of-component>`             | 组件创建的目录     | 当前目录 |

### package 命令

在 monorepo 项目中创建子包的命令。

```bash
cya package <pkg-name> [options]
```

选项：

| 选项                             | 描述                         | 默认值              |
| -------------------------------- | ---------------------------- | ------------------- |
| `-f, --force`                    | 如果目标目录已存在，强制覆盖 | `false`             |
| `-d, --dir <dir-path>`           | 创建包的目录                 | `packages`          |
| `-t, --template <template-path>` | 模板目录路径                 | `packages/template` |
| `-s, --scope <scope>`            | 包的作用域                   | `@rjkt`             |

### transform 命令

将源项目转换为模板的命令。

```bash
cya transform <source-template-path> <target-template-path> [options]
```

选项：

| 选项                        | 描述     | 默认值   |
| --------------------------- | -------- | -------- |
| `-n, --name <package-name>` | 模板包名 | 源目录名 |

## 模板配置

### 内置模板

Create Your App 内置了以下模板：

- `@rjkt/cya-react-webpack-template`：基于 webpack + js 的 React 项目
- `@rjkt/cya-react-cra-ts-h5-template`：基于 create-react-app + craco + typescript + h5 的项目
- `@rjkt/cya-react-vite-h5-template`：基于 vite + typescript 的 H5 项目
- `@rjkt/cya-react-vite-admin-template`：基于 vite + typescript 的管理后台项目
- `@rjkt/cya-lib-template`：基于 rollup + typescript 的库模板
- `@rjkt/cya-lib-monorepo-template`：基于 pnpm + typescript 的 monorepo 库模板

### 自定义模板

你可以使用 `transform` 命令创建自己的模板：

```bash
cya transform <源项目路径> <目标模板路径> -n my-custom-template
```

然后使用自定义模板创建项目：

```bash
cya create my-app -t <目标模板路径>
```

## 组件模板

### 内置组件模板

- `react`：React 函数组件
- `ts-react`：TypeScript React 函数组件

### 自定义组件模板

你可以在项目中创建自定义组件模板，放在项目根目录的 `component` 目录下，然后使用 `-t` 选项指定：

```bash
cya component MyComponent -t ./my-custom-template
```

组件模板中可以使用 `component-name` 作为占位符，创建时会被替换为实际的组件名。
