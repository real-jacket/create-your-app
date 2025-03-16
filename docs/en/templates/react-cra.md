# React CRA TypeScript H5 Template

A mobile H5 project template based on create-react-app + craco + typescript, providing a complete mobile development environment and build configuration.

## Features

- ⚛️ React 18
- 📱 Mobile adaptation (using postcss-px-to-viewport)
- 🔢 TypeScript support
- 🎨 Style support (Less, CSS Modules)
- 📦 Craco configuration override
- 🧪 Jest testing framework
- 🔍 ESLint + Prettier code standards
- 📱 Mobile debugging tools (eruda)
- 📊 Performance monitoring and analysis

## Usage

```bash
# Create project
npx @rjkt/create-your-app create my-app -t @rjkt/cya-react-cra-ts-h5-template
```

## Project Structure

```
my-app/
  ├── public/                # Static assets
  │   ├── index.html         # HTML template
  │   └── favicon.ico        # Website icon
  ├── src/                   # Source code
  │   ├── assets/            # Asset files
  │   ├── components/        # Components
  │   ├── pages/             # Pages
  │   ├── services/          # Services
  │   ├── utils/             # Utility functions
  │   ├── App.tsx            # Application entry component
  │   └── index.tsx          # Entry file
  ├── craco.config.js        # Craco configuration
  ├── .eslintrc.js           # ESLint configuration
  ├── .prettierrc.js         # Prettier configuration
  ├── tsconfig.json          # TypeScript configuration
  ├── package.json           # Package information
  └── README.md              # Project documentation
```

## Available Scripts

```bash
# Start development server
npm start

# Build production version
npm run build

# Run tests
npm test

# Code linting
npm run lint

# Code formatting
npm run format
```

## Mobile Adaptation

This template uses `postcss-px-to-viewport` for mobile adaptation, with a default design width of 375px. You can modify the related configuration in `craco.config.js`:

```js
const pxToViewport = require('postcss-px-to-viewport');

module.exports = {
  style: {
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
};
```

## Custom Configuration

### Craco Configuration

You can modify the default CRA configuration in the `craco.config.js` file, including webpack, babel, postcss, etc.

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
