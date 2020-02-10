# API

The server is implemented using `koa`, `cors` is enabled and has basic security in place (using `helmet` middleware). API is completely **decoupled** from actual SPA, which are only static resources and can be served and deployed separately (using a CDN):

- `/api/v1/*` - API is versioned using nested routes
- `/healthcheck` - a simple output (current uptime) to monitor the API
