# Website

The JSON Forms documentation website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
npm install
```

## Local Development

```console
npm run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Copy API docs

```console
./copy-docs.sh <jsonforms-folder-location>
```

This command will copy the docs from each package of jsonforms into the `/static/api` folder within this project. 
The command only takes one argument: The relative path to the jsonform location (e.g. `../jsonforms`)

## Build with next text

```console
./build_with_next.sh
```

This command will get the latest preview version of jsonforms on github and display it below the version text on the index page.
