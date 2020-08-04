const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

const trimQuotes = (str) =>
	str.indexOf('"') !== -1 ? str.slice(1, str.length - 1) : str;

module.exports = function () {
	const db =
		'mongodb+srv://vuhuycto:quanghuy0211@cluster0.sgpxy.mongodb.net/trueelec?retryWrites=true&w=majority';
	mongoose
		.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
		.then(() => winston.info(`Connected to ${db}`));
};
