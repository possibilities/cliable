const fixtures = []

fixtures.push({
  description: 'Running a command',
  command: './cli.js command-foo',
  code: 0,
  output: 'Running foo command'
})

fixtures.push({
  description: 'Running another command',
  command: './cli.js command-bar',
  code: 0,
  output: 'Running bar command'
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
  description: 'Running non-existent command',
  commands: ['./cli.js fuffy'],
  code: 1,
  output: `
cli.js <command> [options]

Commands:
  command-foo  A foo command
  command-bar  A bar command

Options:
  --help, -h     Show help  [boolean]
  --version, -v  Show version  [boolean]

Command not found: fuffy
`
})

fixtures.push({
  description: 'Viewing version',
  commands: ['./cli.js --version', './cli.js -v'],
  code: 0,
  output: '0.0.1'
})

module.exports = fixtures
