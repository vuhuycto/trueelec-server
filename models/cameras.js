const Joi = require('joi');
const mongoose = require('mongoose');

function validateCamera(camera) {
	return Joi.validate(camera, {
		name: Joi.string().required(),
		price: Joi.number().min(0).required(),
		sensory: Joi.string(),
		image_processor: Joi.string().required(),
		ISO: Joi.string().required(),
		focus_system: Joi.string().required(),
		shutter_speed: Joi.string().required(),
		connectivity: Joi.string(),
		filming: Joi.string(),
		numberInStock: Joi.number().min(0).required(),
	});
}

const Camera = mongoose.model(
	'Camera',
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
		sensory: {
			type: String,
		},
		image_processor: {
			type: String,
			required: true,
		},
		ISO: {
			type: String,
			required: true,
		},
		focus_system: {
			type: String,
			required: true,
		},
		shutter_speed: {
			type: String,
			required: true,
		},
		connectivity: {
			type: String,
		},
		filming: {
			type: String,
		},
		numberInStock: {
			type: Number,
			required: true,
			min: 0,
		},
	})
);

module.exports.Camera = Camera;
module.exports.validate = validateCamera;
