# Configuration

Create Your App provides various configuration options to customize your project creation and component generation.

## Project Configuration

When creating a project, you can configure it using command-line options or by answering the interactive prompts.

### Command-line Options

```bash
npx @rjkt/create-your-app create my-app [options]
```

Available options:

- `-t, --template <template>`: Specify the template to use
- `-p, --package-manager <manager>`: Specify the package manager to use (npm, yarn, or pnpm)
- `-s, --skip-install`: Skip installing dependencies
- `-g, --git`: Initialize a git repository
- `--no-git`: Skip git initialization
- `-f, --force`: Overwrite target directory if it exists
- `-v, --verbose`: Print additional logs

### Configuration File

You can create a configuration file in your project to customize the behavior of Create Your App. Create a file named `.createyourapprc.js` or `.createyourapprc.json` in your project root:

```js
// .createyourapprc.js
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
  }
};
```

## Template Configuration

Each template has its own configuration options. You can find the specific configuration options for each template in the template documentation:

- [React Webpack](../templates/react-webpack.md#configuration)
- [React CRA](../templates/react-cra.md#configuration)
- [React Vite](../templates/react-vite.md#configuration)
- [Library Template](../templates/lib.md#configuration)
- [Monorepo Library Template](../templates/lib-monorepo.md#configuration)

## Component Configuration

When generating components, you can configure them using command-line options:

```bash
npx @rjkt/create-your-app component Button [options]
```

Available options:

- `--type <type>`: Component type (`function` or `class`)
- `--style <style>`: Style type (`css`, `scss`, `less`, or `none`)
- `--path <path>`: Path to create the component
- `--test`: Generate test file
- `--story`: Generate Storybook story file
- `--no-style`: Skip generating style file
- `--no-test`: Skip generating test file
- `--no-story`: Skip generating Storybook story file

## Custom Templates

You can create custom templates for your projects and components. To create a custom template:

1. Create a new directory for your template
2. Add the necessary files and structure
3. Create a `template.json` file to define the template metadata
4. Publish the template to npm or use it locally

Example `template.json`:

```json
{
  "name": "my-custom-template",
  "version": "1.0.0",
  "description": "My custom template",
  "scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0"
  }
}
```

To use a local template:

```bash
npx @rjkt/create-your-app create my-app -t file:../path/to/my-template
```

To use a published template:

```bash
npx @rjkt/create-your-app create my-app -t my-custom-template
```
