/* global describe, it, before, require, __dirname */

import { readdirSync } from 'fs'
import { exec } from 'shelljs'
import path from 'path'
import sh from 'shelljs'

import expect from 'expect'

const examplesRoot = path.join(__dirname, 'examples')
const exampleNames = readdirSync(examplesRoot)

const dasherizeToSentence = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1).replace(/-/g, ' ')
}

// Tests are extremely slow if you run babel on every example, instead
// transpile the library and avoid transpiling altogether.
before(() => {
  const { code, stderr } =
    sh.exec('babel index.js --out-dir dist', { silent: true })

  if (code) {
    throw new Error(stderr)
  }
})

exampleNames.forEach((exampleName) => {
  // if (exampleName !== 'basic-with-options') return

  const examplePath = path.join(examplesRoot, exampleName)
  const testPath = path.join(examplePath, 'test.js')
  const tests = require(testPath).default
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
