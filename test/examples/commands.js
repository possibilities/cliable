module.exports = [
  {
    description: 'Running a command',
    arguments: ['command-foo'],
    code: 0,
    output: 'Running foo command'
  },

  {
    description: 'Running another command',
    arguments: ['command-bar'],
    code: 0,
    output: 'Running bar command'
  },

  {
    description: 'Viewing help',
    arguments: ['--help', '-h'],
    code: 0,
    output: `
COMMAND <command> [options]

Commands:
  command-foo  A foo command
  command-bar  A bar command

Options:
  --help, -h     Show help  [boolean]
  --version, -v  Show version  [boolean]
`
  },

  {
    description: 'Running non-existent command',
    arguments: ['fuffy'],
    code: 1,
    output: `
COMMAND <command> [options]

Commands:
  command-foo  A foo command
  command-bar  A bar command

Options:
  --help, -h     Show help  [boolean]
  --version, -v  Show version  [boolean]

Command not found: fuffy
  `
  },

  {
    description: 'Viewing version',
    arguments: ['--version', '-v'],
    code: 0,
    output: '0.0.1'
  }
]
