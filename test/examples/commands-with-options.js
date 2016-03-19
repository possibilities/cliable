module.exports = [
  {
    description: 'Running command with option',
    arguments: ['command-foo --foo bar'],
    code: 0,
    output: 'Running command foo with app option: bar'
  },

  {
    description: 'Running command without option',
    arguments: ['command-foo'],
    code: 1,
    output: `
COMMAND command-foo

Options:
  --help, -h     Show help  [boolean]
  --version, -v  Show version  [boolean]
  --foo, -f      Foo option  [string] [required]

Missing required argument: foo
`
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
    description: 'Viewing version',
    arguments: ['--version', '-v'],
    code: 0,
    output: '0.0.1'
  }
]
