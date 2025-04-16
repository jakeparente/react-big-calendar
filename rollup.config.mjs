import path from 'path'
import * as url from 'url'
import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import clear from 'rollup-plugin-clear'
// removed sizeSnapshot, as it is not compatible with ESM
import { terser } from 'rollup-plugin-terser'
import fs from 'fs'
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const input = './src/index.js'
const name = 'ReactBigCalendar'

const babelOptions = {
  exclude: /node_modules/,
  babelHelpers: 'runtime',
}
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
}

const commonjsOptions = {
  include: /node_modules/,
}

export default [
  {
    input,
    output: {
      file: './dist/react-big-calendar.js',
      format: 'umd',
      name,
      globals,
      interop: 'auto',
    },
    external: Object.keys(globals).push(/@babel\/runtime/),
    plugins: [
      // only use 'clear' on the first target
      clear({
        targets: ['./dist', './lib'],
        watch: true,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
        preventAssignment: true,
      }),
      nodeResolve(),
      commonjs(commonjsOptions),
      babel(babelOptions),
    ],
  },

  {
    input,
    output: {
      file: './dist/react-big-calendar.min.js',
      format: 'umd',
      name,
      globals,
      interop: 'auto',
    },
    external: Object.keys(globals).push(/@babel\/runtime/),
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true,
      }),
      nodeResolve(),
      commonjs(commonjsOptions),
      babel(babelOptions),
      terser(),
    ],
  },

  {
    input,
    output: {
      file: pkg.module,
      format: 'esm',
      interop: 'auto',
    },
    // Exclude only external dependencies like 'react' and 'react-dom'
    external: (id) =>
      ['react', 'react-dom'].includes(id) || id.startsWith('@babel/runtime'),
    plugins: [
      babel({
        ...babelOptions,
        configFile: path.join(__dirname, 'babel.config.esm.js'),
      }),
    ],
  },
]
