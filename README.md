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

## Regenerating templated docs (Radar engineers only)

Some of our content is auto-generated by templates, such as our chains directory. In order to regenerate these parts of the documentation, run `npm run regenerate-templated-docs`.

## Deployment

Deployments to GitHub pages and Vercel run automatically when pull requests are merged into the `main` branch. Vercel preview links will be generated automatically with each verified commit and pull request.

## `vercel.json`

The `vercel.json` file defines [project configuration settings](https://vercel.com/docs/cli#project-configuration) for deployments on Vercel.

### The `redirects` and `rewrites` rules

The existing `redirects` and `rewrites` rules defined in `vercel.json` enable the [Docusaurus `baseUrl`](https://docusaurus.io/docs/api/docusaurus-config#baseurl) to work properly on Vercel.

## GitHub Pages Considerations

- Docusaurus caches compiled assets. If you make a change to the config file (e.g. changing `baseUrl`), you'll need to run `npm run clear` before building or your `urls()` may not update appropriately.
