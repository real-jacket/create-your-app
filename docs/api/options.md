# 配置选项

## 项目创建选项

使用 `cya create` 命令创建项目时，可以通过交互式命令行配置以下选项：

### 项目名称

项目的名称，会用于创建项目目录和设置 package.json 中的 name 字段。

### 模板选择

可以选择以下内置模板：

- `@rjkt/cya-react-webpack-template`：基于 webpack + js 的 React 项目
- `@rjkt/cya-react-cra-ts-h5-template`：基于 create-react-app + craco + typescript + h5 的项目
- `@rjkt/cya-react-vite-h5-template`：基于 vite + typescript 的 H5 项目
- `@rjkt/cya-react-vite-admin-template`：基于 vite + typescript 的管理后台项目
- `@rjkt/cya-lib-template`：基于 rollup + typescript 的库模板
- `@rjkt/cya-lib-monorepo-template`：基于 pnpm + typescript 的 monorepo 库模板

也可以通过 `-t` 选项直接指定模板：

```bash
cya create my-app -t @rjkt/cya-react-cra-ts-h5-template
```

### 覆盖已存在目录

如果目标目录已存在，可以通过 `-f` 选项强制覆盖：

```bash
cya create my-app -f
```

## 组件创建选项

使用 `cya component` 命令创建组件时，可以配置以下选项：

### 组件名称

组件的名称，会用于创建组件文件和设置组件内容。如果不在命令行中提供，会通过交互式命令行询问。

### 组件类型

可以通过 `-t` 选项指定组件类型：

```bash
# 创建React组件
cya component MyComponent -t react

# 创建TypeScript React组件
cya component MyComponent -t ts-react
```

### 组件目录

可以通过 `-d` 选项指定组件创建的目录：

```bash
cya component MyComponent -d src/components
```

## 包创建选项

使用 `cya package` 命令创建子包时，可以配置以下选项：

### 包名称

包的名称，会用于创建包目录和设置 package.json 中的 name 字段。

### 作用域

可以通过 `-s` 选项指定包的作用域：

```bash
cya package my-package -s @custom
```

默认作用域为 `@rjkt`。

### 目标目录

可以通过 `-d` 选项指定创建包的目录：

```bash
cya package my-package -d libs
```

默认目录为 `packages`。

### 模板目录

可以通过 `-t` 选项指定模板目录：

```bash
cya package my-package -t packages/custom-template
```

默认模板目录为 `packages/template`。

### 覆盖已存在目录

如果目标目录已存在，可以通过 `-f` 选项强制覆盖：

```bash
cya package my-package -f
```

## 模板转换选项

使用 `cya transform` 命令转换模板时，可以配置以下选项：

### 源项目路径

源项目的路径，必填。

### 目标模板路径

目标模板的路径，必填。

### 模板包名

可以通过 `-n` 选项指定模板包名：

```bash
cya transform ./my-project ./templates/my-template -n my-custom-template
```

如果不指定，会使用源目录名作为模板包名。
