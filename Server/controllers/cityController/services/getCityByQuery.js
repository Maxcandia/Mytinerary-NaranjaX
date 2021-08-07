const cityRepository = require('../../../repositories/cityRepository');


const getCityByQuery = async (req, res) => {
    try{
        const name = req.query.name  
        const data = await cityRepository.getCityByName(name)
        if(!data){
          return res.status(400).json({
              ok: false,
              message:'City not found'
          })
        }
        return res.status(200).json({
              ok: true,
              cities:data
        })



    } catch{
        res.status(500).json({
            ok: false,
            message: "Error del Servidor"
        })
    }
} 

module.exports  = getCityByQuery;