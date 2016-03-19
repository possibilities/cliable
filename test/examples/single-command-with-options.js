// Test examples

module.exports = [
  {
    description: 'Running default command without required option',
    code: 1,
    output: `
COMMAND [options]

Options:
  --help, -h     Show help  [boolean]
  --version, -v  Show version  [boolean]
  --foo, -f      Foo option  [string] [required]

Missing required argument: foo
`
  },

  {
    description: 'Showing help message',
    arguments: [
      '--help',
      '-h'
    ],
    code: 0,
    output: `
COMMAND [options]

Options:
  --help, -h     Show help  [boolean]
  --version, -v  Show version  [boolean]
  --foo, -f      Foo option  [string] [required]
`
  },

  {
    description: 'Running default command with the required option',
    arguments: ['--foo bar'],
    code: 0,
    output: 'Running default with option: bar'
  },

  {
    description: 'Showing version message',
    arguments: ['--version', '-v'],
    code: 0,
    output: '0.0.1'
  }
]
