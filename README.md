# Decentralized Web Node (DWN) SDK

Code Coverage

![Statements](https://img.shields.io/badge/statements-71.96%25-red.svg?style=flat) ![Branches](https://img.shields.io/badge/branches-62.31%25-red.svg?style=flat) ![Functions](https://img.shields.io/badge/functions-65.11%25-red.svg?style=flat) ![Lines](https://img.shields.io/badge/lines-73.72%25-red.svg?style=flat)



## Introduction

This repository contains a reference implementation of Decentralized Web Node (DWN) as per the [specification](https://identity.foundation/decentralized-web-node/spec/). This specification is in a draft state and very much so a WIP. For the foreseeable future, a lot of the work on DWN will be split across this repo and the repo that houses the specification, which you can find [here](https://github.com/decentralized-identity/decentralized-web-node). The overall goal is to produce a v1.0 specification along with a reference implementation by 07/01/2022. 


Proposals for the specification itself should be submitted as pull requests to the [spec repo](https://github.com/decentralized-identity/decentralized-web-node). Similarly, issues pertaining to the specification itself should be submitted as github issues to the [spec repo](https://github.com/decentralized-identity/decentralized-web-node). 


## [V1.0 Milestone](https://github.com/TBD54566975/dwn-sdk-js/milestone/1)

## Installation
Since this SDK is still in early stages, we haven't yet published to npm. Until then, we suggest using [`npm link`](https://docs.npmjs.com/cli/v8/commands/npm-link) to use this SDK in your own project. Steps:
```bash
# clone this repo somewhere
git clone https://github.com/TBD54566975/dwn-sdk-js.git
# install deps
npm install
# transpile typescript and build bundles
npm run build

# cd into your project dir
cd /path/to/your/project
# first creates a global link, and then links the global installation target into your project's node_modules folder.
npm link ../path/to/where/you/cloned/dwn-sdk-js

# profit
```

## Usage

### nodeJS

- **ESM**
  ```javascript
  import { DWN } from 'dwn-sdk';

  // cool things
  ```

- **CJS**
  ```javascript
  const { DWN } = require('dwn-sdk');

  // cool things
  ```
### Browser:

- **UMD Bundle**
  ```html
  <script type="text/javascript" src="node_modules/dwn-sdk/dist/bundles/bundle.umd.js"></script>
  ```

- **ESM Bundle**
  ```html
  <script type="text/javascript" src="node_modules/dwn-sdk/dist/bundles/bundle.esm.js"></script>
  ```

## Project Resources

| Resource                                   | Description                                                                   |
| ------------------------------------------ | ----------------------------------------------------------------------------- |
| [CODEOWNERS](https://github.com/TBD54566975/dwn-sdk-js/blob/main/CODEOWNERS)                 | Outlines the project lead(s)                                                  |
| [CODE_OF_CONDUCT.md](https://github.com/TBD54566975/dwn-sdk-js/blob/main/CODE_OF_CONDUCT.md) | Expected behavior for project contributors, promoting a welcoming environment |
| [CONTRIBUTING.md](https://github.com/TBD54566975/dwn-sdk-js/blob/main/CONTRIBUTING.md)       | Developer guide to build, test, run, access CI, chat, discuss, file issues    |
| [GOVERNANCE.md](https://github.com/TBD54566975/dwn-sdk-js/blob/main/GOVERNANCE.md)           | Project governance                                                            |
| [LICENSE](https://github.com/TBD54566975/dwn-sdk-js/blob/main/LICENSE)                       | Apache License, Version 2.0                                                   |
