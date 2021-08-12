const { request } = require('express');
const express = require ('express');
const router = express.Router();
const itineraryController = require('../controllers/itineraryController/itineraryController');

router.get('/all', itineraryController.getItineraryAll);
router.get('/:cityId', itineraryController.getItineraryByCity);
router.get('/checkuser/:id', itineraryController.checkUser);


module.exports = router;