import Joi from 'joi';
import mongoose from 'mongoose';

function validateAnonymousOrder(order) {
	return Joi.validate(order, {
		customerName: Joi.string().required(),
		address: Joi.string().required(),
		phoneNumber: Joi.string().min(10).max(10).required(),
		email: Joi.string().required().email(),
		devices: Joi.array()
			.items(
				Joi.object({
					deviceId: Joi.objectId().required(),
					quantity: Joi.number().required(),
				})
			)
			.required(),
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
		},
		email: {
			type: String,
			required: true,
		},
		devices: {
			type: Array,
			required: true,
		},
		isDelivered: {
			type: Boolean,
			required: true,
			default: false,
		},
		isPaid: {
			type: Boolean,
			required: true,
			default: false,
		},
	})
);

export { AnonymousOrder, validateAnonymousOrder };
