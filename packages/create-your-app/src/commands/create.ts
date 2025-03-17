import create from '../utils/create';
import { ErrorCode, handleError } from '../utils/error-handler';
import logger from '../utils/logger';

/**
 * Handle create command
 * @param appName Application name
 * @param options Command options
 */
export default function createCommand(
  appName: string,
  options: { force: boolean; template: string }
): void {
  try {
    logger.info(`Creating project: ${appName}`, { timestamp: true });
    void create(appName, options);
  } catch (error) {
    handleError(error, ErrorCode.UNKNOWN);
  }
}
