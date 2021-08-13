const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController/userController');
const validator = require('../utils/validator');
const Joi = require('joi');
const passport = require('passport');


router.post('/signup', validator.body(Joi.object({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(5).required(),
    userPic: Joi.string(),
    country: Joi.string()
})), userController.postUsers);

router.post('/signin', validator.body(Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required()
})), userController.login);

router.get('/signinls', passport.authenticate('jwt', { session: false }), userController.signinls);

module.exports = router;