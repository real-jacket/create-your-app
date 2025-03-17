import path from 'path';

import fsextra from 'fs-extra';

const { copySync, existsSync, readJsonSync, writeJsonSync } = fsextra;
import { ErrorCode, handleError, CliError } from '../utils/error-handler';
import { logger } from '../utils/logger';
import { checkDir, cwdPath } from '../utils/path';

// 添加类型定义
interface PackageJson {
  name: string;
  [key: string]: unknown;
}

interface TsConfig {
  references?: Array<{ path: string }>;
  [key: string]: unknown;
}

/**
 * Handle package command
 * @param pkgName Package name
 * @param options Command options
 */
export default async function packageCommand(
  pkgName: string,
  options: { force: boolean; dir: string; template: string; scope?: string }
): Promise<void> {
  try {
    const { force, dir, template, scope } = options;
    const templatePath = template || 'packages/template';
    const targetDir = path.join(cwdPath(), dir, pkgName);

    // Check if directory exists
    if (!force && existsSync(targetDir)) {
      throw new CliError(
        `Package directory already exists: ${targetDir}. Use --force to overwrite.`,
        1
      );
    }

    // Check if template exists
    const templateDir = path.join(cwdPath(), templatePath);
    if (!existsSync(templateDir)) {
      throw new CliError(`Template directory not found: ${templateDir}`, 1);
    }

    // Create directory if it doesn't exist
    await checkDir(targetDir, force);

    // Copy template files
    logger.info(`Creating package: ${pkgName}`);
    copySync(templateDir, targetDir);

    // Update package.json
    const packageJsonPath = path.join(targetDir, 'package.json');
    if (existsSync(packageJsonPath)) {
      const packageJson = readJsonSync(packageJsonPath) as PackageJson;
      packageJson.name = scope ? `@${scope}/${pkgName}` : pkgName;
      writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
    }

    // Update tsconfig.json in root directory to include the new package
    const rootTsConfigPath = path.join(cwdPath(), 'tsconfig.json');
    if (existsSync(rootTsConfigPath)) {
      const tsConfig = readJsonSync(rootTsConfigPath) as TsConfig;
      if (tsConfig.references) {
        const packagePath = path.join(dir, pkgName).replace(/\\/g, '/');
        const alreadyExists = tsConfig.references.some(
          (ref: { path: string }) => ref.path === `./${packagePath}`
        );

        if (!alreadyExists) {
          tsConfig.references.push({ path: `./${packagePath}` });
          writeJsonSync(rootTsConfigPath, tsConfig, { spaces: 2 });
        }
      }
    }

    logger.success(`Package ${pkgName} created successfully`);
  } catch (error) {
    handleError(error, ErrorCode.UNKNOWN);
  }
}
