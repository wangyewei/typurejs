/**
 * Copied from Vue
 * @url https://github.com/vuejs/core/blob/main/rollup.config.js
 */
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import chalk from 'chalk'

import json from '@rollup/plugin-json'
import alias from '@rollup/plugin-alias'
import esbuild from 'rollup-plugin-esbuild'

const require = createRequire(import.meta.url)

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const packagesDir = path.resolve(__dirname, 'packages')
const packageDir = path.resolve(packagesDir, process.env.TARGET)
/**
 * resolve file path
 * @param {string} p - The file pate relative to the package directory.
 * @returns {string} The resoleved absolute file path.
 */
const resolve = (p) => path.resolve(packageDir, p)

const pkg = require(resolve('package.json'))

const defaultFormats = ['esm-bundler', 'cjs']
const packageOptions = pkg.buildOptions || {}
const name = packageOptions.filename || path.basename(packageDir)
const packageFormats = packageOptions.formats || defaultFormats

const outPutConfigs = {
  'esm-bundler': {
    file: resolve(`dist/${name}.esm-bundler.js`),
    format: 'es',
  },
  cjs: {
    file: resolve(`dist/${name}.cjs.js`),
    format: `cjs`,
  },
}

const packageConfig = packageFormats.map((format) =>
  createConfig(format, outPutConfigs[format])
)

export default packageConfig

function createConfig(format, output, plugins = []) {
  if (!output) {
    console.log(chalk.yellow(`invalid output: “${output}”`))
    process.exit(1)
  }

  // const isBoundlerESMBuild = /esm-bundler/.test(format)
  // const isNodeBuild = format === 'cjs'

  output.exports = 'named'
  output.sourcemap = false

  let entryFile = 'src/index.ts'

  function resoveExternal() {
    const treeShakenDeps = ['source-map-js', '@babel/parser', 'estree-walker']
    return [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
      ...['path', 'url', 'stream'],
      ...treeShakenDeps,
    ]
  }

  function resolveDefine() {}

  return {
    input: resolve(entryFile),
    external: resoveExternal(),
    plugins: [
      json({
        namedExports: false,
      }),
      // alias({
      //   entries,
      // }),
      esbuild({
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        sourceMap: output.sourceMap,
        minify: false,
        target: 'esnext',
        ...plugins,
      }),
    ],
    output,
    treeshake: {
      moduleSideEffects: false,
    },
  }
}
