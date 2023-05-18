import { Command } from 'commander'
import { cliVersion, cliName } from './index.js';
const program = new Command()

program.name(cliName).version(cliVersion)

program.command('build').description('build for package of typure-cli')
  .option('-dt, --declarationType [type]', 'the way to generate declaration file')
  .action(async (option: Record<string, any>) => {
    // console.log(option)
    const { build } = await import('./commands/build.js')
    return build(option)
  })


program.parse(process.argv)