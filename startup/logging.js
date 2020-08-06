import winston from 'winston';
import config from 'config';
import winstonMongoDB from 'winston-mongodb';
import expressAsyncErrors from 'express-async-errors';

export default function () {
	process.on('unhandledRejection', (ex) => {
		throw ex;
	});

	winston.handleExceptions(
		new winston.transports.Console({ colorize: true, prettyPrint: true }),
		new winston.transports.File({ filename: 'uncaughtExceptions.log' })
	);

	winston.add(winston.transports.File, { filename: 'logfile.log' });
	winston.add(winston.transports.MongoDB, {
		db: config.get('db'),
		level: 'error',
	});
}
