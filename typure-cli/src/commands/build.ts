
import { remove } from 'fs-extra'
import { execa } from 'execa'
import path from 'path'
import { createSpinner } from 'nanospinner'
import { rollup } from 'rollup';


type BuildTaskOption = Record<string, any>

export async function buildTask(option: BuildTaskOption) {
  const start = Date.now()
  const spinner = createSpinner().start()
  const __dirname = process.cwd()

  const rollupConfig = require(path.resolve(__dirname, 'rollup.config.js'));

  try {
    await remove(path.resolve(__dirname, 'dist'))
    await rollup(rollupConfig)

    await execa('tsc')
    const end = Date.now()

    spinner.success({
      text: `build done in ${(end - start) / 1000}s.`
    })
  } catch (error) {
    spinner.error({ text: 'build failed' })
    throw error
  }
}

export async function build(option: BuildTaskOption) {
  try {
    await buildTask(option)
  } catch (error) {
    console.log(error)
  }
}
