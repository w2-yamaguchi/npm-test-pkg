const pkgVersion: string = require('../../package.json').version

export const hello = (name: string) => {
  console.log(`Hello, ${name}! (v${pkgVersion} with Node.js ${process.version})`)
}
