import { Command } from 'commander'
// import * as commands from './commands'
import { hello } from './commands/hello'

const program = new Command('laas')
const pkgVersion: string = require('../package.json').version

program
  .version(pkgVersion)
  .usage('<command> [options]')

// commands(program);
program
  .command('hello [name]')
  .action(hello)

program.on('*', () => {
  console.log('Unknown command:', program.args.join(' '))
  program.help()
})

if (!process.argv.slice(2).length) {
  program.help()
}

program.parse(process.argv)
