const express = require('express');
const { Laptop, validate } = require('./../models/laptops');
const validateObjectId = require('./../middleware/validateObjectId');
const router = express.Router();

router.get('/', async (req, res) => {
	const laptops = await Laptop.find();
	res.send(laptops);
});

router.get('/:id', validateObjectId, async (req, res) => {
	const laptop = await Laptop.findById(req.params.id);
	if (!laptop)
		return res.status(404).send(`There is no laptop with id ${req.params.id}`);
	res.send(laptop);
});

router.post('/', async (req, res) => {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const laptop = await new Laptop({ ...req.body });
	laptop.save();

	res.send(laptop);
});

module.exports = router;
