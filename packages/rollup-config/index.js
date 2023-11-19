/* eslint-disable import/no-extraneous-dependencies */
import swc from 'rollup-plugin-swc3';
import preserveDirectives from 'rollup-swc-preserve-directives';
import nodeResolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';
import fs from 'node:fs';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

const EXTERNALS = { ...pkg.dependencies, ...pkg.peerDependencies };

const defaultConfig = {
  external: Object.keys(EXTERNALS || {}),
  input: 'lib/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'lib',
  },
};

/**
 * @type {import('rollup').RollupOptions}
 */
const rollupConfig = [
  {
    ...defaultConfig,
    plugins: [
      nodeResolve(),
      swc({
        jsc: {
          target: 'es5',
        },
      }),
      preserveDirectives(),
      commonjs(),
    ],
  },
  {
    ...defaultConfig,
    plugins: [dts()],
  },
];

export default rollupConfig;
