/**
 * Copied from Vue
 *
 * @url https://github.com/vuejs/core/blob/main/scripts/build.js
 */

import { targets as allTagets, fuzzyMatchedTargets } from './utils.js'
// parses command arguments and converts them to JavaScript objects
import minimist from 'minimist'
import { cpus } from 'node:os'
import path from 'node:path'
import { createRequire } from 'node:module'
import { existsSync } from 'node:fs'
import fs from 'node:fs/promises'
import { execa, execaSync } from 'execa'

const require = createRequire(import.meta.url)
/**
 * remove the first two elemets (the executale file path and the script
 * file path), leaving olny the actual command line argument part.
 *
 *
 * --name Yewei Wang --age 23
 *
 * {name: 'Yewei Wang', age: 23}
 *
 */
const args = minimist(process.argv.slice(2))
/**
 * `args._` represents an unknown parameter that has not been parsed,
 * that is, a parameter value with no specified name in the command
 * line argument.
 *
 * $ node scripts/build.js target1 target2 --name Yewei Wang --age 23
 *
 * then `args._` will be an array `['target1', 'target2']` containing
 * unknown parameter that have not been parsed, namely `target1` and
 * `target2`
 */
const targets = args._
/**
 * $ node scripts/build.js --all
 * returns a boolean
 */
const buildAllMatching = args.all || args.a
const formats = args.formats || args.f
const devOnly = args.devOnly || args.d
const prodOnly = !devOnly && (args.prodOnly || args.p)
const sourceMap = args.sourcemap || args.s
const buildTypes = args.withTypes || args.t

const isRelease = args.release

const commit = execaSync('git', ['rev-parse', 'HEAD']).stdout.slice(0, 7)

run()

async function run() {
  try {
    const resolvedTargets = targets.length
      ? fuzzyMatchedTargets(targets, buildAllMatching)
      : /** `buildOptions` of target/package.json */ allTagets

    await buildAll(resolvedTargets)
    checkAllSizes(resolvedTargets)

    if (buildTypes) {
      await execa(
        'pnpm',
        [
          'run',
          'build-dts',
          ...(targets.length
            ? ['--environment', `TARGETS:${resolvedTargets.join(',')}`]
            : []),
        ],
        {
          stdio: 'inherit',
        }
      )
    }
  } catch (err) {
    console.log(`Build faild: ${err}`)
  }
}

async function buildAll(targets) {
  await runParallel(cpus().length, targets, build)
}

async function runParallel(maxComcurrency, source, iteratorFn) {
  const ret = []
  const executing = []
  for (const target of source) {
    const p = Promise.resolve().then(() => iteratorFn(target))
    ret.push(p)

    if (maxComcurrency < source.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1))
      executing.push(e)

      if (executing.length >= maxComcurrency) {
        await Promise.race(executing)
      }
    }
  }
  return Promise.all(ret)
}

/**
 * Builds the target
 * @param {string} target The target to build
 * @returns {Promise<void>} - A promise representing the build process.
 */
async function build(target) {
  const pkgDir = path.resolve(`packages/${target}`)
  const pkg = require(`${pkgDir}/package.json`)

  // if this is a full build (no specific targets), ignore private packages
  if ((isRelease || !target.length) && pkg.private) {
    return
  }

  // if building a specific format, do not remove dist.
  if (!formats && existsSync(`${pkgDir}/dist`)) {
    await fs.rm(`${pkgDir}/dist`, { recursive: true })
  }

  const env =
    (pkg.buildOptions && pkg.buildOptions.env) ||
    (devOnly ? 'development' : 'production')
  await execa(
    'rollup',
    [
      '-c',
      '--environment',
      [
        `COMMIT:${commit}`,
        `NODE_ENV:${env}`,
        `TARGET:${target}`,
        formats ? `FORMATS:${formats}` : ``,
        prodOnly ? `PROD_ONLY:true` : ``,
        sourceMap ? `SOURCE_MAP:true` : ``,
      ]
        .filter(Boolean)
        .join(','),
    ],
    { stdio: 'inherit' }
  )
}
/**
 * Checks the sizes of all targets.
 * @param {string[]} targets - The targets to check sizes for.
 * @returns {void}
 */

function checkAllSizes(targets) {
  if (devOnly || (formats && !formats.includes('global'))) {
    return
  }
  console.log()
  for (const target of targets) {
    checkSize(target)
  }
  console.log()
}

/**
 * Checks the size of a target.
 * @param {string} target - The target to check the size for.
 * @returns {void}
 */
function checkSize(target) {
  const pkgDir = path.resolve(`packages/${target}`)
  checkFileSize(`${pkgDir}/dist/${target}.global.prod.js`)
  if (!formats || formats.includes('global-runtime')) {
    checkFileSize(`${pkgDir}/dist/${target}.runtime.global.prod.js`)
  }
}

/**
 * Checks the file size.
 * @param {string} filePath - The path of the file to check the size for.
 * @returns {void}
 */
function checkFileSize(filePath) {
  if (!existsSync(filePath)) {
    return
  }
  const file = readFileSync(filePath)
  const minSize = (file.length / 1024).toFixed(2) + 'kb'
  const gzipped = gzipSync(file)
  const gzippedSize = (gzipped.length / 1024).toFixed(2) + 'kb'
  const compressed = brotliCompressSync(file)
  const compressedSize = (compressed.length / 1024).toFixed(2) + 'kb'
  console.log(
    `${chalk.gray(
      chalk.bold(path.basename(filePath))
    )} min:${minSize} / gzip:${gzippedSize} / brotli:${compressedSize}`
  )
}
