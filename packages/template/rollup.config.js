import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';
import pkg from './package.json';

const isProd = process.env.NODE_ENV === 'production';
const isAnalyze = process.env.ANALYZE === 'true';

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
      exports: 'named'
    }
  ],
  external,
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true,
      clean: true
    }),
    isProd && terser(),
    isAnalyze &&
      visualizer({
        filename: 'stats.html',
        title: `${pkg.name} Bundle Analysis`,
        open: true
      })
  ].filter(Boolean)
};
