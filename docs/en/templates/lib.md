# Library Template

A modern TypeScript library template based on Rollup, designed for creating JavaScript/TypeScript libraries that can be published to npm.

## Features

- **Rollup-based builds**: Efficient bundling for both CommonJS and ES Module formats
- **TypeScript support**: Full TypeScript support with type checking
- **Jest testing framework**: Comprehensive testing setup with Jest
- **Code coverage reports**: Detailed code coverage reports with Istanbul
- **ESLint + Prettier**: Code quality and formatting tools
- **Automatic type declaration files**: Generates `.d.ts` files for TypeScript consumers
- **Package size analysis**: Analyze your bundle size with rollup-plugin-visualizer
- **Git Hooks**: Husky and lint-staged for running scripts before commits
- **Conventional Commits**: Commitlint for enforcing commit message conventions

## Creating a Library

To create a new library using this template, run:

```bash
npx @rjkt/create-your-app create my-lib -t @rjkt/cya-lib-template
```

Or use the shortcut:

```bash
npx @rjkt/create-your-app create my-lib -t lib
```

## Project Structure

The project structure is organized as follows:

```
my-lib/
├── .husky/                 # Git hooks
├── .vscode/                # VS Code settings
├── src/                    # Source code
│   ├── index.ts            # Entry point
│   └── utils/              # Utility functions
├── tests/                  # Test files
│   └── index.test.ts       # Tests for the entry point
├── .eslintrc.js            # ESLint configuration
├── .gitignore              # Git ignore file
├── .prettierrc             # Prettier configuration
├── jest.config.js          # Jest configuration
├── package.json            # Package information
├── README.md               # Project documentation
├── rollup.config.js        # Rollup configuration
└── tsconfig.json           # TypeScript configuration
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Builds the library in development mode and watches for changes.

### `npm run build`

Builds the library for production. This creates both CommonJS and ES Module bundles in the `dist` folder.

### `npm test`

Runs the test suite using Jest.

### `npm run test:watch`

Runs the test suite in watch mode.

### `npm run test:coverage`

Runs the test suite and generates a coverage report.

### `npm run lint`

Runs ESLint to check for code quality issues.

### `npm run format`

Runs Prettier to format your code.

### `npm run analyze`

Analyzes the bundle size and generates a visualization report.

### `npm run analyze:deps`

Analyzes the dependencies in your bundle.

## Publishing to npm

To publish your library to npm, follow these steps:

1. Update the version in `package.json`
2. Build the library: `npm run build`
3. Publish to npm: `npm publish`

```bash
# Update version
npm version patch # or minor, or major

# Build
npm run build

# Publish
npm publish
```

## Output Formats

The library template supports the following output formats:

- **CommonJS (CJS)**: For Node.js environments
- **ES Module (ESM)**: For modern browsers and bundlers

The output files are generated in the `dist` folder:

```
dist/
├── cjs/                    # CommonJS format
│   ├── index.js            # Main bundle
│   └── index.js.map        # Source map
├── esm/                    # ES Module format
│   ├── index.js            # Main bundle
│   └── index.js.map        # Source map
├── types/                  # TypeScript declaration files
│   └── index.d.ts          # Type definitions
└── stats.html              # Bundle visualization (if analyze is run)
```

## Customizing Rollup Configuration

You can customize the Rollup configuration by modifying the `rollup.config.js` file:

```js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/esm/index.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    terser()
  ],
  // Add external dependencies here
  external: ['react', 'react-dom']
};
```

## Customizing TypeScript Configuration

You can customize the TypeScript configuration by modifying the `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "esnext",
    "lib": ["dom", "esnext"],
    "declaration": true,
    "declarationDir": "dist/types",
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", "tests"]
}
```

## Customizing Jest Configuration

You can customize the Jest configuration by modifying the `jest.config.js` file:

```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

## Customizing ESLint Configuration

You can customize the ESLint configuration by modifying the `.eslintrc.js` file:

```js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // Add your custom rules here
    'no-console': 'warn'
  }
};
```

## Customizing Prettier Configuration

You can customize the Prettier configuration by modifying the `.prettierrc` file:

```json
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true
}
```

## Adding Dependencies

To add a new dependency, run:

```bash
npm install package-name
```

For libraries, it's often better to add dependencies as peer dependencies or dev dependencies:

```bash
# Add as peer dependency
npm install --save-peer package-name

# Add as dev dependency
npm install --save-dev package-name
```
