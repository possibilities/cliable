#!/usr/bin/env node

const yargs = require('yargs')
const buildCommandLineInterface = require('../../../dist/index').default

buildCommandLineInterface({
  version: '0.0.1',
  commandHandlers: {
    command: (options) => {
      console.log(`Running command with app option: ${options.foo}`)
    }
  },
  commands: {
    command: {
      description: 'A command',
      handlers: ['command'],
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
