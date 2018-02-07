import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-local-resolve';
import memory from 'rollup-plugin-memory';

export default {
  // input: 'main.js',
  input: 'main.js',
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
    memory({
      path: 'main.js',
      contents: `
// @flow
if (process.env.NODE_ENV === 'production') {
module.exports = require('./css-sides.production.js');
} else {
module.exports = require('./css-sides.development.js');
}`,
    }),
    // localResolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
