const Fawn = require('fawn');
const mongoose = require('mongoose');
const express = require('express');
const { Phone } = require('./../models/phones');
const { AnonymousOrder, validateAnonymous } = require('./../models/orders');
const validateObjectId = require('./../middleware/validateObjectId');
const router = express.Router();

Fawn.init(mongoose);

router.get('/:id', validateObjectId, (req, res) => {});

router.post('/', async (req, res) => {
	const { error } = validateAnonymous(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const phone = await Phone.findById(req.body.deviceId);
	if (!phone) return res.status(400).send('Invalid phone');

	const order = await new AnonymousOrder({
		customerName: req.body.customerName,
		address: req.body.address,
		phoneNumber: req.body.phoneNumber,
		email: req.body.email,
		device: {
			_id: phone._id,
			name: phone.name,
			price: phone.price,
		},
	});

	try {
		new Fawn.Task()
			.save('orders', order)
			.update('phones', { _id: phone._id }, { $inc: { numberInStock: -1 } })
			.run();

		res.send(order);
	} catch (error) {
		res.status(500).send('Something failed');
	}
});

module.exports = router;
