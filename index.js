import winston from 'winston';
import express from 'express';

import imageUpload from './startup/imageUpload';
import cors from './startup/cors';
import config from './startup/config';
import db from './startup/db';
import logging from './startup/logging';
import staticServe from './startup/static';
import routes from './startup/routes';
import adminApp from './startup/adminApp';
import validation from './startup/validation';
import prod from './startup/prod';

const app = express();

cors(app);
config();
db();
logging();
staticServe(app);
routes(app);
imageUpload(app);
adminApp(app);
validation(app);
prod(app);

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
	winston.info(`Listening to port ${port}`);
});

export default server;
