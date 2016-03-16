#!/usr/bin/env node

const yargs = require('yargs')
const buildCommandLineInterface = require('../../../dist/index').default

buildCommandLineInterface({
  version: '0.0.1',
  commandHandlers: {
    command1: () => console.log('Running command 1'),
    command2: () => console.log('Running command 2')
  },
  commands: {
    command1: {
      description: 'A command',
      options: {},
      handlers: ['command1']
    },
    command2: {
      description: 'Another command',
      options: {},
      handlers: ['command2']
    }
  }
})
