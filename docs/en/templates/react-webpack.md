# React Webpack Template

A modern React project template based on Webpack 5, with support for React 18, hot reloading, code splitting, CSS Modules, Jest testing, ESLint + Prettier, and more.

## Features

- **Webpack 5**: Latest version of Webpack with improved build performance and module federation
- **React 18**: Latest version of React with concurrent rendering and automatic batching
- **Hot Reloading**: Fast refresh for React components during development
- **Code Splitting**: Automatically split your code into smaller chunks for better performance
- **CSS Modules**: Local scoping of CSS by default
- **Jest**: Testing framework with React Testing Library
- **ESLint + Prettier**: Code quality and formatting tools
- **Git Hooks**: Husky and lint-staged for running scripts before commits
- **Conventional Commits**: Commitlint for enforcing commit message conventions

## Creating a Project

To create a new project using this template, run:

```bash
npx @rjkt/create-your-app create my-app -t react-webpack
```

Or use the shortcut:

```bash
npx @rjkt/create-your-app create my-app -t rw
```

## Project Structure

The project structure is organized as follows:

```
my-app/
├── .husky/                 # Git hooks
├── .vscode/                # VS Code settings
├── config/                 # Webpack configuration
│   ├── webpack.common.js   # Common webpack configuration
│   ├── webpack.dev.js      # Development webpack configuration
│   └── webpack.prod.js     # Production webpack configuration
├── public/                 # Static assets
│   ├── favicon.ico         # Favicon
│   ├── index.html          # HTML template
│   └── manifest.json       # Web app manifest
├── src/                    # Source code
│   ├── assets/             # Assets (images, fonts, etc.)
│   ├── components/         # React components
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── styles/             # Global styles
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Root component
│   ├── index.tsx           # Entry point
│   └── types.d.ts          # TypeScript declarations
├── .babelrc                # Babel configuration
├── .eslintrc.js            # ESLint configuration
├── .gitignore              # Git ignore file
├── .prettierrc             # Prettier configuration
├── jest.config.js          # Jest configuration
├── package.json            # Package information
├── README.md               # Project documentation
└── tsconfig.json           # TypeScript configuration
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run lint`

Runs ESLint to check for code quality issues.

### `npm run format`

Runs Prettier to format your code.

## Customizing Webpack Configuration

You can customize the Webpack configuration by modifying the files in the `config` directory:

- `webpack.common.js`: Common configuration for both development and production
- `webpack.dev.js`: Development-specific configuration
- `webpack.prod.js`: Production-specific configuration

Example of adding a custom loader:

```js
// config/webpack.common.js
module.exports = {
  // ... existing configuration
  module: {
    rules: [
      // ... existing rules
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      }
    ]
  }
};
```

## Customizing Babel Configuration

You can customize the Babel configuration by modifying the `.babelrc` file:

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ]
}
```

## Customizing ESLint Configuration

You can customize the ESLint configuration by modifying the `.eslintrc.js` file:

```js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  // ... existing configuration
  rules: {
    // Add your custom rules here
    'react/prop-types': 'off',
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

To add a development dependency, run:

```bash
npm install --save-dev package-name
```

## Creating Components

You can use Create Your App to generate components:

```bash
npx @rjkt/create-your-app component Button
```

This will create a new component in the `src/components` directory with the following structure:

```
src/components/Button/
├── Button.tsx
├── Button.module.css
└── Button.test.tsx
```

You can customize the component generation by specifying options:

```bash
npx @rjkt/create-your-app component Button --type class --style scss
```

For more information on component generation, see the [Component Configuration](../../guide/configuration.md#component-configuration) guide.
