const express = require ('express');
const passport = require('passport');
const router = express.Router();
const itineraryController = require('../controllers/itineraryController/itineraryController');
const validator = require('../utils/validator');
const joi = require('joi');

router.post('/:id', passport.authenticate('jwt', { session: false }), validator.body(joi.object({
    text: joi.string().required(),
})), itineraryController.addComment);

router.put('/:id', passport.authenticate('jwt', { session: false }), validator.body(joi.object({
    text: joi.string().required(),
})), itineraryController.editComment);

router.delete('/:id', passport.authenticate('jwt', { session: false }), itineraryController.deleteComment);


module.exports = router;
