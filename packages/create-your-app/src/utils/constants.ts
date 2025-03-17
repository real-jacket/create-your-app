import { getRegistry } from './config';

/**
 * NPM registry URL
 */
const NpmRegistry = getRegistry(false);

/**
 * Taobao NPM registry URL
 */
const TaobaoNpmRegistry = getRegistry(true);

/**
 * Template name prefix
 */
const TemplatePrefix = '@rjkt/cya-';

/**
 * Default component directory
 */
const DefaultComponentDir = 'src/components';

/**
 * Default package directory
 */
const DefaultPackageDir = 'packages';

export {
  NpmRegistry,
  TaobaoNpmRegistry,
  TemplatePrefix,
  DefaultComponentDir,
  DefaultPackageDir
};
