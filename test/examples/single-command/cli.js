#!/usr/bin/env node

const yargs = require('yargs')
const buildCommandLineInterface = require('../../../index')

buildCommandLineInterface({
  version: '0.0.1',
  command: {
    handlers: [ function() { console.log('Running default') } ]
  }
})
