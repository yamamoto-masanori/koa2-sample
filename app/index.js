'use strict'

const config = require('config');
import fs from 'fs';
import _debugger from 'debug';
import Koa from 'koa';
import cors from 'koa2-cors';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import koa2Mysql from 'koa2-mysql';
import routes from './routes';

const app = new Koa();

app.use(cors({ origin: true }))
   .use(logger())
   .use(convert(bodyParser({ limit: '10mb' })))
   .use(koa2Mysql)
   .use(routes.routes())
   .use(routes.allowedMethods())
   .listen(config.server.port);
