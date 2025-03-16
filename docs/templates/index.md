# 模板列表

Create Your App 提供了多种项目模板，满足不同的开发需求。

## React 模板

- [React Webpack 模板](/templates/react-webpack) - 基于 Webpack 的 React 项目模板
- [React CRA TypeScript H5 模板](/templates/react-cra-ts-h5) - 基于 Create React App 的 TypeScript H5 项目模板
- [React Vite H5 模板](/templates/react-vite-h5) - 基于 Vite 的 React H5 项目模板
- [React Vite Admin 模板](/templates/react-vite-admin) - 基于 Vite 的 React 管理后台项目模板

## 库模板

- [库模板](/templates/lib) - 用于创建 JavaScript/TypeScript 库的模板
- [Monorepo 库模板](/templates/lib-monorepo) - 用于创建基于 Monorepo 的多包库的模板

## 使用方法

使用 Create Your App CLI 创建项目：

```bash
# 基本用法
npx @rjkt/create-your-app create my-app

# 指定模板
npx @rjkt/create-your-app create my-app --template react-webpack

# 或使用简写命令
npx @rjkt/create-your-app react my-app
```

查看每个模板的详细文档，了解更多信息。

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
