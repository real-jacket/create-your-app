import { ErrorCode, handleError } from '../utils/error-handler';
import logger from '../utils/logger';
import { pkgGet } from '../utils/pkg';

/**
 * Handle list command
 */
export default async function listCommand(): Promise<void> {
  try {
    const list = await pkgGet('rjkt');
    logger.info('Available templates:');
    logger.newLine();

    if (list.length === 0) {
      logger.info('No templates found');
      return;
    }

    list.forEach(({ name, description }) => {
      logger.info(`${name}`);
      logger.info(`└── ${description}`);
      logger.newLine();
    });
  } catch (error) {
    handleError(error, ErrorCode.NETWORK_ERROR);
  }
}
