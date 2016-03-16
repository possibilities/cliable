const fixtures = []

fixtures.push({
  description: 'Running command with option',
  command: './cli.js command --foo bar',
  code: 0,
  output: 'Running command with app option: bar'
})

// Running command without option

fixtures.push({
  description: 'Running command without option',
  command: './cli.js command',
  code: 1,
  output: `
cli.js command

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
  command  A command

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

export default fixtures
