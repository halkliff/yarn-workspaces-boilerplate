# Yarn Workspaces Boilerplate

An opinionated boilerplate for [Yarn Workspaces](https://yarnpkg.com/features/workspaces).

By downloading / cloning this project, you'll likely save a couple hours of configuration.

---

## Quick Start

Download the entire project from Github, or clone this repository with the name you might want:

`> $ git clone https://github.com/halkliff/yarn-workspaces-boilerplate.git`

_(Optional)_ to start the project with a clean commit tree:

`> $ yarn dlx rimraf ./.git`\
`> $ git init -b main`

### Important!

**Do not forget to change the proper fields in your `package.json` file to your own project name, version, description, authors, contributors, keywords and repository urls!**

---

## Features

* Uses the [Yarn version](https://yarnpkg.com/features/release-workflow) plugin to improve monorepo release workflow
* Uses the `yarn upgrade-interactive` [CLI Command]([https://](https://yarnpkg.com/cli/upgrade-interactive)) plugin to help upgrading dependencies
* Uses [commitlint](https://commitlint.js.org/) to standardize commit messages
* Has a script to allow only the execution of yarn when starting up the project (Credits: [Angular Project](https://github.com/angular/angular/blob/11.0.x/tools/yarn/check-yarn.js))
* Pre-made typescript scripts folder with an example build script and ready-made logging utils (for future application scripts)
* Use of [dotenv](https://github.com/motdotla/dotenv) to manage environment variables in a secure environment (your `.env` files should not be commited to your online repository and are excluded by default in the `.gitignore` file.)

---

## License

[MIT](LICENSE)
