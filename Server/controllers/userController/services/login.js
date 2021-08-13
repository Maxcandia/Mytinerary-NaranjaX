const key = require('../../../keys');
const jwt = require('jsonwebtoken');
const userRepository = require('../../../repositories/userRepository');
const bcrypt = require('bcrypt');
const { createSuccessResponse, createErrorResponse } = require('../../../utils/responses');

const login = async (req, res) => {
	const user = await userRepository.getUserByEmail(req.body.email)
	if (!user) {
		return res.status(400).json(createErrorResponse('El user con ese email no existe'))
	}
	if (await bcrypt.compare(req.body.password, user.password)) {
		const payload = {
			id: user._id,
			email: user.mail,
			userPic: user.userPic
		};
		const options = { expiresIn: 2592000 };
		return jwt.sign(
			payload,
			key.secretOrKey,
			options,
			(err, token) => {
				if (err) {
					res.json(createErrorResponse('There was an error'));
				} else {
					res.json(createSuccessResponse({ token }));
				}
			}
		);
	}
	res.status(400).json(createErrorResponse('Contraseña incorrecta'));
}

module.exports = login;