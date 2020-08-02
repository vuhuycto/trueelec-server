const express = require('express');
const { Phone, validate } = require('./../models/phones');
const validateObjectId = require('./../middleware/validateObjectId');
const router = express.Router();

router.get('/', async (req, res) => {
	const phones = await Phone.find();
	res.send(phones);
});

router.get('/:id', validateObjectId, async (req, res) => {
	const phone = await Phone.findById(req.params.id);
	if (!phone)
		return res.status(404).send(`There is no phone with id ${req.params.id}`);
	res.send(phone);
});

router.post('/', async (req, res) => {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const phone = await new Phone({ ...req.body });
	phone.save();

	res.send(phone);
});

module.exports = router;
