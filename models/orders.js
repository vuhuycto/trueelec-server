const Joi = require('joi');
const mongoose = require('mongoose');

function validateAnonymousOrder(order) {
	return Joi.validate(order, {
		customerName: Joi.string().required(),
		address: Joi.string().required(),
		phoneNumber: Joi.string().min(10).max(10).required(),
		email: Joi.string().required(),
		deviceId: Joi.objectId().required(),
	});
}

const AnonymousOrder = mongoose.model(
	'AnonymousOrder',
	new mongoose.Schema({
		customerName: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
			// validate: /^[0-9]{10}$/,
		},
		email: {
			type: String,
			required: true,
			// validate: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		},
		device: {
			type: new mongoose.Schema({
				name: {
					type: String,
					required: true,
				},
				price: {
					type: Number,
					required: true,
					min: 0,
				},
			}),
			required: true,
		},
		isDelivered: {
			type: Boolean,
			required: true,
			default: false,
		},
	})
);

module.exports.AnonymousOrder = AnonymousOrder;
module.exports.validateAnonymous = validateAnonymousOrder;
