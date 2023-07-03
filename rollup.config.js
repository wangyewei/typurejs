/**
 * Copied from Vue
 * @url https://github.com/vuejs/core/blob/main/rollup.config.js
 */
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

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
const pkg = require(resolve(packageDir, process.env.TARGET))

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

const defaultFormats = ['esm-bundler', 'cjs']
const packageOptions = pkg.buildOptions || {}
const name = packageOptions.filename || path.basename(packageDir)
const packageFormats = packageOptions.formats || defaultFormats

const packageConfig = packageFormats.map((format) =>
  createConfig(format, outPutConfigs[format])
)

export default packageConfig

function createConfig() {}
