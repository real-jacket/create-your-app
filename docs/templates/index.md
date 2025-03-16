# 模板概览

Create Your App 提供了多种项目模板，满足不同的开发需求。

## 内置模板

### React 模板

- [React Webpack](/templates/react-webpack) - 基于 webpack + js 的 React 项目
- [React CRA TypeScript H5](/templates/react-cra) - 基于 create-react-app + craco + typescript + h5 的项目
- [React Vite H5](/templates/react-vite) - 基于 vite + typescript 的 H5 项目
- [React Vite Admin](/templates/react-vite-admin) - 基于 vite + typescript 的管理后台项目

### 库模板

- [库模板](/templates/lib) - 基于 rollup + typescript 的库模板
- [Monorepo 库模板](/templates/lib-monorepo) - 基于 pnpm + typescript 的 monorepo 库模板

## 使用模板

### 通过命令行使用

```bash
# 使用默认模板（React Webpack）
cya create my-app

# 使用指定模板
cya create my-app -t @rjkt/cya-react-cra-ts-h5-template
```

### 通过快捷命令使用

```bash
# 使用 create-react-app 创建 React 项目
cya react my-app

# 使用 vite 创建 Vue 项目
cya vue my-app
```

## 创建自定义模板

你可以使用 `transform` 命令将现有项目转换为模板：

```bash
cya transform <源项目路径> <目标模板路径> -n my-custom-template
```

然后使用自定义模板创建项目：

```bash
cya create my-app -t <目标模板路径>
```

## 模板结构

Create Your App 的模板遵循以下结构：

```
template/             # 模板目录
  ├── src/            # 源代码
  ├── public/         # 静态资源
  ├── ...             # 其他文件和目录
template.json         # 模板配置
package.json          # 包信息
```

其中 `template.json` 包含了模板的配置信息，主要是 package.json 中的依赖和脚本等信息。
