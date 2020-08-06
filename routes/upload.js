import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
	if (!req.files) return res.status(400).send('File is required');

	const image = req.files.file;

	image.mv('assets/' + image.name, function (err) {
		if (err) return res.status(500).send(err);

		res.send('File uploaded!');
	});
});

export default router;
