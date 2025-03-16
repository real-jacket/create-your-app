# Getting Started

This guide will help you get started with Create Your App and create your first project.

## Installation

You can use Create Your App without installing it by using `npx`:

```bash
npx @rjkt/create-your-app create my-app
```

Or you can install it globally:

```bash
npm install -g @rjkt/create-your-app
```

Then you can use it directly:

```bash
create-your-app create my-app
```

## Creating a Project

To create a new project, use the `create` command:

```bash
npx @rjkt/create-your-app create my-app
```

This will start an interactive process that will guide you through the project creation.

### Using a Specific Template

You can specify a template when creating a project:

```bash
npx @rjkt/create-your-app create my-app -t @rjkt/cya-react-webpack-template
```

Available templates:

- `@rjkt/cya-react-webpack-template`: React project based on Webpack 5
- `@rjkt/cya-react-cra-template`: React project based on Create React App
- `@rjkt/cya-react-vite-template`: React project based on Vite
- `@rjkt/cya-lib-template`: TypeScript library based on Rollup
- `@rjkt/cya-lib-monorepo-template`: Monorepo library template

### Template Shortcuts

You can use shortcuts for templates:

```bash
npx @rjkt/create-your-app create my-app -t react-webpack
```

Available shortcuts:

- `react-webpack`: React project based on Webpack 5
- `react-cra`: React project based on Create React App
- `react-vite`: React project based on Vite
- `lib`: TypeScript library based on Rollup
- `lib-monorepo`: Monorepo library template

## Creating Components

Once you have created a project, you can use Create Your App to generate components:

```bash
npx @rjkt/create-your-app component Button
```

This will create a component named `Button` in your project.

### Component Options

You can specify options when creating a component:

```bash
npx @rjkt/create-your-app component Button --type class --style css
```

Available options:

- `--type`: Component type (`function` or `class`)
- `--style`: Style type (`css`, `scss`, `less`, or `none`)
- `--path`: Path to create the component (default: `src/components`)

## Next Steps

Now that you have created your first project, you can:

- Check out the [Configuration](./configuration.md) guide to learn how to customize your project
- Explore the [Templates](../templates/) section to learn more about available templates
- Read the [API](../api/) documentation to learn about all available commands and options
