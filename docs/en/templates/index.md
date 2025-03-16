# Templates Overview

Create Your App provides a variety of templates to help you get started with your projects quickly. Each template is pre-configured with best practices and modern tooling to help you focus on building your application rather than setting up the infrastructure.

## Available Templates

### React Templates

- [**React Webpack**](./react-webpack.md): A React project template based on Webpack 5, with support for React 18, hot reloading, code splitting, CSS Modules, Jest testing, ESLint + Prettier, and more.

  ```bash
  npx @rjkt/create-your-app create my-app -t react-webpack
  ```

- [**React CRA**](./react-cra.md): A React project template based on Create React App, with additional features like ESLint + Prettier, Git Hooks, and Conventional Commits.

  ```bash
  npx @rjkt/create-your-app create my-app -t react-cra
  ```

- [**React Vite**](./react-vite.md): A React project template based on Vite, providing extremely fast development and build times, with support for React 18, TypeScript, and more.

  ```bash
  npx @rjkt/create-your-app create my-app -t react-vite
  ```

- [**React Vite Admin**](./react-vite-admin.md): A React admin dashboard template based on Vite, with pre-configured UI components, authentication, and common admin features.

  ```bash
  npx @rjkt/create-your-app create my-admin -t react-vite-admin
  ```

### Library Templates

- [**Library Template**](./lib.md): A TypeScript library template based on Rollup, with support for CommonJS and ES Module formats, Jest testing, ESLint + Prettier, and automatic type declaration file generation.

  ```bash
  npx @rjkt/create-your-app create my-lib -t lib
  ```

- [**Monorepo Library Template**](./lib-monorepo.md): A monorepo library template for managing multiple packages in a single repository, with support for TypeScript, Jest testing, ESLint + Prettier, and more.

  ```bash
  npx @rjkt/create-your-app create my-monorepo -t lib-monorepo
  ```

## Template Features

Each template includes the following features:

- **Modern JavaScript/TypeScript Support**: All templates support the latest JavaScript features and TypeScript.
- **Testing Setup**: Pre-configured testing setup with Jest or other testing frameworks.
- **Code Quality Tools**: ESLint and Prettier for code linting and formatting.
- **Git Hooks**: Husky and lint-staged for running scripts before commits.
- **Conventional Commits**: Commitlint for enforcing commit message conventions.
- **Documentation**: README and other documentation files to help you get started.

## Creating a Custom Template

You can create your own custom template by following these steps:

1. Create a new repository for your template.
2. Add the necessary files and configuration.
3. Create a `template.json` file to define the template metadata.
4. Publish your template to npm or use it locally.

For more information on creating custom templates, see the [Configuration](../guide/configuration.md#custom-templates) guide.

## Using a Custom Template

To use a custom template, you can specify the template name or path when creating a project:

```bash
# Using a published template
npx @rjkt/create-your-app create my-app -t my-custom-template

# Using a local template
npx @rjkt/create-your-app create my-app -t file:../path/to/my-template
```

## Converting an Existing Project to a Template

You can convert an existing project to a template by following these steps:

1. Clean up the project by removing unnecessary files and dependencies.
2. Create a `template.json` file to define the template metadata.
3. Publish your template to npm or use it locally.

For more information on converting existing projects to templates, see the [Configuration](../guide/configuration.md#custom-templates) guide.
