import path from 'path';

import camelcase from 'camelcase';
import fsextra from 'fs-extra';
const { copySync, existsSync, mkdirSync } = fsextra;
import replace from 'replace-in-file';

import { CliError } from './error-handler';
import logger from './logger';
import { cwdPath, getComponentTemplatePath } from './path';

/**
 * Create a new component
 * @param name Component name
 * @param option Component options
 */
export default function component(
  name: string,
  option: {
    template: string;
    dir: string | undefined;
  }
): void {
  // Default component directory is src/components
  const { template, dir: componentPath = 'src/components' } = option;
  const templatePath = getComponentTemplatePath(template);
  const curPath = cwdPath();
  const appPascalName = camelcase(name, { pascalCase: true });
  const targetPath = path.join(curPath, componentPath, appPascalName);

  // Check if template exists
  if (!existsSync(templatePath)) {
    throw new CliError(`Component template not found: ${templatePath}`, 1);
  }

  // Create component directory if it doesn't exist
  if (!existsSync(targetPath)) {
    mkdirSync(targetPath, {
      recursive: true
    });
  }

  try {
    // Copy template files to target directory
    copySync(templatePath, targetPath);
    logger.debug(`Copied template from ${templatePath} to ${targetPath}`);
  } catch (error) {
    throw new CliError(
      `Failed to copy template: ${
        error instanceof Error ? error.message : String(error)
      }`,
      1
    );
  }

  try {
    // Replace placeholder with component name
    const result = replace.sync({
      files: [path.join(targetPath, '/*')],
      from: [/ComponentName/g],
      to: [appPascalName]
    });

    logger.debug(
      `Updated ${result.length} files with component name: ${appPascalName}`
    );
  } catch (error) {
    throw new CliError(
      `Failed to update component content: ${
        error instanceof Error ? error.message : String(error)
      }`,
      1
    );
  }
}
