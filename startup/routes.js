import express from 'express';
import error from './../middleware/error';
import devices from './../routes/devices';
import anonymousOrder from './../routes/anonymousOrders';

export default function (app) {
	app.use(express.json());
	app.use(error);
	app.use('/api/devices', devices);
	app.use('/api/orders/anonymous', anonymousOrder);
}
