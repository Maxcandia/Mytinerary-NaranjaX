const { request } = require('express');
const express = require ('express');
const router = express.Router();
const itineraryController = require('../controllers/itineraryController/itineraryController');

router.get('/all', itineraryController.getItineraryAll);
router.get('/city', itineraryController.getItineraryByCity);


module.exports = router;