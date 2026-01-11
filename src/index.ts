import { logger } from './logger.js';
import type { LoggerConfig } from './types.js';

/**
 * Dev-only logger with beautiful, colorful output
 * 
 * Automatically detects Node.js or Browser environment and applies appropriate styling.
 * Disabled by default in production (NODE_ENV === 'production').
 * 
 * @example
 * ```ts
 * import log from 'hardlog';
 * 
 * log.success('Server started successfully!');
 * log.error('Database connection failed');
 * log.warn('Missing environment variable');
 * log.info('Listening on port 3000');
 * 
 * // Multiple arguments support
 * log.info('User Object:', userData);
 * log.success('Status:', status, 'Code:', code);
 * ```
 * 
 * @example
 * ```ts
 * // Configure logger
 * import log from 'hardlog';
 * 
 * log.config({ enabled: true, showTimestamp: true });
 * ```
 */
const log = {
  /**
   * Log a success message
   */
  success: (...args: any[]) => logger.success(...args),

  /**
   * Log an error message
   */
  error: (...args: any[]) => logger.error(...args),

  /**
   * Log a warning message
   */
  warn: (...args: any[]) => logger.warn(...args),

  /**
   * Log an info message
   */
  info: (...args: any[]) => logger.info(...args),

  /**
   * Configure logger options
   */
  config: (options: LoggerConfig) => {
    logger.configure(options);
    return log;
  },
};

export default log;
export type { LoggerConfig };
