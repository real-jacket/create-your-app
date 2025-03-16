# Versioning Strategy

This project uses [Changesets](https://github.com/changesets/changesets) for version management and publishing. This document describes our versioning strategy and workflow.

## Semantic Versioning

We follow the [Semantic Versioning 2.0.0](https://semver.org/) specification, with version numbers in the format: `MAJOR.MINOR.PATCH`.

- **MAJOR**: when you make incompatible API changes
- **MINOR**: when you add functionality in a backward compatible manner
- **PATCH**: when you make backward compatible bug fixes

## Version Increment Rules

When creating a changeset, you need to select the version increment type based on the nature of the change:

- **major**: incompatible API changes, such as:
  - Deleting or renaming public APIs
  - Changing the behavior of public APIs
  - Changing the parameters or return types of public APIs
- **minor**: backward compatible new features, such as:
  - Adding new features or public APIs
  - Adding new optional parameters
  - Adding new configuration options
- **patch**: backward compatible bug fixes, such as:
  - Bug fixes
  - Performance optimizations
  - Documentation updates
  - Dependency updates (that don't affect the API)

## Workflow

### 1. Creating a Changeset

When you complete a feature or fix a bug, you need to create a changeset:

```bash
pnpm changeset
```

This command will guide you through:

1. Selecting the affected packages
2. Choosing the version increment type (major, minor, or patch)
3. Providing a change description

### 2. Committing Changes

After creating a changeset, commit the generated files in the `.changeset` directory:

```bash
git add .changeset
git commit -m "chore: add changeset for [brief description]"
```

### 3. Version Update

When changesets are merged into the main branch, CI will automatically run the version update:

```bash
pnpm ci:version
```

This command will:

1. Read all changesets
2. Update the versions of affected packages
3. Update dependencies
4. Generate or update CHANGELOG.md

### 4. Publishing

After the version update, CI will automatically publish the packages:

```bash
pnpm ci:publish
```

## Dependency Handling

In a monorepo, packages may have dependencies on each other. Changesets automatically handles these dependencies:

- When a package changes, all packages that depend on it will also be updated
- The version update strategy for internal dependencies is configured in `.changeset/config.json`

## Prereleases

For major changes, we use prerelease versions for testing:

```bash
pnpm changeset pre enter next
pnpm ci:version
pnpm ci:publish
```

This will publish prerelease versions with the `next` tag.

## Manual Publishing

In special cases, you may need to publish manually:

```bash
# Navigate to the package directory
cd packages/my-package

# Publish
npm publish
```

## Version History

The version history of each package is recorded in its `CHANGELOG.md` file, containing the changes and contributor information for each version.
