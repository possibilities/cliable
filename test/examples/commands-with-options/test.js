const fixtures = []

fixtures.push({
  description: 'Running command with option',
  command: './cli.js command-foo --foo bar',
  code: 0,
  output: 'Running command foo with app option: bar'
})

fixtures.push({
  description: 'Running command without option',
  command: './cli.js command-foo',
  code: 1,
  output: `
cli.js command-foo

Options:
  --help, -h     Show help  [boolean]
  --version, -v  Show version  [boolean]
  --foo, -f      Foo option  [string] [required]

Missing required argument: foo
`
})

fixtures.push({
  description: 'Viewing help',
  commands: ['./cli.js --help', './cli.js -h'],
  code: 0,
  output: `
cli.js <command> [options]

Commands:
  command-foo  A foo command
  command-bar  A bar command

Options:
  --help, -h     Show help  [boolean]
  --version, -v  Show version  [boolean]
`
})

fixtures.push({
  description: 'Viewing version',
  commands: ['./cli.js --version', './cli.js -v'],
  code: 0,
  output: '0.0.1'
})

module.exports = fixtures
