import Joi from 'joi';
import bcrypt from 'bcrypt';
import _ from 'lodash';
import express from 'express';
import { User } from './../models/users';

const router = express.Router();

function validate(request) {
	return Joi.validate(request, {
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(1024).required(),
	});
}

router.post('/', async (req, res) => {
	const { error } = validate(req.body);
	if (error) return res.status(404).send(error.details[0].message);

	let user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send('Invalid email or password');

	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send('Invalid email or password');

	const token = user.generateAuthToken();
	res.send(token);
});

export default router;
