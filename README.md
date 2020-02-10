# Feedback Platform

This is a monorepo which contains multiple packages:

- [@feedback/server](./packages/server/README.md)
- [@feedback/web](./packages/web/README.md)

## Setup

Make sure you have `yarn` installed globally:

```
brew install yarn --without-node
```

Install dependencies and start the application:

```
yarn install
yarn bootstrap
yarn start
```

or using `docker`:

```
docker-compose build
docker-compose up

# when setup is done (check terminal)
# web ui is available on localhost:9000
# by default it will preload 10 feedback items
```

## Development

This will test all packages and also builds all packages:

```
yarn test
yarn build
```

To start the application locally:

```
yarn start
```

## Useful Docs

- [Why Monorepo?](./docs/DEV_MONOREPO.md)
- [Common Tooling](./docs/DEV_TOOLING.md)
- [Testing Approach](./docs/DEV_TESTING.md)
- [Type Safety](./docs/DEV_TYPES.md)
- [API](./docs/DEV_API.md)
