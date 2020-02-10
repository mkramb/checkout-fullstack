#!/usr/bin/env node

// eslint-disable-next-line
/// <reference path="server.d.ts" />

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-pino-logger';
import health from 'koa-simple-healthcheck';
import helmet from 'koa-helmet';
import cors from 'koa2-cors';
import config from './config';
import router from './routes';

const app = new Koa();

app.use(
  cors({
    origin: '*',
    allowMethods: ['GET'],
  })
);

app.use(logger());
app.use(helmet());
app.use(bodyParser());
app.use(router());
app.use(health());

app.listen({
  port: config.port,
  hostname: config.hostname,
});

console.log(`🚀 Server running on: http://${config.hostname}:${config.port}`);
