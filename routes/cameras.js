const express = require('express');
const { Camera, validate } = require('./../models/cameras');
const validateObjectId = require('./../middleware/validateObjectId');
const router = express.Router();

router.get('/', async (req, res) => {
	const cameras = await Camera.find();
	res.send(cameras);
});

router.get('/:id', validateObjectId, async (req, res) => {
	const camera = await Camera.findById(req.params.id);
	if (!camera)
		return res.status(404).send(`There is no camera with id ${req.params.id}`);
	res.send(camera);
});

router.post('/', async (req, res) => {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const camera = await new Camera({ ...req.body });
	camera.save();

	res.send(camera);
});

module.exports = router;
