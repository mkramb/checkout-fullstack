# Feedback Server

Server is using a in-memory structure for feedback items storage. When providing environment variable `TEST_ITEMS=<number of items>` it will generate random feedback items, to simulate existing data.

## Setup

Server port can be defined by using `PORT` environment variable e.g.:

```
yarn build
PORT=8080 TEST_ITEMS=10 yarn start
```

## Development

This will run the app in development mode:

```
yarn dev
```

To execute tests:

```
yarn test
yarn test --watch
```
