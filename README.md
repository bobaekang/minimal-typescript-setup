> 📢 NOTE: If your goal is to simply learn and play with TypeScript, which is what this repo was created to facilitate, **just use [Deno](https://deno.land/)** 🦕. Deno is a new JavaScript runtime that supports TypeScript out of the box, ships as a single executable, has built-in support for linting, formatting and testing, and offers even more!

# Minimal TypeScript project setup for curious minds

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository contains a simple setup for Node.js project with TypeScript. Feel free to take a look around the source code and step-by-step commit history, clone and fork the repo to try it out, and [open Issues](https://github.com/bobaekang/minimal-typescript-setup/issues) to share your suggestions for improvements.

Please refer to [this blog post](https://bobaekang.com/blog/minimal-typescript-project-setup-for-curious-minds/) for a detailed explanation.

## Project setup

```shell
git clone https://github.com/bobaekang/minimal-typescript-setup.git
cd minimal-typescript-setup

npm install
```

## Project structure

```
/
/dist   <- compiled JavaScript code goes here
/src    <- TypeScript source code lives here
/test   <- test files (**.test.ts) live     here
```

## Main dependencies

* [TypeScript](https://www.typescriptlang.org/)
* [`ts-node`](https://github.com/TypeStrong/ts-node) for development server
* [ESLint](https://eslint.org/) for linting
* [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint) for ESLint plugins to support TypeScript
* [Prettier](https://prettier.io/) for formatting source code
* [Mocha](https://mochajs.org/) for testing

## npm scripts

npm script | description
--- | ---
`build` | Compile TypeScript source code to JavaScript
`lint` | Typecheck, lint and format TypeScript source code
`serve` | Run TypeScript source code directly with `ts-node`
`start` | Run compiled JavaScript code
`test` | Run tests with Mocha

## License

[MIT](./LICENSE)
