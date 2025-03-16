# Development Environment Configuration

This document provides detailed guidelines for setting up and using the development environment.

## System Requirements

- **Node.js**: 16.x or higher
- **PNPM**: 8.x or higher
- **Git**: Latest version

## Installing Dependencies

### Installing Node.js

We recommend using [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) to manage Node.js versions:

```bash
# Using nvm
nvm install 16
nvm use 16

# Or using fnm
fnm install 16
fnm use 16
```

### Installing PNPM

```bash
npm install -g pnpm@8
```

## Cloning the Repository

```bash
git clone https://github.com/real-jacket/create-your-app.git
cd create-your-app
```

## Installing Project Dependencies

```bash
pnpm install
```

## Development Workflow

### Starting Development Mode

```bash
# Developing the CLI tool
pnpm dev

# Developing the documentation website
pnpm docs:dev
```

### Building the Project

```bash
# Building all packages
pnpm build:all

# Building a specific package
pnpm --filter=@rjkt/create-your-app build
```

### Running Tests

```bash
# Running all tests
pnpm test

# Running tests for a specific package
pnpm --filter=@rjkt/create-your-app test
```

### Code Checking and Formatting

```bash
# Running ESLint checks
pnpm lint

# Auto-fixing ESLint issues
pnpm lint:fix

# Formatting code
pnpm format
```

## Docker Development Environment

We provide a Docker development environment to ensure all developers use the same environment:

### Building the Docker Image

```bash
docker build -t create-your-app-dev -f Dockerfile.dev .
```

### Running the Docker Container

```bash
docker run -it --rm -v $(pwd):/app create-your-app-dev bash
```

## Developing New Features

1. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Develop the feature and commit your code:

   ```bash
   git add .
   pnpm commit
   ```

3. Create a changeset:

   ```bash
   pnpm changeset
   ```

4. Push the branch and create a Pull Request:

   ```bash
   git push origin feature/your-feature-name
   ```

## Debugging

### Debugging the CLI Tool

1. Link the CLI tool globally:

   ```bash
   cd packages/create-your-app
   pnpm link --global
   ```

2. Use the Node.js debugger:

   ```bash
   node --inspect-brk $(which cya) create my-app
   ```

### Debugging Tests

```bash
# Using Jest debug mode
pnpm --filter=@rjkt/create-your-app test --debug
```

## Common Issues

### Dependency Issues

If you encounter dependency issues, try clearing the cache and reinstalling:

```bash
pnpm clean
pnpm install
```

### Build Errors

If you encounter build errors, check the TypeScript configuration and dependency versions:

```bash
pnpm type-check
```

## IDE Configuration

### VSCode

We provide recommended VSCode configurations in the `.vscode` directory, including:

- Recommended extensions
- Editor settings
- Debug configurations

VSCode will prompt you to install the recommended extensions when you open the project.
