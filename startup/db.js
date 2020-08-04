const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

const trimQuotes = (str) =>
	str.indexOf('"') !== -1 ? str.slice(1, str.length - 1) : str;

module.exports = function () {
	const db = trimQuotes(config.get('db'));
	mongoose
		.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
		.then(() => winston.info(`Connected to ${db}`));
};
