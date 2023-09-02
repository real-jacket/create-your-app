import { isDev, isProd, generateByEnv } from 'utils/env';

/**
 * 协议
 */
type Protocol = 'https' | 'http' | '';

/**
 * 子域
 */
type Subdomain = 'www';

/**
 * 主域
 */
type Domain = any;

interface Options {
  /** 协议，默认：https */
  protocol?: Protocol;
  /** 子域 */
  subdomain?: Subdomain;
  /** 主域 */
  domain?: Domain;
  /** 本地开发环境（development）指定 path（方便本地 proxy 代理调试接口时，指定任意的别名、域名或其它任意的字符串） */
  devProxyPathAlias?: string;
}

/**
 * 生成指定域名的完整 origin
 *  - 自动区分编译环境
 *  - 已处理 www 与其它主机的特殊性
 *  - 支持本地调试（development 环境）指定任意域名、字符串
 *
 * @param options.protocol 协议，默认：https
 * @param options.subdomain 子域名，默认：'m'
 * @param options.domain 主域名，默认：''
 * @param options.devProxyPathAlias 指定后，development 环境将直接返回该字符串，一般有两种用途：
 *  1. 直接指定其它任意的 origin，例如：http://xxx.xxxx.com， 用来应对某些本地开发调试的特殊场景；
 *  2. 不想根据接口本身的路径 path 去做匹配（容易重复、误伤），而是指定一段虚拟的路径 path，例如：devProxyPathAlias 设置为 `'/dev_proxy_m'`，然后在 `setupProxy.js` 中，配合 `pathRewrite` 将 `'/dev_proxy_m'` 替换为空，让本地开发时代理调试更安全、可控。
 */
export default function generate(options: Options = {}): string {
  const { devProxyPathAlias } = options;

  if (isDev && devProxyPathAlias !== undefined) {
    return devProxyPathAlias;
  }

  const { protocol = 'https', subdomain = 'm', domain = '' } = options;
  const dot = isProd ? '' : '.';
  const protocolStr = protocol === '' ? '' : `${protocol}:`;
  // 子域（非 www）的 path - 区分环境
  const subdomainEnvPath = generateByEnv({
    development: 'test',
    test: 'test',
    uat: 'uat',
    production: ''
  });
  // www的二级域名 - 区分环境
  const subdomainTripleW = generateByEnv({
    development: 'test',
    test: 'test',
    uat: 'uat',
    production: 'www'
  });
  // 子域拼接，区分编译环境，单独处理 www 主机
  const subdomainStr =
    subdomain !== 'www'
      ? `${subdomain}${dot}${subdomainEnvPath}`
      : subdomainTripleW;

  return `${protocolStr}//${subdomainStr}.${domain}.com`;
}
