/**
 * Copy Vue's build strategy
 *
 * @url https://github.com/vuejs/core/blob/main/scripts/build.js
 */

import { targets as allTagets, fuzzyMatchedTargets } from "./utils.js"
// parses command arguments and converts them to JavaScript objects
import minimist from "minimist"
import { cpus } from "node:os"
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

run()

async function run() {
  try {
    const resolvedTargets = targets.length
      ? fuzzyMatchedTargets(targets, buildAllMatching)
      : /** `buildOptions` of target/package.json */ allTagets

    await buildAll(resolvedTargets)
  } catch {}
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

    return Promise.all(ret)
  }
}

async function build(target) {}
