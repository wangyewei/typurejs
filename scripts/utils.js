import fs from "node:fs"
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
export const targets = fs.readdirSync("packages").filter((f) => {
  if (!fs.statSync(`packages/${f}`).isDirectory()) {
    return false
  }

  const pkg = require(`../packages/${f}/package.json`)

  if (!pkg.buildOptions) {
    return false
  }

  return true
})

export const fuzzyMatchedTargets = (partialTargets, includeAllMathing) => {}
