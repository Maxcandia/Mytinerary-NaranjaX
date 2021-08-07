const cityRepository = require('../../../repositories/cityRepository');


const getCity = async (req, res) => {
    try{
        const id = req.params.id
        const data = await cityRepository.getOne(id)
        if(!data){
            return  res.status(404).json({
             ok:false,
             message:  'City not found',  
            })    
        }
        return res.status(200).json({
            ok: true,
            city: data
        })
    } catch(error){
        res.status(500).json({
            ok:false,
            message:  'Error Interno del Servidor',
            error
        })
    }
}

module.exports = getCity;