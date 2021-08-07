const cityRepository = require('../../../repositories/cityRepository');

const getItineraryAll = async (req, res) => {
    try {
        const data = await cityRepository.getItineraryAll()
        const count = await cityRepository.count()
        res.status(200).json({
            ok: true,
            itinerary: data,
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

module.exports = getItineraryAll;