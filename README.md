# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
## Installation

```console
npm install
```

## Local Development

```console
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```

This command is a convenient way to build the website and push to the `gh-pages` branch.

If you need to modify the deploy (e.g. push to a different branch), please check out the [Docusaurus docs on environment variables](https://docusaurus.io/docs/deployment#environment-settings).

## Considerations

- Docusaurus caches compiled assets. If you make a change to the config file (e.g. changing `baseUrl`), you'll need to run `npm run clear` before building or your `urls()` may not update appropriately.
