#!/usr/bin/env node

const yargs = require('yargs')
const buildCommandLineInterface = require('../../../dist/index').default

buildCommandLineInterface({
  version: '0.0.1',
  commandHandlers: {
    'command-foo': () => console.log('Running foo command'),
    'command-bar': () => console.log('Running bar command')
  },
  commands: {
    'command-foo': {
      description: 'A foo command',
      options: {},
      handlers: ['command-foo']
    },
    'command-bar': {
      description: 'A bar command',
      options: {},
      handlers: ['command-bar']
    }
  }
})
