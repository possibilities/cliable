# Cliable [![Build Status](https://travis-ci.org/possibilities/cliable.svg?branch=master)](https://travis-ci.org/possibilities/cliable)

Opinionated helpers for defining command line interfaces in a declarative way. Everything is optional.

## Install

```
npm install --save cliable
```

## API

This is the entire API. Pass your spec to this function and it will wire everything together for you.

### `buildCommandLineInterface(AppSpec)`

## Types

### `AppSpec`

`command` _type: [CommandSpec](#commandspec), optional_

  A command declaration. Useful for simple, single action, applications. The command is run if all required options are present. The value is a [CommandSpec](#commandspec).

`commands` _type: object, optional_

  An array of command declarations. Useful for more complicated that must be invoked with a command name, e.g. `fire-starter strike`. Each key defines a command by name and the corresponding value is a [CommandSpec](#commandspec).

TODO `defaultConfigPath` _type: string, optional_

  A path, relative the the users's home directory, where the user's config file can be found. Config can be JS, YAML, or JSON.

TODO `configKey` _type: string, optional_

  Allows an end user to override the default config file path. Defaults to 'config'. Passed through to [yargs#config](https://github.com/yargs/yargs#config).

TODO `enableEnvVars` _type: boolean, optional_

  A boolean value to enable/disable inclusion of environment variables in app state. Uses [yargs#env](https://github.com/yargs/yargs#envprefix).

TODO `envVarsPrefix` _type: string, optional_

  An app specific environment variable prefix that will be used to match environment variables for inclusion in app state. Uses [yargs#env](https://github.com/yargs/yargs#envprefix).

TODO `sideEffectProcessors` _type: object, optional_

  An object where the keys are side effect names and values are functions that know how to process the side effect named by the key. See [SideEffect](#sideeffect).

### `CommandSpec`

`name` _type: string, required_

  The name of the command and any positional arguments. Passed through to [`yargs#command`](https://github.com/yargs/yargs#commandcmd-desc-builder-handler).

`description` _type: string, optional_

  A description of the command used when showing help text. Passed through to [`yargs#command`](https://github.com/yargs/yargs#commandcmd-desc-builder-handler).

`options` _type: object, optional_

  An object describing the command command's options. Passed through to [`yargs#command`](https://github.com/yargs/yargs#commandcmd-desc-builder-handler).

`handler` _type: array[function], required_

  A list of functions should be run by the command. The functions are expected to return a list of lightweight side effect objects that are processed by one the `sideEffectProcessors`. See [SideEffect](#sideeffect).

TODO `dependencyResolvers` _type: object, optional_

  An object where the keys are resolve names and values are functions that know how to obtain the required data.

### TODO `SideEffect`

`type` _type: string, required_

The type of `sideEffectProcessors` that is needed to process process the side effect.

`payload` _type: object, optional_

Any data needed to describe the side effect.
