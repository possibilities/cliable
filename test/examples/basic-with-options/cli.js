#!/usr/bin/env node

const yargs = require('yargs')
const buildCommandLineInterface = require('../../../dist/index').default

buildCommandLineInterface({
  version: '0.0.1',
  appOptions: {
    foo: {
      description: 'Foo option',
      alias: 'f',
      demand: true,
      type: 'string',
    }
  },
  commandHandlers: {
    default: (options) => {
      console.log(`Running default with option: ${options.foo}`)
    }
  },
  appCommands: ['default']
})
