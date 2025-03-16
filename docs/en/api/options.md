# Configuration Options

Create Your App provides various configuration options to customize your project creation and component generation. This page documents all available configuration options.

## Project Configuration

When creating a project, you can configure it using command-line options or by answering the interactive prompts.

### Command-line Options

```bash
npx @rjkt/create-your-app create <project-name> [options]
```

| Option                            | Description                                             | Default                   |
| --------------------------------- | ------------------------------------------------------- | ------------------------- |
| `-t, --template <template>`       | Specify the template to use                             | `react-webpack`           |
| `-p, --package-manager <manager>` | Specify the package manager to use (npm, yarn, or pnpm) | Detected from environment |
| `-s, --skip-install`              | Skip installing dependencies                            | `false`                   |
| `-g, --git`                       | Initialize a git repository                             | `true`                    |
| `--no-git`                        | Skip git initialization                                 | `false`                   |
| `-f, --force`                     | Overwrite target directory if it exists                 | `false`                   |
| `-v, --verbose`                   | Print additional logs                                   | `false`                   |

### Configuration File

You can create a configuration file in your project to customize the behavior of Create Your App. Create a file named `.createyourapprc.js` or `.createyourapprc.json` in your project root.

#### `.createyourapprc.js` Example

```js
module.exports = {
  // Default template to use when creating components
  componentTemplate: 'function',

  // Default style type for components
  styleType: 'css',

  // Default path for components
  componentPath: 'src/components',

  // Custom templates for components
  templates: {
    component: {
      function: './templates/component-function.js',
      class: './templates/component-class.js'
    },
    style: {
      css: './templates/style-css.js',
      scss: './templates/style-scss.js'
    }
  },

  // Package manager to use
  packageManager: 'npm',

  // Whether to initialize git
  git: true,

  // Whether to install dependencies
  skipInstall: false,

  // Whether to print verbose logs
  verbose: false
};
```

#### `.createyourapprc.json` Example

```json
{
  "componentTemplate": "function",
  "styleType": "css",
  "componentPath": "src/components",
  "templates": {
    "component": {
      "function": "./templates/component-function.js",
      "class": "./templates/component-class.js"
    },
    "style": {
      "css": "./templates/style-css.js",
      "scss": "./templates/style-scss.js"
    }
  },
  "packageManager": "npm",
  "git": true,
  "skipInstall": false,
  "verbose": false
}
```

## Component Configuration

When generating components, you can configure them using command-line options:

```bash
npx @rjkt/create-your-app component <component-name> [options]
```

| Option            | Description                                   | Default          |
| ----------------- | --------------------------------------------- | ---------------- |
| `--type <type>`   | Component type (`function` or `class`)        | `function`       |
| `--style <style>` | Style type (`css`, `scss`, `less`, or `none`) | `css`            |
| `--path <path>`   | Path to create the component                  | `src/components` |
| `--test`          | Generate test file                            | `true`           |
| `--story`         | Generate Storybook story file                 | `false`          |
| `--no-style`      | Skip generating style file                    | `false`          |
| `--no-test`       | Skip generating test file                     | `false`          |
| `--no-story`      | Skip generating Storybook story file          | `true`           |

## Template Configuration

Each template has its own configuration options. You can find the specific configuration options for each template in the template documentation:

- [React Webpack](../templates/react-webpack.md#configuration)
- [React CRA](../templates/react-cra.md#configuration)
- [React Vite](../templates/react-vite.md#configuration)
- [Library Template](../templates/lib.md#configuration)
- [Monorepo Library Template](../templates/lib-monorepo.md#configuration)

## Environment Variables

Create Your App respects the following environment variables:

| Variable                 | Description                             |
| ------------------------ | --------------------------------------- |
| `CYA_TEMPLATE`           | Default template to use                 |
| `CYA_PACKAGE_MANAGER`    | Default package manager to use          |
| `CYA_SKIP_INSTALL`       | Whether to skip installing dependencies |
| `CYA_GIT`                | Whether to initialize git               |
| `CYA_VERBOSE`            | Whether to print verbose logs           |
| `CYA_COMPONENT_TEMPLATE` | Default component template to use       |
| `CYA_STYLE_TYPE`         | Default style type for components       |
| `CYA_COMPONENT_PATH`     | Default path for components             |

Example:

```bash
CYA_TEMPLATE=react-webpack CYA_PACKAGE_MANAGER=yarn npx @rjkt/create-your-app create my-app
```
