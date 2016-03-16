const fixtures = []

fixtures.push({
  description: 'Running a command',
  command: './cli.js command1',
  code: 0,
  output: 'Running command 1'
})

fixtures.push({
  description: 'Running another command',
  command: './cli.js command2',
  code: 0,
  output: 'Running command 2'
})

fixtures.push({
  description: 'Viewing help',
  commands: ['./cli.js --help', './cli.js -h'],
  code: 0,
  output: `
cli.js <command> [options]

Commands:
  command1  A command
  command2  Another command

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
  command1  A command
  command2  Another command

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

export default fixtures
