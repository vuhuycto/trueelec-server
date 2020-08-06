import Fawn from 'fawn';
import winston from 'winston';
import mongoose from 'mongoose';
import config from 'config';

const trimQuotes = (str) =>
	str.indexOf('"') !== -1 ? str.slice(1, str.length - 1) : str;

export default function () {
	const db = trimQuotes(config.get('db'));
	mongoose
		.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
		.then(() => {
			winston.info(`Connected to ${db}`);
			Fawn.init(mongoose);
		});
}
