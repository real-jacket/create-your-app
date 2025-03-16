# React Vite Admin 模板

基于 Vite + TypeScript + Ant Design 的 React 管理后台项目模板，提供了高性能的企业级中后台前端解决方案。

## 特性

- ⚡️ 超快的冷启动和热更新（Vite）
- ⚛️ React 18
- 🔢 TypeScript 支持
- 🎨 Ant Design 5.x 组件库
- 📊 数据可视化（Echarts）
- 🧩 状态管理（Zustand）
- 🚦 路由管理（React Router 6）
- 📡 网络请求（Axios）
- 🔐 权限控制
- 🌐 国际化
- 🎭 Mock 数据
- 🧪 Vitest 测试框架
- 🔍 ESLint + Prettier 代码规范
- 📊 打包分析

## 使用方法

```bash
# 创建项目
npx @rjkt/create-your-app create my-admin -t @rjkt/cya-react-vite-admin-template
```

## 项目结构

```
my-admin/
  ├── public/                # 静态资源
  │   └── favicon.ico        # 网站图标
  ├── src/                   # 源代码
  │   ├── api/               # API 接口
  │   ├── assets/            # 资源文件
  │   ├── components/        # 组件
  │   ├── config/            # 配置
  │   ├── hooks/             # 自定义钩子
  │   ├── layouts/           # 布局组件
  │   ├── locales/           # 国际化资源
  │   ├── mock/              # Mock 数据
  │   ├── pages/             # 页面
  │   ├── router/            # 路由配置
  │   ├── store/             # 状态管理
  │   ├── styles/            # 全局样式
  │   ├── types/             # 类型定义
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

## 路由配置

路由配置位于 `src/router` 目录，采用配置式路由：

```tsx
// src/router/routes.tsx
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router-dom';
import Layout from '@/layouts/index';

const Dashboard = lazy(() => import('@/pages/dashboard'));
const UserList = lazy(() => import('@/pages/user/list'));
const UserDetail = lazy(() => import('@/pages/user/detail'));
const Login = lazy(() => import('@/pages/login'));
const NotFound = lazy(() => import('@/pages/404'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'user',
        children: [
          {
            index: true,
            element: <UserList />
          },
          {
            path: ':id',
            element: <UserDetail />
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
```

## 状态管理

使用 Zustand 进行状态管理：

```tsx
// src/store/user.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  token: string | null;
  user: {
    id: string;
    name: string;
    avatar: string;
    roles: string[];
  } | null;
  setToken: (token: string) => void;
  setUser: (user: UserState['user']) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),
      logout: () => set({ token: null, user: null })
    }),
    {
      name: 'user-storage'
    }
  )
);
```

## 国际化

使用 i18next 进行国际化：

```tsx
// src/locales/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enUS from './en-US';
import zhCN from './zh-CN';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enUS
    },
    zh: {
      translation: zhCN
    }
  },
  lng: localStorage.getItem('language') || 'zh',
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
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
