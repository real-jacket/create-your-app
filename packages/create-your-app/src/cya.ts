#! /usr/bin/env node

import { program } from 'commander';

import pkg from '../package.json';

import { cli, cliList } from './cli';
import {
  createCommand,
  listCommand,
  transformCommand,
  testCommand,
  componentCommand,
  packageCommand
} from './commands/index';
import { setupGlobalErrorHandlers } from './utils/error-handler';
import logger from './utils/logger';

// Set up global error handlers
setupGlobalErrorHandlers();

// Set debug mode
if (process.env['DEBUG'] === 'true') {
  logger.setDebugMode(true);
  logger.debug('Debug mode enabled');
}

// Create project command
program
  .command('create <app-name>')
  .description('Create a new application')
  .option('-f, --force', 'Overwrite target directory if it exists')
  .option('-t, --template <path-to-template>', 'Specify template to use', '')
  .action(createCommand);

// List available templates command
program
  .command('list')
  .description('List available templates')
  .action(listCommand);

// Transform template command
program
  .command('transform <source-template-path> <target-template-path>')
  .description('Transform a source project into a template')
  .option('-n, --name <package-name>', 'Template package name')
  .action(transformCommand);

// Test command (for development)
program
  .command('test')
  .description('Test package download functionality')
  .action(testCommand);

// Shorthand commands for common templates
cliList.forEach(({ name, description }) => {
  program
    .command(name)
    .description(description)
    .action(() => {
      cli(program.args);
    });
});

// Component creation command
program
  .command('component [component-name]')
  .description('Create a new component')
  .option(
    '-t, --template <component-type-template>',
    'Component template type or directory',
    'react'
  )
  .option('-d, --dir <dir-of-component>', 'Directory to create component in')
  .action(componentCommand);

// Package creation command (for monorepo)
program
  .command('package <pkg-name>')
  .description('Create a new package in a monorepo project')
  .option('-f, --force', 'Overwrite target directory if it exists')
  .option('-d, --dir <directory>', 'Directory to create package in', '.')
  .option('-t, --template <template-path>', 'Template to use', '')
  .option('-s, --scope <scope>', 'Package scope (e.g., @scope/package-name)')
  .action(packageCommand);

// Version information
program
  .version(
    `Create Your App v${(pkg as { version: string }).version}`,
    '-v, --version'
  )
  .usage('<command> [options]');

// Parse command line arguments
program.parse(process.argv);

// Show help if no arguments provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
