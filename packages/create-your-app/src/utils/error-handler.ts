import logger from './logger';

/**
 * Custom CLI error class
 */
export class CliError extends Error {
  exitCode: number;

  constructor(message: string, exitCode = 1) {
    super(message);
    this.name = 'CliError';
    this.exitCode = exitCode;
  }
}

/**
 * Error codes with descriptions and solutions
 */
export enum ErrorCode {
  UNKNOWN = 'UNKNOWN',
  TEMPLATE_NOT_FOUND = 'TEMPLATE_NOT_FOUND',
  DIRECTORY_EXISTS = 'DIRECTORY_EXISTS',
  NETWORK_ERROR = 'NETWORK_ERROR',
  PERMISSION_DENIED = 'PERMISSION_DENIED',
  GIT_ERROR = 'GIT_ERROR',
  INVALID_TEMPLATE = 'INVALID_TEMPLATE',
  PACKAGE_MANAGER_ERROR = 'PACKAGE_MANAGER_ERROR'
}

/**
 * Error descriptions and solutions
 */
const ERROR_MAP: Record<ErrorCode, { description: string; solution: string }> =
  {
    [ErrorCode.UNKNOWN]: {
      description: 'An unknown error occurred',
      solution:
        'Try running the command again with DEBUG=true for more information'
    },
    [ErrorCode.TEMPLATE_NOT_FOUND]: {
      description: 'Template not found',
      solution:
        'Check the template name or path and try again. Run "cya list" to see available templates'
    },
    [ErrorCode.DIRECTORY_EXISTS]: {
      description: 'Directory already exists',
      solution: 'Use --force flag to overwrite or choose a different name'
    },
    [ErrorCode.NETWORK_ERROR]: {
      description: 'Network error',
      solution: 'Check your internet connection and try again'
    },
    [ErrorCode.PERMISSION_DENIED]: {
      description: 'Permission denied',
      solution: 'Check file permissions or try running with elevated privileges'
    },
    [ErrorCode.GIT_ERROR]: {
      description: 'Git operation failed',
      solution: 'Make sure git is installed and configured properly'
    },
    [ErrorCode.INVALID_TEMPLATE]: {
      description: 'Invalid template structure',
      solution:
        'The template may be corrupted. Try a different template or report this issue'
    },
    [ErrorCode.PACKAGE_MANAGER_ERROR]: {
      description: 'Package manager error',
      solution: 'Make sure the package manager is installed and try again'
    }
  };

/**
 * Handle uncaught exceptions
 * @param error Error object
 */
export function handleError(error: unknown, errorCode?: ErrorCode): void {
  if (error instanceof CliError) {
    logger.error(error.message);
    process.exit(error.exitCode);
  } else if (error instanceof Error) {
    const code = errorCode || ErrorCode.UNKNOWN;
    const { description, solution } = ERROR_MAP[code];

    logger.error(`${description}: ${error.message}`);
    logger.info(`Solution: ${solution}`);

    if (process.env['DEBUG'] === 'true') {
      logger.debug(error.stack || 'No stack trace available');
    } else {
      logger.info(
        'Run with DEBUG=true environment variable for more information'
      );
    }
    process.exit(1);
  } else {
    logger.error('Unknown error occurred');
    logger.debug(`Error details: ${JSON.stringify(error)}`);
    process.exit(1);
  }
}

/**
 * Set up global error handlers
 */
export function setupGlobalErrorHandlers(): void {
  // Handle uncaught exceptions
  process.on('uncaughtException', (error) => {
    logger.error('Uncaught exception:');
    handleError(error);
  });

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (reason) => {
    logger.error('Unhandled promise rejection:');
    handleError(reason);
  });
}

export default {
  CliError,
  ErrorCode,
  handleError,
  setupGlobalErrorHandlers
};
