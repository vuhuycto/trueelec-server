import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import path from 'path';
import fs from 'fs';

import App from './../admin-app/App';

const router = express.Router();

router.get('/', (req, res) => {
	fs.readFile(
		path.resolve('./admin-app/public/index.html'),
		'utf8',
		(err, data) => {
			if (err) {
				console.error(err);
				return res.status(500).send('An error occurred');
			}

			res.set({ 'Set-Cookie': 'HttpOnly;Secure;SameSite=Strict' });
			return res.send(
				data.replace(
					'<div id="root"></div>',
					`<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
				)
			);
		}
	);
});

export default router;
