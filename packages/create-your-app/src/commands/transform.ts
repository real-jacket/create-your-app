import path from 'path';

import { ErrorCode, handleError } from '../utils/error-handler';
import logger from '../utils/logger';
import { createOrUpdateTemplate } from '../utils/template';

/**
 * Handle transform command
 * @param sourceTemplatePath Source template path
 * @param targetTemplatePath Target template path
 * @param options Command options
 */
export default function transformCommand(
  sourceTemplatePath: string,
  targetTemplatePath: string,
  options: { name?: string }
) {
  try {
    const { name } = options;
    const abSourceTemplatePath = path.resolve(
      process.cwd(),
      sourceTemplatePath
    );

    logger.info(
      `Transforming template from ${sourceTemplatePath} to ${targetTemplatePath}`
    );
    createOrUpdateTemplate(abSourceTemplatePath, targetTemplatePath, name);
    logger.success('Template transformation completed successfully');
  } catch (error) {
    handleError(error, ErrorCode.INVALID_TEMPLATE);
  }
}
