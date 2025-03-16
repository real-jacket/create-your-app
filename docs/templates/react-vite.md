# React Vite H5 模板

基于 Vite + TypeScript 的 React H5 项目模板，提供了高性能的移动端开发环境和构建配置。

## 特性

- ⚡️ 超快的冷启动和热更新（Vite）
- ⚛️ React 18
- 🔢 TypeScript 支持
- 📱 移动端适配（使用 postcss-px-to-viewport）
- 🎨 样式支持（Less、CSS Modules）
- 📦 按需自动导入（组件和 API）
- 🧪 Vitest 测试框架
- 🔍 ESLint + Prettier 代码规范
- 📱 移动端调试工具（vConsole）
- 📊 打包分析

## 使用方法

```bash
# 创建项目
npx @rjkt/create-your-app create my-app -t @rjkt/cya-react-vite-h5-template
```

## 项目结构

```
my-app/
  ├── public/                # 静态资源
  │   └── favicon.ico        # 网站图标
  ├── src/                   # 源代码
  │   ├── assets/            # 资源文件
  │   ├── components/        # 组件
  │   ├── hooks/             # 自定义钩子
  │   ├── pages/             # 页面
  │   ├── services/          # 服务
  │   ├── utils/             # 工具函数
  │   ├── App.tsx            # 应用入口组件
  │   └── main.tsx           # 入口文件
  ├── vite.config.ts         # Vite 配置
  ├── .eslintrc.js           # ESLint 配置
  ├── .prettierrc.js         # Prettier 配置
  ├── tsconfig.json          # TypeScript 配置
  ├── package.json           # 包信息
  └── README.md              # 项目说明
```

## 可用脚本

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 运行测试
npm test

# 代码检查
npm run lint

# 代码格式化
npm run format

# 分析构建产物
npm run analyze
```

## 移动端适配

该模板使用 `postcss-px-to-viewport` 进行移动端适配，默认设计稿宽度为 375px。你可以在 `vite.config.ts` 中修改相关配置：

```ts
import { defineConfig } from 'vite';
import pxToViewport from 'postcss-px-to-viewport';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        pxToViewport({
          viewportWidth: 375, // 设计稿宽度
          unitPrecision: 5,
          viewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false
        })
      ]
    }
  }
  // ...其他配置
});
```

## 自动导入

该模板使用 `unplugin-auto-import` 和 `unplugin-react-components` 实现组件和 API 的自动导入，无需手动 import。

```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-react-components/vite';

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['react', 'react-router-dom'],
      dts: 'src/auto-imports.d.ts'
    }),
    Components({
      extensions: ['jsx', 'tsx'],
      dts: 'src/components.d.ts',
      dirs: ['src/components']
    })
  ]
});
```

## 自定义配置

### Vite 配置

你可以在 `vite.config.ts` 文件中修改 Vite 配置。

### TypeScript 配置

你可以在 `tsconfig.json` 文件中修改 TypeScript 配置。

### ESLint 配置

你可以在 `.eslintrc.js` 文件中修改 ESLint 配置。

### Prettier 配置

你可以在 `.prettierrc.js` 文件中修改 Prettier 配置。

## 添加依赖

```bash
# 添加生产依赖
npm install <package-name>

# 添加开发依赖
npm install <package-name> --save-dev
```

## 创建组件

你可以使用 Create Your App 的组件创建功能：

```bash
npx @rjkt/create-your-app component MyComponent -t ts-react
```

这将在 `src/components` 目录下创建一个新的 TypeScript React 组件。
