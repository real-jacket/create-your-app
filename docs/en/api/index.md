# Command Line Interface

Create Your App provides a command-line interface (CLI) to help you create and manage your projects and components.

## Commands

### `create`

Create a new project.

```bash
npx @rjkt/create-your-app create <project-name> [options]
```

Arguments:

- `project-name`: Name of the project to create

Options:

- `-t, --template <template>`: Specify the template to use
- `-p, --package-manager <manager>`: Specify the package manager to use (npm, yarn, or pnpm)
- `-s, --skip-install`: Skip installing dependencies
- `-g, --git`: Initialize a git repository
- `--no-git`: Skip git initialization
- `-f, --force`: Overwrite target directory if it exists
- `-v, --verbose`: Print additional logs

Examples:

```bash
# Create a new project with the default template
npx @rjkt/create-your-app create my-app

# Create a new project with a specific template
npx @rjkt/create-your-app create my-app -t react-webpack

# Create a new project with yarn as the package manager
npx @rjkt/create-your-app create my-app -p yarn
```

### `component`

Generate a new component.

```bash
npx @rjkt/create-your-app component <component-name> [options]
```

Arguments:

- `component-name`: Name of the component to create

Options:

- `--type <type>`: Component type (`function` or `class`)
- `--style <style>`: Style type (`css`, `scss`, `less`, or `none`)
- `--path <path>`: Path to create the component
- `--test`: Generate test file
- `--story`: Generate Storybook story file
- `--no-style`: Skip generating style file
- `--no-test`: Skip generating test file
- `--no-story`: Skip generating Storybook story file

Examples:

```bash
# Create a new functional component
npx @rjkt/create-your-app component Button

# Create a new class component with SCSS
npx @rjkt/create-your-app component Button --type class --style scss

# Create a new component in a specific path
npx @rjkt/create-your-app component Button --path src/features/auth/components
```

### `init`

Initialize Create Your App in an existing project.

```bash
npx @rjkt/create-your-app init [options]
```

Options:

- `-t, --template <template>`: Specify the template to use
- `-p, --package-manager <manager>`: Specify the package manager to use (npm, yarn, or pnpm)
- `-s, --skip-install`: Skip installing dependencies
- `-v, --verbose`: Print additional logs

Examples:

```bash
# Initialize Create Your App in the current directory
npx @rjkt/create-your-app init

# Initialize with a specific template
npx @rjkt/create-your-app init -t react-webpack
```

### `eject`

Eject from Create Your App, exposing all the configuration files.

```bash
npx @rjkt/create-your-app eject
```

This command will copy all the configuration files and dependencies to your project, allowing you to customize them. Note that this is a one-way operation and cannot be undone.

### `help`

Display help information.

```bash
npx @rjkt/create-your-app help [command]
```

Arguments:

- `command`: Command to display help for

Examples:

```bash
# Display general help
npx @rjkt/create-your-app help

# Display help for the create command
npx @rjkt/create-your-app help create
```

### `version`

Display the version of Create Your App.

```bash
npx @rjkt/create-your-app version
```

## Global Options

These options can be used with any command:

- `--help`: Display help information
- `--version`: Display version information
- `--verbose`: Print additional logs
