const Joi = require('joi');
const mongoose = require('mongoose');

function validateLaptop(laptop) {
	return Joi.validate(laptop, {
		name: Joi.string().required(),
		price: Joi.number().min(0).required(),
		CPU: Joi.string().required(),
		RAM: Joi.string().required(),
		hard_disk: Joi.string().required(),
		graphic_card: Joi.string().required(),
		monitor: Joi.string().required(),
		OS: Joi.string().required(),
		battery: Joi.string().required(),
		numberInStock: Joi.number().min(0).required(),
	});
}

const Laptop = mongoose.model(
	'Laptop',
	new mongoose.Schema({
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
			min: 0,
		},
		CPU: {
			type: String,
			required: true,
		},
		RAM: {
			type: String,
			required: true,
		},
		hard_disk: {
			type: String,
			required: true,
		},
		graphic_card: {
			type: String,
			required: true,
		},
		monitor: {
			type: String,
			required: true,
		},
		OS: {
			type: String,
			required: true,
		},
		battery: {
			type: String,
			required: true,
		},
		numberInStock: {
			type: Number,
			required: true,
			min: 0,
		},
	})
);

module.exports.Laptop = Laptop;
module.exports.validate = validateLaptop;
