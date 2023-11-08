# hrwg.de
This is the mono-repository housing [hrwg.de](https://hrwg.de/).

It is my personal website, which contains information about me and my work.
I also use it to experiment with new technologies and frameworks.

To learn more about the technologies used, check out the [Stack](#stack) section.

## Table of Contents
- [Pre-requisites](#pre-requisites)
- [Workflow](#workflow)
  - [Setup](#setup)
  - [Development](#development)
  - [Test](#test)
  - [Build](#build)
  - [Deployment](#deployment)
- [Stack](#stack)
  - [Node.js](#nodejs)
  - [Mono-repository](#mono-repository)
  - [Frontend](#frontend)
  - [Code Quality](#code-quality)
  - [Bundling](#bundling)
  - [Testing](#testing)
  - [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Pre-requisites
Before starting development, ensure the pre-requisites are met.

**Mandatory:**
- [Node.js](https://nodejs.org/en/) (>= 20.0.0)
- [pnpm](https://pnpm.io/) (>= 8.0.0)

**Recommended:**
- [nx](https://nx.dev/) (>= 17.0.0)

**Optional:**
- [Docker](https://www.docker.com/) (>= 20.0.0)

## Workflow
The following steps outline the workflow from project setup to deployment.

### Setup
Install the dependencies.

```bash
pnpm install
```

### Development
Start the development server.

```bash
pnpm serve
```

You can now access the website at [localhost:4200](http://localhost:4200/).
The source code is located in the `apps/website` directory.

### Test
After adding a feature, run the tests to ensure everything is working as expected.

```bash
pnpm test
```

### Build
Build the website for production.

```bash
pnpm build
# or (if nx is installed globally)
nx build website
```

The resulting build can be run with `pnpm serve:dist`.

Building the project locally is not required, as the project is built automatically on the server.

### Deployment
The website is automatically deployed to the server when a new GitHub release is created.
The release must be tagged with a version number, e.g. `1.0.0`.

To create the Docker image manually, run the following command.

```bash
docker build -f apps/website/Dockerfile -t rherwig/hrwg-website:latest .
# Push the image to Docker Hub (in case of deployment)
docker push rherwig/hrwg-website:latest
```

## Stack
The website is built with the following technologies.

### Node.js
> [**Node.js**](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.

Since I am a JavaScript developer, I chose Node.js for the entire stack so far. Paired with TypeScript, 
it makes for a smooth development experience across backend and frontend. I decided on [pnpm](https://pnpm.io/) as the package manager,
because of its speed and its seamless integration for nx and mono-repositories via [workspaces](https://pnpm.io/workspaces).

In the future, [bun](https://bun.sh/) might be a suitable alternative to speed up the application and get rid of some boilerplate configuration.

### Mono-repository
> [**nx**](https://nx.dev/) - A set of extensible dev tools for monorepos.

Nx is used to manage the mono-repository and to run all the scripts that would usually be run by the package manager.
It provides a lot of useful features, such as dependency graph visualization, code generation and caching to cut down on build times.

I chose a mono-repository over a multi-repository setup, because it allows me to manage all the projects in one place.
At the moment, there is only one project, but I plan to add more in the future, such as a blog or a portfolio, which I will use a CMS for.

### Frontend

> [**qwik**](https://qwik.builder.io/) - A modern web framework using the concept of [resumability](https://qwik.builder.io/docs/concepts/resumable/#resumable-vs-hydration) paired with React-like components.

Qwik is a relatively new framework, which looks a lot like React. It tries to solve the problems of hydration and rehydration by serializing the application state in the DOM.

I am using it to experiment with this new concept and to see if it is a viable alternative to React. Since this is a smaller-scale project,
the comparison does focus more on developer experience than on scalability.

### Code Quality
> [**ESLint**](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

ESLint is used to ensure code quality and consistency across the project. The configuration is custom-made and based on the recommended ESLint ruleset.
The configuration can be found in the `packages/eslint-config` directory.

> [**Prettier**](https://prettier.io/) - An opinionated code formatter.

Since prettier has proven to be faster and more reliable than ESLint for code formatting, it is used for that purpose.
The configuration can be found in the `.prettierrc` file inside the root directory.

### Bundling
> [**Vite**](https://vitejs.dev/) - A fast frontend build tool.

Vite is used to bundle the application for production and to serve it during development.
It is quite fast and easy to set up, which is why I chose it.

I plan on experimenting with other bundlers in the future, such as the upcoming [turbopack](https://turbo.build/pack).

### Testing
> [**Vitest**](https://vitest.dev/) - A Vite-native testing framework.

Vitest is used to run the tests across the project, since it is native to the bundler in use (Vite) and is easy to set up.
Test files will be located side-by-side with the source files, e.g. `src/app.component.ts` and `src/app.component.test.ts`,
to make it easier to find them.

### Deployment
> [**Docker**](https://www.docker.com/) - A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.

The website is shipped using Docker. The Dockerfile is located in the `apps/website` directory.
There is also a `docker-compose.yml` file in the root directory, which can be used to build and run the website locally (mostly for testing purposes).

> [**GitHub Actions**](https://github.com) - A CI/CD tool provided by GitHub.

The website is automatically deployed to the server when a new GitHub release is created.
I chose GitHub Actions over other CI/CD tools, because it is easy to use, well-documented and free for public repositories.
It also limits the amount of tools I have to use, since I am already using GitHub for version control.

## Contributing
Contributions to this project are always welcome, but I somehow doubt that anyone would want to contribute to a personal website.
In case you DO want to do that, have any questions or suggestions, feel free to open an issue.

## License
This project is licensed under the [MIT License](LICENSE).

