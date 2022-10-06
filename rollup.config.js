import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import cssnano from 'cssnano';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import svg from 'rollup-plugin-svg';
import typescript from "rollup-plugin-typescript2";
const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    svg(),
    typescript({
      useTsconfigDeclarationDir: true,
      exclude: [
        "**/__tests__",
        "**/*.test.tsx",
        "**/*.stories.tsx"
      ]
    }),
    postcss({
      plugins: [
        cssnano()
      ],
      extensions: ['.css'],
      extract: 'styles.css',
    }),
    copy({
      targets: [
        {
          src: './tailwind.config.js',
          dest: 'lib'
        },
        {
          src: './src/fonts/**/*',
          dest: 'lib/fonts'
        }
      ]
    })
  ]
};