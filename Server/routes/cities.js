const { request } = require('express');
const express = require ('express');
const router = express.Router();
const cityModel = require('../models/cityModel');

router.get ('/test', (req, res) => {
    
    res.send ({msg: 'Ruta de prueba de ciudades.'})
})

router.get ('/all',  (req, res) => {
    cityModel.find ({})
    .then (data => {
        res.send(data)
    })
    .catch(err => console.log(err));
});       

router.post('/', (req, res) => {
    cityModel.find ({})    
        .then((cities)=>{
            if(!cities.find(c =>c.name === req.body.name && c.country === req.body.country)){
                const newCity = new cityModel({
                    name: req.body.name,
                    country: req.body.country,
                    img:  req.body.img
                })
            
                return newCity.save()
            }
            res.status(400).send("Ya existe una ciudad con ese nombre") 
        })
    
    .then(city => {
          res.send(city)
        })
    .catch (err => {
     res.status(500).send ("Error del servidor")})
        
});    


module.exports = router;