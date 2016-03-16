#!/usr/bin/env node

const yargs = require('yargs')
const buildCommandLineInterface = require('../../../dist/index').default

buildCommandLineInterface({
  version: '0.0.1',
  command: {
    handlers: [
      (options) => { console.log(`Running default with option: ${options.foo}`) }
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
})
