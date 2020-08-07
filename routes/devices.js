import path from 'path';
import express from 'express';

import { Device, validateDevice } from '../models/devices';
import validateObjectId from './../middleware/validateObjectId';

const router = express.Router();

router.get('/', async (req, res) => {
	const category = req.query.category;

	let devices;
	if (category) devices = await Device.find().where('category', category);
	else devices = await Device.find();

	res.send(devices);
});

router.get('/:id', validateObjectId, async (req, res) => {
	const device = await Device.findById(req.params.id);
	if (!device)
		return res.status(404).send(`There is no Device with id ${req.params.id}`);
	res.send(device);
});

router.post('/', async (req, res) => {
	const { error } = validateDevice(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const device = await new Device({ ...req.body });
	const renamedImageFile = device._id + path.extname(req.body.filename);
	device.set('image', {
		name: renamedImageFile,
		url: '/assets/' + renamedImageFile,
	});
	device.save();

	res.send(device);
});

export default router;
