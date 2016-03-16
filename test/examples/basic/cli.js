#!/usr/bin/env node

const yargs = require('yargs')
const buildCommandLineInterface = require('../../../dist/index').default

buildCommandLineInterface({
  version: '0.0.1',
  command: {
    handlers: [ () => console.log('Running default') ]
  }
})
