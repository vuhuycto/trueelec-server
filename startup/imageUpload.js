import fileUpload from 'express-fileupload';

import imageUpload from '../routes/upload';

export default function (app) {
	app.use(
		fileUpload({
			createParentPath: true,
		})
	);
	app.use('/upload', imageUpload);
}
