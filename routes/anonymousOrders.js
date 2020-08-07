import _ from 'lodash';
import express from 'express';

import { Device } from '../models/devices';
import { AnonymousOrder, validateAnonymousOrder } from '../models/orders';
import validateObjectId from '../middleware/validateObjectId';
import auth from './../middleware/auth';

const router = express.Router();

async function findDevices(data) {
	const devices = [];

	for (const device of data) {
		const record = await Device.findById(device.deviceId);

		if (!record) return false;
		devices.push({ data: record, quantity: device.quantity });
	}

	return devices;
}

router.get('/:id', [auth, validateObjectId], (req, res) => {});

router.post('/', async (req, res) => {
	const { error } = validateAnonymousOrder(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const devices = await findDevices(req.body.devices);
	if (!devices) return res.status(400).send('Invalid device');

	const order = await new AnonymousOrder({
		..._.pick(req.body, ['customerName', 'address', 'phoneNumber', 'email']),
		devices: devices.map((device) => ({
			..._.pick(device.data, ['_id', 'name', 'price', 'imageUrl']),
			quantity: device.quantity,
		})),
	});

	try {
		order.save();
		for (const device of devices) {
			await Device.findByIdAndUpdate(
				device.data._id,
				{
					$inc: { numberInStock: -1 },
				},
				{ new: true }
			);
		}

		res.send(order);
	} catch (error) {
		res.status(500).send('Something failed');
	}
});

export default router;
