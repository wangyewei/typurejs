import fs from 'fs-extra'
import { URL, fileURLToPath } from 'url'

const packagePath = fileURLToPath(new URL('../package.json', import.meta.url))
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'))

export const cliVersion: string = packageJson.version
export const cliName: string = packageJson.name

process.env.TYPURE_CLI_VERSION = cliVersion