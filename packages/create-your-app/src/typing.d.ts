declare module '*.json';

/**
 * Key-value pair with string keys and string values
 */
interface KV {
  [k: string]: string;
}

/**
 * Template package.json structure
 */
interface TemplatePkgJson {
  package: {
    scripts: KV;
    dependencies: KV;
    devDependencies: KV;
  };
}

/**
 * Command line options for create command
 */
interface CreateOptions {
  force: boolean;
  template: string;
}

/**
 * Command line options for component command
 */
interface ComponentOptions {
  template: string;
  dir?: string;
}

/**
 * Command line options for package command
 */
interface PackageOptions {
  force: boolean;
  dir: string;
  template: string;
  scope?: string;
}

/**
 * Command line options for transform command
 */
interface TransformOptions {
  name?: string;
}

/**
 * Template information structure
 */
interface TemplateInfo {
  name: string;
  description: string;
  version: string;
  author?: string;
  repository?: string;
}

/**
 * CLI command definition
 */
interface CliCommand {
  name: string;
  description: string;
  cliName: string;
}

/**
 * Project configuration
 */
interface ProjectConfig {
  framework: string | null;
  pkgManagement: string | null;
  platform: string | null;
  router: string | null;
  dataFlow: string | null;
}
