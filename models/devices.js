import Joi from 'joi';
import mongoose from 'mongoose';

function validateDevice(device) {
	return Joi.validate(device, {
		name: Joi.string().required(),
		price: Joi.number().min(0).required(),
		vendor: Joi.string().required(),
		details: Joi.array().required(),
		category: Joi.string().required(),
		numberInStock: Joi.number().min(0).required(),
		filename: Joi.string().required(),
	});
}

const Device = mongoose.model(
	'Device',
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
		vendor: {
			type: String,
			required: true,
		},
		details: {
			type: Array,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		numberInStock: {
			type: Number,
			required: true,
			min: 0,
		},
		image: {
			type: Object,
			required: true,
		},
	})
);

export { Device, validateDevice };
