import Joi from 'joi';
import mongoose from 'mongoose';

function validateAnonymousOrder(order) {
	return Joi.validate(order, {
		customerName: Joi.string().required(),
		address: Joi.string().required(),
		phoneNumber: Joi.string().min(10).max(10).required(),
		email: Joi.string().required().email(),
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
		},
		email: {
			type: String,
			required: true,
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
				imageUrl: {
					type: String,
					required: true,
				},
			}),
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
