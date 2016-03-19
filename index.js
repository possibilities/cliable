/* global process, require */

const yargs = require('yargs')
const _ = require('underscore')

// Helpers

// Look inside the command specs to see if any commands exist.
const commandExists = (specCommands, commandName) => {
  return !_.isEmpty(specCommands) &&
    !_.includes(_.keys(specCommands), commandName)
}

// Look inside the command specs to see if any commands have options
const hasAnyCommandOptions = (specCommands) => {
  if (!specCommands) {
    return false
  }

  return _.any(_.values(specCommands), c => c.options)
}

// Note: second argument is not part of the API (for now at least). Intended
// for testing only.
const buildCommandLineInterface = (spec, yargsInstance) => {
  yargsInstance = yargsInstance || yargs

  // Configure help
  yargsInstance
    .help('help')
    .alias('help', 'h')

  // Configure version
  if (spec.version) {
    yargsInstance
      .alias('version', 'v')
      .version('version', 'Show version', spec.version)
  }

  // Pass through app options
  if (spec.command && spec.command.options) {
    yargsInstance.options(spec.command.options)
  }

  // Calculate usage string based on spec and pass through
  // Always show the name of the binary first in the usage message
  var usage = '$0'
  if (spec.commands) {
    // If there are `commands` in play show `<command>` after the binary name
    // to signify that a command is required
    usage += ' <command>'

    // If there are any options in play show `[options]` after `<command>`
    // to signify that they are optional and should be supplied after the
    // command
    if (hasAnyCommandOptions(spec.commands)) {
      usage += ' [options]'
    }

  } else {
    // If there are no commands in play show `[options]` after the binary name
    // to signify that they are optional and should be supplied after the
    // command.
    usage += ' [options]'
  }

  // Give args the built up usage string
  yargsInstance.usage(usage)

  // Build commands
  _.each(spec.commands, (commandSpec, commandName) => {
    commandSpec.handlers.forEach((handler) => {
      yargsInstance.command(
        commandName,
        commandSpec.description,
        commandSpec.options,
        handler
      )
    })
  })

  // If the command does not exist show help and an error
  const argv = yargsInstance.argv
  const commandName = argv._[0]
  if (commandExists(spec.commands, commandName)) {
    yargsInstance.showHelp()
    console.error(`Command not found: ${commandName}`)
    process.exit(1)
  }

  // Run any app level commands
  if (spec.command) {
    spec.command.handlers.forEach((handler) => {
      handler(argv)
    })
  }
}

module.exports = buildCommandLineInterface
