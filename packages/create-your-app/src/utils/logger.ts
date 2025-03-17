import chalk from 'chalk';

type LogLevel = 'info' | 'success' | 'warning' | 'error' | 'debug';

interface LogOptions {
  prefix?: string;
  timestamp?: boolean;
}

/**
 * Logger class for consistent logging throughout the application
 */
class Logger {
  private debugMode: boolean;

  constructor() {
    this.debugMode = process.env['DEBUG'] === 'true';
  }

  /**
   * Set debug mode
   * @param isDebug Whether to enable debug mode
   */
  setDebugMode(isDebug: boolean): void {
    this.debugMode = isDebug;
  }

  /**
   * Format log message
   * @param level Log level
   * @param message Log message
   * @param options Log options
   * @returns Formatted log message
   */
  private formatMessage(
    level: LogLevel,
    message: string,
    options: LogOptions = {}
  ): string {
    const { prefix, timestamp = false } = options;

    let formattedMessage = '';

    // Add timestamp
    if (timestamp) {
      const now = new Date();
      formattedMessage += chalk.gray(`[${now.toISOString()}] `);
    }

    // Add prefix
    if (prefix) {
      formattedMessage += chalk.gray(`[${prefix}] `);
    }

    // Add log level
    switch (level) {
      case 'info':
        formattedMessage += chalk.blue('ℹ ');
        break;
      case 'success':
        formattedMessage += chalk.green('✓ ');
        break;
      case 'warning':
        formattedMessage += chalk.yellow('⚠ ');
        break;
      case 'error':
        formattedMessage += chalk.red('✖ ');
        break;
      case 'debug':
        formattedMessage += chalk.magenta('🔍 ');
        break;
    }

    // Add message content
    formattedMessage += message;

    return formattedMessage;
  }

  /**
   * Log info message
   * @param message Log message
   * @param options Log options
   */
  info(message: string, options?: LogOptions): void {
    console.log(this.formatMessage('info', message, options));
  }

  /**
   * Log success message
   * @param message Log message
   * @param options Log options
   */
  success(message: string, options?: LogOptions): void {
    console.log(this.formatMessage('success', chalk.green(message), options));
  }

  /**
   * Log warning message
   * @param message Log message
   * @param options Log options
   */
  warn(message: string, options?: LogOptions): void {
    console.log(this.formatMessage('warning', chalk.yellow(message), options));
  }

  /**
   * Log error message
   * @param message Log message
   * @param options Log options
   */
  error(message: string, options?: LogOptions): void {
    console.error(this.formatMessage('error', chalk.red(message), options));
  }

  /**
   * Log debug message (only in debug mode)
   * @param message Log message
   * @param options Log options
   */
  debug(message: string, options?: LogOptions): void {
    if (this.debugMode) {
      console.log(this.formatMessage('debug', chalk.magenta(message), options));
    }
  }

  /**
   * Log empty line(s)
   * @param count Number of empty lines
   */
  newLine(count = 1): void {
    for (let i = 0; i < count; i++) {
      console.log();
    }
  }

  /**
   * Log divider line
   * @param char Divider character
   * @param length Divider length
   */
  divider(char = '-', length = 80): void {
    console.log(chalk.gray(char.repeat(length)));
  }
}

// Export singleton
export const logger = new Logger();

export default logger;
