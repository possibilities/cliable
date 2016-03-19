const fixtures = []

fixtures.push({
  description: 'Running default command',
  command: './cli.js',
  code: 0,
  output: 'Running default'
})

fixtures.push({
  description: 'Showing help message',
  commands: ['./cli.js --help', './cli.js -h'],
  code: 0,
  output: `
cli.js [options]

Options:
  --help, -h     Show help  [boolean]
  --version, -v  Show version  [boolean]
`
})

fixtures.push({
  description: 'Showing version message',
  commands: ['./cli.js --version', './cli.js -v'],
  code: 0,
  output: '0.0.1'
})

module.exports = fixtures
