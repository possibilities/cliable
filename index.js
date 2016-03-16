/* global process, require */

import yargs from 'yargs'
import _ from 'underscore'

// Helpers

const commandExists = (specCommands, commandName) => {
  return !_.isEmpty(specCommands) &&
    !_.includes(_.keys(specCommands), commandName)
}

const hasAnyCommandOptions = (specCommands) => {
  if (!specCommands) {
    return false
  }

  return _.any(_.values(specCommands), c => c.options)
}

// Note: second argument is not part of the API (for now at least). Intended
// for testing only.
export default function buildCommandLineInterface(spec, yargsInstance = yargs) {

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
  if (spec.appOptions) {
    yargsInstance.options(spec.appOptions)
  }

  // Calculate usage string based on spec and pass through
  if (spec.commands) {
    if (hasAnyCommandOptions(spec.commands)) {
      yargsInstance.usage('$0 <command> [options]')
    } else {
      yargsInstance.usage('$0 <command>')
    }
  } else {
    yargsInstance.usage('$0 [options]')
  }

  // Build commands
  _.each(spec.commands, (commandSpec, commandName) => {
    const { description, options } = commandSpec
    const command = spec.commandHandlers[commandName]
    yargsInstance.command(commandName, description, options, command)
  })

  // If the command does not exist show help and an error
  const argv = yargsInstance.argv
  const [ commandName ] = argv._
  if (commandExists(spec.commands, commandName)) {
    yargsInstance.showHelp()
    console.error(`Command not found: ${commandName}`)
    process.exit(1)
  }

  // Run any app level commands
  if (spec.appCommands) {
    spec.appCommands.forEach((appCommand) => {
      // TODO handle non-existent app command
      spec.commandHandlers[appCommand](argv)
    })
  }
}
