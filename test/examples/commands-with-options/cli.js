#!/usr/bin/env node

const yargs = require('yargs')
const buildCommandLineInterface = require('../../../index')

buildCommandLineInterface({
  version: '0.0.1',
  commandHandlers: {
  },
  commands: {
    'command-foo': {
      description: 'A foo command',
      handlers: [
        function(options) {
          console.log('Running command foo with app option: ' + options.foo)
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
    },
    'command-bar': {
      description: 'A bar command',
      options: {},
      handlers: [ function() { console.log('Running bar command') } ]
    }
  }
})
