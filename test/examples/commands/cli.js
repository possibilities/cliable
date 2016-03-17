#!/usr/bin/env node

const yargs = require('yargs')
const buildCommandLineInterface = require('../../../dist/index').default

buildCommandLineInterface({
  version: '0.0.1',
  commands: {
    'command-foo': {
      description: 'A foo command',
      options: {},
      handlers: [ function() { console.log('Running foo command') } ]
    },
    'command-bar': {
      description: 'A bar command',
      options: {},
      handlers: [ function() { console.log('Running bar command') } ]
    }
  }
})
