/* global describe, it, require, __dirname */

const readdirSync = require('fs').readdirSync
const exec = require('shelljs').exec
const path = require('path')

const expect = require('expect')

const examplesRoot = path.join(__dirname, 'examples')
const exampleNames = readdirSync(examplesRoot).filter((f) => f.split('.').length === 1)

const dasherizeToSentence = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1).replace(/-/g, ' ')
}

exampleNames.forEach((exampleName) => {
  const examplePath = path.join(examplesRoot, exampleName)
  const examples = require(examplePath + '.js')
  const execOptions = { cwd: examplesRoot, silent: true }

  describe(dasherizeToSentence(exampleName), () => {

    examples.forEach((example) => {
      const exampleArguments = example.arguments || ['']

      describe(example.description, () => {

        exampleArguments.forEach((argument) => {

          it(`./${exampleName} ${argument}`, () => {

            const result = exec('./' + exampleName + ' ' + argument, execOptions)

            const actualOutput = result.stdout.trim() + result.stderr.trim()
            const expectedOutput = example.output.trim().replace('COMMAND', exampleName)

            expect(expectedOutput).toEqual(actualOutput)
            expect(example.code).toEqual(result.code)
          })
        })
      })
    })
  })
})
