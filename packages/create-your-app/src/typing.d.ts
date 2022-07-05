declare module '*.json';

interface KV {
  [k: string]: string;
}

interface TemplatePkgJson {
  package: {
    scripts: KV;
    dependencies: KV;
    devDependencies: KV;
  };
}
