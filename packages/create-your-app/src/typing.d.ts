interface KV {
  [k: string]: string;
}

export interface TemplatePkgJson {
  package: {
    scripts: KV;
    dependencies: KV;
    devDependencies: KV;
  };
}
