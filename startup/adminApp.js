import path from 'path';
import express from 'express';
import adminApp from './../routes/adminApp';

export default function (app) {
	app.use(express.static('./admin-app/public'));
	app.use('/admin-app', adminApp);
}
