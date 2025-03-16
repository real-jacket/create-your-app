# React Vite H5 Template

A React H5 project template based on Vite + TypeScript, providing a high-performance mobile development environment and build configuration.

## Features

- ⚡️ Ultra-fast cold start and hot updates (Vite)
- ⚛️ React 18
- 🔢 TypeScript support
- 📱 Mobile adaptation (using postcss-px-to-viewport)
- 🎨 Style support (Less, CSS Modules)
- 📦 On-demand auto-import (components and APIs)
- 🧪 Vitest testing framework
- 🔍 ESLint + Prettier code standards
- 📱 Mobile debugging tools (vConsole)
- 📊 Bundle analysis

## Usage

```bash
# Create project
npx @rjkt/create-your-app create my-app -t @rjkt/cya-react-vite-h5-template
```

## Project Structure

```
my-app/
  ├── public/                # Static assets
  │   └── favicon.ico        # Website icon
  ├── src/                   # Source code
  │   ├── assets/            # Asset files
  │   ├── components/        # Components
  │   ├── hooks/             # Custom hooks
  │   ├── pages/             # Pages
  │   ├── services/          # Services
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

## Mobile Adaptation

This template uses `postcss-px-to-viewport` for mobile adaptation, with a default design width of 375px. You can modify the related configuration in `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import pxToViewport from 'postcss-px-to-viewport';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        pxToViewport({
          viewportWidth: 375, // Design draft width
          unitPrecision: 5,
          viewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false
        })
      ]
    }
  }
  // ...other configurations
});
```

## Auto Import

This template uses `unplugin-auto-import` and `unplugin-react-components` to automatically import components and APIs without manual imports.

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
