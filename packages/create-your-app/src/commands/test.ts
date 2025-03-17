import { ErrorCode, handleError } from '../utils/error-handler';
import logger from '../utils/logger';
import { pkgDownload } from '../utils/pkg';

/**
 * Handle test command
 */
export default async function testCommand(): Promise<void> {
  try {
    logger.info('Testing package download functionality...');
    await pkgDownload('@rjkt/cya-react-webpack-template');
    logger.success('Test completed successfully');
  } catch (error) {
    handleError(error, ErrorCode.NETWORK_ERROR);
  }
}
