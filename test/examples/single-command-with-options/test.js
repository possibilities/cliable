const fixtures = []

fixtures.push({
  description: 'Running default command without required option',
  command: './cli.js',
  code: 1,
  output: `
cli.js [options]

Options:
  --help, -h     Show help  [boolean]
  --version, -v  Show version  [boolean]
  --foo, -f      Foo option  [string] [required]

Missing required argument: foo
`
})

fixtures.push({
  description: 'Showing help message',
  commands: [
    './cli.js --help',
    './cli.js -h'
  ],
  code: 0,
  output: `
cli.js [options]

Options:
  --help, -h     Show help  [boolean]
  --version, -v  Show version  [boolean]
  --foo, -f      Foo option  [string] [required]
`
})

fixtures.push({
  description: 'Running default command with the required option',
  command: './cli.js --foo bar',
  code: 0,
  output: 'Running default with option: bar'
})

fixtures.push({
  description: 'Showing version message',
  commands: ['./cli.js --version', './cli.js -v'],
  code: 0,
  output: '0.0.1'
})

module.exports = fixtures
