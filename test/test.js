/* global describe, it, require, __dirname */

const readdirSync = require('fs').readdirSync
const exec = require('shelljs').exec
const path = require('path')

const expect = require('expect')

const examplesRoot = path.join(__dirname, 'examples')
const exampleNames = readdirSync(examplesRoot)

const dasherizeToSentence = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1).replace(/-/g, ' ')
}

exampleNames.forEach((exampleName) => {
  const examplePath = path.join(examplesRoot, exampleName)
  const testPath = path.join(examplePath, 'test.js')
  const tests = require(testPath)
  const options = { cwd: examplePath, silent: true }

  describe(dasherizeToSentence(exampleName), () => {

    tests.forEach((test) => {

      const commands = test.commands ? test.commands : [test.command]

      commands.forEach((command) => {

        // slice the name to clean it up a lil'
        it(`${test.description} (${command.slice(2)})`, () => {

          const result = exec(command, options)

          const output = result.stdout.trim() + result.stderr.trim()

          expect(output).toEqual(test.output.trim())
          expect(test.code).toEqual(result.code)
        })
      })
    })
  })
})
