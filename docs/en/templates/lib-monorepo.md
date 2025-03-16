# Monorepo Library Template

A monorepo library template based on pnpm + TypeScript for creating and managing multi-package JavaScript/TypeScript library projects.

## Features

- 📦 Based on pnpm workspace
- 🔄 Unified build process
- 📘 TypeScript support
- 🧪 Jest testing framework
- 📊 Code coverage reports
- 📏 ESLint + Prettier code standards
- 📝 Automatic type declaration file generation
- 🔄 Version management (Changesets)
- 🚀 CI/CD workflows (GitHub Actions)
- 📚 Documentation site (VitePress)

## Usage

```bash
# Create monorepo library project
npx @rjkt/create-your-app create my-lib-monorepo -t @rjkt/cya-lib-monorepo-template
```

## Project Structure

```
my-lib-monorepo/
  ├── .changeset/           # Changesets configuration
  ├── .github/              # GitHub workflow configuration
  ├── docs/                 # Documentation
  │   ├── .vitepress/       # VitePress configuration
  │   └── index.md          # Documentation homepage
  ├── packages/             # Subpackages
  │   ├── core/             # Core package
  │   │   ├── src/          # Source code
  │   │   ├── tests/        # Tests
  │   │   └── package.json  # Package information
  │   ├── utils/            # Utilities package
  │   │   ├── src/          # Source code
  │   │   ├── tests/        # Tests
  │   │   └── package.json  # Package information
  │   └── template/         # Subpackage template
  ├── .eslintrc.js          # ESLint configuration
  ├── .prettierrc.js        # Prettier configuration
  ├── jest.config.js        # Jest configuration
  ├── tsconfig.json         # TypeScript configuration
  ├── package.json          # Root package information
  ├── pnpm-workspace.yaml   # pnpm workspace configuration
  └── README.md             # Project documentation
```

## Available Scripts

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Development mode (watch file changes)
pnpm dev

# Run tests
pnpm test

# Code linting
pnpm lint

# Code formatting
pnpm format

# Create changeset
pnpm changeset

# Update versions
pnpm version-packages

# Publish packages
pnpm release

# Start documentation development server
pnpm docs:dev

# Build documentation
pnpm docs:build
```

## Creating New Packages

You can use Create Your App's package creation feature:

```bash
# Execute in the project root directory
npx @rjkt/create-your-app package my-new-package
```

Or manually copy the `packages/template` directory:

```bash
cp -r packages/template packages/my-new-package
```

Then modify the package name and other information in `packages/my-new-package/package.json`.

## Version Management

This template uses Changesets for version management:

```bash
# Create changeset
pnpm changeset

# Update version numbers
pnpm version-packages

# Publish packages
pnpm release
```

## Inter-Package Dependencies

Adding dependencies between subpackages:

```bash
# Add dependency on core package in utils package
cd packages/utils
pnpm add @my-scope/core@workspace:*
```

## CI/CD Workflows

This template includes the following GitHub Actions workflows:

- **CI**: Runs tests and builds on Pull Requests
- **Release**: Publishes packages when merged to the main branch
- **Docs**: Builds and deploys documentation when merged to the main branch

## Custom Configuration

### pnpm Configuration

You can modify the workspace configuration in the `pnpm-workspace.yaml` file.

### TypeScript Configuration

You can modify the TypeScript configuration in the root `tsconfig.json` and in each package's `tsconfig.json` file.

### ESLint Configuration

You can modify the ESLint configuration in the `.eslintrc.js` file.

### Prettier Configuration

You can modify the Prettier configuration in the `.prettierrc.js` file.

### Jest Configuration

You can modify the Jest configuration in the `jest.config.js` file.

## Documentation

This template uses VitePress to build a documentation site, with source files located in the `docs` directory.

```bash
# Start documentation development server
pnpm docs:dev

# Build documentation
pnpm docs:build
```
