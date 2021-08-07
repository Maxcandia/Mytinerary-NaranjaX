const cityRepository = require('../../../repositories/cityRepository');


const createCity = async (req, res) => {
    try {
        const cities = await cityRepository.getAll()
        if(!cities.find(c =>c.name === req.body.name && c.country === req.body.country)){
            const data = await cityRepository.createCity({
                name: body.name,
                country: body.country,
                img:  body.img
            })
            return res.status(201).json({
                ok: true,
                city:data
            })
        } 
        res.status(400).json({
            ok: false,
            message: "Ya existe una ciudad con ese nombre"
        })


    }catch(error){
        res.status(500).json({
            ok: false,
            message: "Error Interno del Servidor",
            error
        }) 
    }

}

module.exports = createCity;