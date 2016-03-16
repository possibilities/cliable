#!/usr/bin/env node

const yargs = require('yargs')
const buildCommandLineInterface = require('../../../dist/index').default

buildCommandLineInterface({
  version: '0.0.1',
  commandHandlers: {
  },
  commands: {
    'command-foo': {
      description: 'A foo command',
      handlers: [
        (options) => {
          console.log(`Running command foo with app option: ${options.foo}`)
        }
      ],
      options: {
        foo: {
          description: 'Foo option',
          alias: 'f',
          demand: true,
          type: 'string',
        }
      }
    }
  }
})
