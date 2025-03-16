# React Vite Admin Template

A React admin dashboard project template based on Vite + TypeScript + Ant Design, providing a high-performance enterprise-level front-end solution for middle and back-office applications.

## Features

- ⚡️ Ultra-fast cold start and hot updates (Vite)
- ⚛️ React 18
- 🔢 TypeScript support
- 🎨 Ant Design 5.x component library
- 📊 Data visualization (Echarts)
- 🧩 State management (Zustand)
- 🚦 Routing (React Router 6)
- 📡 Network requests (Axios)
- 🔐 Permission control
- 🌐 Internationalization
- 🎭 Mock data
- 🧪 Vitest testing framework
- 🔍 ESLint + Prettier code standards
- 📊 Bundle analysis

## Usage

```bash
# Create project
npx @rjkt/create-your-app create my-admin -t @rjkt/cya-react-vite-admin-template
```

## Project Structure

```
my-admin/
  ├── public/                # Static assets
  │   └── favicon.ico        # Website icon
  ├── src/                   # Source code
  │   ├── api/               # API interfaces
  │   ├── assets/            # Asset files
  │   ├── components/        # Components
  │   ├── config/            # Configuration
  │   ├── hooks/             # Custom hooks
  │   ├── layouts/           # Layout components
  │   ├── locales/           # Internationalization resources
  │   ├── mock/              # Mock data
  │   ├── pages/             # Pages
  │   ├── router/            # Route configuration
  │   ├── store/             # State management
  │   ├── styles/            # Global styles
  │   ├── types/             # Type definitions
  │   ├── utils/             # Utility functions
  │   ├── App.tsx            # Application entry component
  │   └── main.tsx           # Entry file
  ├── vite.config.ts         # Vite configuration
  ├── .eslintrc.js           # ESLint configuration
  ├── .prettierrc.js         # Prettier configuration
  ├── tsconfig.json          # TypeScript configuration
  ├── package.json           # Package information
  └── README.md              # Project documentation
```

## Available Scripts

```bash
# Start development server
npm run dev

# Build production version
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Code linting
npm run lint

# Code formatting
npm run format

# Analyze build artifacts
npm run analyze
```

## Route Configuration

Route configuration is located in the `src/router` directory, using a configuration-based approach:

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

## State Management

Using Zustand for state management:

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

## Internationalization

Using i18next for internationalization:

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

## Custom Configuration

### Vite Configuration

You can modify the Vite configuration in the `vite.config.ts` file.

### TypeScript Configuration

You can modify the TypeScript configuration in the `tsconfig.json` file.

### ESLint Configuration

You can modify the ESLint configuration in the `.eslintrc.js` file.

### Prettier Configuration

You can modify the Prettier configuration in the `.prettierrc.js` file.

## Adding Dependencies

```bash
# Add production dependencies
npm install <package-name>

# Add development dependencies
npm install <package-name> --save-dev
```

## Creating Components

You can use Create Your App's component creation feature:

```bash
npx @rjkt/create-your-app component MyComponent -t ts-react
```

This will create a new TypeScript React component in the `src/components` directory.
