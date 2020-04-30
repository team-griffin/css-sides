import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-local-resolve';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/es/css-sides.js',
      format: 'es',
    },
    {
      file: 'dist/cjs/css-sides.js',
      format: 'cjs',
    },
  ],
  plugins: [
    localResolve(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
  ],
  external: [
    "@team-griffin/css-longhand",
    "lodash.reduce"
  ]
};
