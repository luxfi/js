import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'esm',
      sourcemap: process.env.BUILD === 'production' ? false : true,
    },
    plugins: [
      del({ targets: 'dist/*' }),
      typescript({ tsconfig: './tsconfig.json' }),
      json(),
      commonjs(),
    ],
    external: [
      'luxnet',
      'luxnet/dist/utils',
      'luxnet/dist',
      'ethers',
      'web3',
      'url',
      'events',
      '@openzeppelin/contracts/build/contracts/ERC20.json',
      '@openzeppelin/contracts/build/contracts/ERC721.json',
      '@ethereumjs/tx',
      '@ethereumjs/common',
      'bip32',
      'tiny-secp256k1',
    ],
  },
  {
    input: 'dist/index.d.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
];
