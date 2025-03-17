import os from 'os';
import path from 'path';

import fsextra from 'fs-extra';
const { existsSync, mkdirSync, readJsonSync, writeJsonSync } = fsextra;

/**
 * Default configuration
 */
const defaultConfig = {
  // Package registry URLs
  registry: {
    npm: 'https://registry.npmjs.org',
    taobao: 'https://registry.npmmirror.com'
  },

  // Default templates
  templates: {
    react: '@rjkt/cya-react-webpack-template',
    vue: '@rjkt/cya-vue-template',
    lib: '@rjkt/cya-lib-template',
    monorepo: '@rjkt/cya-lib-monorepo-template'
  },

  // Component templates
  componentTemplates: {
    react: path.join(__dirname, '../../component/react'),
    'ts-react': path.join(__dirname, '../../component/ts-react')
  },

  // Default package manager
  packageManager: 'npm',

  // Cache directory for downloaded templates
  cacheDir: path.join(os.homedir(), '.cya', 'cache'),

  // Default template directory
  templateDir: path.join(os.homedir(), '.cya', 'templates')
};

/**
 * Configuration type
 */
type Config = typeof defaultConfig;

/**
 * User configuration file path
 */
const userConfigPath = path.join(os.homedir(), '.cya', 'config.json');

/**
 * Load user configuration
 * @returns User configuration merged with default configuration
 */
function loadUserConfig(): Config {
  try {
    if (existsSync(userConfigPath)) {
      return {
        ...defaultConfig,
        ...(readJsonSync(userConfigPath) as Partial<Config>)
      };
    }
  } catch (error) {
    // Ignore error and use default config
  }

  return defaultConfig;
}

/**
 * Save user configuration
 * @param config Configuration to save
 */
function saveUserConfig(config: Partial<Config>): void {
  try {
    const dirPath = path.dirname(userConfigPath);
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
    }

    const newConfig = {
      ...loadUserConfig(),
      ...config
    };

    writeJsonSync(userConfigPath, newConfig, { spaces: 2 });
  } catch (error) {
    // Ignore error
  }
}

/**
 * Get configuration value
 * @param key Configuration key
 * @returns Configuration value
 */
function getConfig<K extends keyof typeof defaultConfig>(
  key: K
): typeof defaultConfig[K] {
  const config = loadUserConfig();
  return config[key];
}

/**
 * Set configuration value
 * @param key Configuration key
 * @param value Configuration value
 */
function setConfig<K extends keyof typeof defaultConfig>(
  key: K,
  value: typeof defaultConfig[K]
): void {
  saveUserConfig({ [key]: value });
}

/**
 * Get registry URL
 * @param useTaobao Whether to use Taobao registry
 * @returns Registry URL
 */
function getRegistry(useTaobao = false): string {
  const config = loadUserConfig();
  return useTaobao ? config.registry.taobao : config.registry.npm;
}

export {
  defaultConfig,
  loadUserConfig,
  saveUserConfig,
  getConfig,
  setConfig,
  getRegistry
};
