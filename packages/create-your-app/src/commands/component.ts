import component from '../utils/component';
import { ErrorCode, handleError } from '../utils/error-handler';
import logger from '../utils/logger';

/**
 * Handle component command
 * @param componentName Component name
 * @param options Command options
 */
export default function componentCommand(
  componentName: string,
  options: { template: string; dir: string | undefined }
): void {
  try {
    if (!componentName) {
      logger.error('Component name is required');
      logger.info('Usage: cya component <component-name> [options]');
      process.exit(1);
    }

    logger.info(`Creating component: ${componentName}`);
    component(componentName, options);
    logger.success(`Component ${componentName} created successfully`);
  } catch (error) {
    handleError(error, ErrorCode.UNKNOWN);
  }
}
