# CLI helpers

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

* `commands` _type: [CommandSpec](#commandspec), optional_

  An array of command declarations. Some values are used to wire together the CLI (see below) and the rest are passed through to [`yargs#command`](https://github.com/yargs/yargs#commandcmd-desc-builder-handler). See [CommandSpec](#commandspec) documentation below.

* `appOptions` _type: object, optional_

  An object containing declarations for options that can be used when the app is run without any command specified. The key are strings representing option names and the corresponding values are objects describing the option. Passed through to [`yargs#options`](https://github.com/yargs/yargs#optionskey-opt).

* `defaultConfigPath` _type: string, optional_

  A path, relative the the users's home directory, where the user's config file can be found. Config can be YAML, JS, or JSON.

* `configKey` _type: string, optional_

  Allows an end user to override the default config file path. Passed through to [yargs#config](https://github.com/yargs/yargs#config).

* `enableEnvVars` _type: boolean, optional_

  A boolean value to enable/disable inclusion of environment variables in app state. Uses [yargs#env](https://github.com/yargs/yargs#envprefix).

* `envVarsPrefix` _type: string, optional_

  An app specific environment variable prefix that will be used to match environment variables for inclusion in app state. Uses [yargs#env](https://github.com/yargs/yargs#envprefix).

* `commandHandlers` _type: object, required_

  An object where the keys are command names and values are functions that receive CLI input and the resolved dependencies. It is responsible for returning an array of objects representing any side-effects the command should cause.

* `dependencyResolvers` _type: object, optional_

  An object where the keys are resolve names and values are functions that know how to obtain the required data.

* `sideEffectProcessors` _type: object, optional_

  An object where the keys are side effect names and values are functions that know how to process the side effect.

* `appDependencies` _type: array[string], optional_

  A list of names from `dependencyResolvers` that need to be loaded when the CLI is run with or without a command present. This useful for smaller apps where commands are not needed or when there is a dependency that should be resolved for every command.

* `appCommands` _type: array[string], optional_

  If list of names from `commandHandlers` that will be called when the CLI is run with or without a command present. This is useful for smaller apps where commands are not needed or when there is a process that should run before every command.

### `CommandSpec`

* `name` _type: string, required_

  The name of the command and any positional arguments. Passed through to [`yargs#command`](https://github.com/yargs/yargs#commandcmd-desc-builder-handler).

* `description` _type: string, optional_

  A description of the command used when showing help text. Passed through to [`yargs#command`](https://github.com/yargs/yargs#commandcmd-desc-builder-handler).

* `options` _type: object, optional_

  An object describing the command command's options. Passed through to [`yargs#command`](https://github.com/yargs/yargs#commandcmd-desc-builder-handler).

* `resolvers` _type: array[string], optional_

  A list of names from `dependencyResolvers` that need to be loaded by the command.

* `handlers` _type: array[string], required_

  A list of names from `commandHandlers` that need to be run by the command.
