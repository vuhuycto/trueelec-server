const express = require('express');
const error = require('./../middleware/error');
const laptops = require('./../routes/laptops');
const phones = require('./../routes/phones');
const cameras = require('./../routes/cameras');
const laptopOrders = require('./../routes/laptopOrders');

module.exports = function (app) {
	app.use(express.json());
	app.use(error);
	app.use('/api/laptops', laptops);
	app.use('/api/phones', phones);
	app.use('/api/cameras', cameras);
	app.use('/api/orders/laptops', laptopOrders);
};
