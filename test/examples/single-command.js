module.exports = [
  {
    description: 'Running default command',
    code: 0,
    output: 'Running default'
  },

  {
    description: 'Showing help message',
    arguments: ['--help', '-h'],
    code: 0,
    output: `
EXAMPLE_NAME [options]

Options:
  --help, -h     Show help  [boolean]
  --version, -v  Show version  [boolean]
`
  },

  {
    description: 'Showing version message',
    arguments: ['--version', '-v'],
    code: 0,
    output: '0.0.1'
  }
]
