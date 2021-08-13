const { request } = require('express');
const express = require ('express');
const router = express.Router();
const cityModel = require('../models/cityModel');
const cityController = require('../controllers/cityController/cityController');
const passport = require('passport');
router.get ('/test', passport.authenticate('jwt',{session: false}), (req, res) => {
    
    res.send ({msg: 'test para jwt'})
})

router.get ('/', cityController.getCities );
router.get('/city', cityController.getCityByQuery);  
router.get ('/:id', cityController.getCity);
router.post('/', cityController.createCity);    



module.exports = router;