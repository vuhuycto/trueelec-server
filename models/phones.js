const Joi = require('joi');
const mongoose = require('mongoose');

function validatePhone(phone) {
	return Joi.validate(phone, {
		name: Joi.string().required(),
		price: Joi.number().min(0).required(),
		monitor: Joi.string().required(),
		front_camera: Joi.string(),
		back_camera: Joi.string(),
		RAM: Joi.string().required(),
		internal_storage: Joi.string().required(),
		external_storage_card: Joi.string(),
		CPU: Joi.string().required(),
		GPU: Joi.string().required(),
		OS: Joi.string().required(),
		SIM_card: Joi.string().required(),
		battery: Joi.string().required(),
		numberInStock: Joi.number().min(0).required(),
	});
}

const Phone = mongoose.model(
	'Phone',
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
		monitor: {
			type: String,
			required: true,
		},
		front_camera: {
			type: String,
		},
		back_camera: {
			type: String,
		},
		RAM: {
			type: String,
			required: true,
		},
		internal_storage: {
			type: String,
			required: true,
		},
		external_storage_card: {
			type: String,
		},
		CPU: {
			type: String,
			required: true,
		},
		GPU: {
			type: String,
			required: true,
		},
		OS: {
			type: String,
			required: true,
		},
		SIM_card: {
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

module.exports.Phone = Phone;
module.exports.validate = validatePhone;
