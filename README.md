<br/>

<p align="center">
  <a href="https://explore.lux.network/">
    <picture>
      <img alt="Lux Logo" src="https://avatars.githubusercontent.com/u/86858755?s=200&v=4" width="auto" height="60">
    </picture>
</a>
</p>

<h1 align="center">Consumer SDKs</h1>
<p align="center">
  This is an official Lux monorepo for JavaScript/TypeScript SDKs and tools.
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

- `@luxfi/core`: Lux Network JavaScript SDK.
- `@luxfi/vm-parser`: Parse arbitrary VM data for display in the Lux Network Explorer.

#### Internal Packages

> These packages are only used internally within this repo

- `@luxfi/tsconfig`: tsconfig for sdks
- `@luxfi/tsupp-config`: tsup for sdks
- `@luxfi/eslint-config`: eslint config for sdks
- `@luxfi/github-actions`: github actions for sdks

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Useful commands

- `pnpm build` - Build all packages
- `pnpm dev` - Develop all packages
- `pnpm lint` - Lint all packages
- `pnpm changeset` - Generate a changeset. See in #versioning-and-publishing-packages

## Versioning and Publishing packages

Package publishing has been configured using [Changesets](https://github.com/changesets/changesets). Please review their [documentation](https://github.com/changesets/changesets#documentation) to familiarize yourself with the workflow.

This repo has an automated npm releases setup in a [GitHub Action](https://github.com/changesets/action) using the [Changesets bot](https://github.com/apps/changeset-bot).

## Contributing

If you're interested in contributing, please read the [contributing docs](/.github/CONTRIBUTING.md) **before submitting a pull request**.
