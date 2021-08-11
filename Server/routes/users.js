const express = require ('express');
const router = express.Router();
const userController = require('../controllers/userController/userController');
const validator = require('../utils/validator');
const Joi = require('joi');


router.post('/register',validator.body(Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required() ,
    mail:Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    userPic: Joi.string() ,
    country: Joi.string() 
})), userController.postUsers);

router.post('/login', validator.body(Joi.object({
    mail:Joi.string().email().required(),
    password: Joi.string().min(5).required()
})), userController.login);


module.exports = router;