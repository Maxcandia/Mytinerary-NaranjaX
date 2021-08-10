const cityRepository = require('../../../repositories/cityRepository');


const getCities = async (req, res) => {
    try {
        const data = await cityRepository.getAll()
        const count = await cityRepository.count()
        res.status(200).json({
            ok: true,
            response: data,
            total: count
        })  
    } catch(error) {
        res.status(500).json({
            ok:false,
            message:  'Error Interno del Servidor',
            error
        })
    }
}    


module.exports = getCities;