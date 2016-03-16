#!/usr/bin/env node

const yargs = require('yargs')
const buildCommandLineInterface = require('../../../dist/index').default

buildCommandLineInterface({
  version: '0.0.1',
  commandHandlers: {
    'command-foo': (options) => {
      console.log(`Running command foo with app option: ${options.foo}`)
    }
  },
  commands: {
    'command-foo': {
      description: 'A foo command',
      handlers: ['command-foo'],
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
