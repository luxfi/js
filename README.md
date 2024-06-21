<br/>

<p align="center">
  <a href="https://explore.lux.network/">
    <picture>
      <img alt="Lux Logo" src="https://avatars.githubusercontent.com/u/86858755?s=200&v=4" width="auto" height="60">
    </picture>
</a>
</p>

<h1 align="center">Lux JS</h1>
<p align="center">
  This is the official monorepo for Lux JavaScript/TypeScript SDKs and tools.
</p>

## Getting Started 🚀

```sh
pnpm i        # installs all dependencies
pnpm build    # builds all packages
```

## What's inside? 🔍

#### Apps

> These are apps published to the web

- `teleport-demo`: This is a demo of the Lux Teleport cross-chain messaging system for EVM subnets.

#### Packages

> These Packages are published to NPM

- `luxnet`: Lux Network JavaScript SDK.
- `@luxfi/vm-parser`: Parse arbitrary VM data for display in the Lux Network Explorer.

#### Dev Packages

> These packages are only used internally for development

- `@luxfi/tsconfig`: tsconfig for sdks
- `@luxfi/tsupp-config`: tsup for sdks
- `@luxfi/eslint-config`: eslint config for sdks
- `@luxfi/github-actions`: github actions for sdks

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

Please check out the `examples` folder for more info.

### Useful commands

- `pnpm build` - Build all packages
- `pnpm dev` - Develop all packages
- `pnpm lint` - Lint all packages
- `pnpm changeset` - Generate a changeset. See in #versioning-and-publishing-packages

## LuxNet - The Lux Network JavaScript Library

### Overview

LuxNet is a JavaScript Library for interfacing with the Lux Network. It is built using TypeScript and intended to support both browser and Node.js. The LuxNet library allows you to issue commands to the Avalanche node APIs.

Using LuxNet, developers can:

- Retrieve balances on addresses
- Get UTXOs for addresses
- Build and sign transactions
- Issue signed transactions to the X-Chain, P-Chain, and C-Chain
- Perform cross-chain swaps between the X, P and C chains
- Add Validators and Delegators
- Create Subnets and Blockchains

### Requirements

LuxNet requires Node.js LTS version 20.11.1 or higher to compile.

### Installation

### Using the NPM Package

Add LuxNet to your project via `npm` or `yarn`.

For installing via `npm`:

`npm install --save luxnet`

For installing via `yarn`:

`yarn add luxnet`

### Importing Essentials

```ts
import { avm /** X-chain */, pvm /** P-chain */, evm /** C-chain */, utils, secp256k1 } from "luxnet"

// example calls
const exportTx = avm.newExportTx(...) // constructs a new export tx from X
const addValidatorTx = pvm.newAddPermissionlessValidatorTx(...) // constructs a new add validator tx on P
const importTx = evm.newImportTx(...) // constructs a new import tx to C

const publicKeyBytes = utils.hexToBuffer(publicKeyHex)
const signature = secp256k1.signHash(bytes, privateKeyBytes)
```

### Use LuxNet in Projects

The LuxNet library can be imported into your existing project as follows:

```ts
import { avm, pvm, evm } from 'luxnet';
```

## Versioning and Publishing packages

Package publishing has been configured using [Changesets](https://github.com/changesets/changesets). Please review their [documentation](https://github.com/changesets/changesets#documentation) to familiarize yourself with the workflow.

This repo has an automated npm releases setup in a [GitHub Action](https://github.com/changesets/action) using the [Changesets bot](https://github.com/apps/changeset-bot).

## Contributing

If you're interested in contributing, please read the [contributing docs](/.github/CONTRIBUTING.md) **before submitting a pull request**.
