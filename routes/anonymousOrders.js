import Fawn from 'fawn';
import _ from 'lodash';
import express from 'express';
import { Device } from '../models/devices';
import { AnonymousOrder, validateAnonymousOrder } from '../models/orders';
import validateObjectId from '../middleware/validateObjectId';

const router = express.Router();

router.get('/:id', validateObjectId, (req, res) => {});

router.post('/', async (req, res) => {
	const { error } = validateAnonymousOrder(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const device = await Device.findById(req.body.deviceId);
	if (!device) return res.status(400).send('Invalid device');

	const order = await new AnonymousOrder({
		..._.pick(req.body, ['customerName', 'address', 'phoneNumber', 'email']),
		device: _.pick(device, ['_id', 'name', 'price', 'imageUrl']),
	});

	try {
		new Fawn.Task()
			.save('anonymousOrders', order)
			.update('devices', { _id: device._id }, { $inc: { numberInStock: -1 } })
			.run();

		res.send(order);
	} catch (error) {
		res.status(500).send('Something failed');
	}
});

export default router;
