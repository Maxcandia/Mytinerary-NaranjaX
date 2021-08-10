const { request } = require('express');
const express = require ('express');
const router = express.Router();
const cityModel = require('../models/cityModel');
const cityController = require('../controllers/cityController/cityController');
router.get ('/test', (req, res) => {
    
    res.send ({msg: 'Ruta de prueba de ciudades.'})
})

router.get ('/cities', cityController.getCities );
router.get('/city', cityController.getCityByQuery);  
router.get ('/:id', cityController.getCity);
router.post('/', cityController.createCity);    



module.exports = router;