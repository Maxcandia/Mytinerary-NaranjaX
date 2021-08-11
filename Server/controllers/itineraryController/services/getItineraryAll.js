const itineraryRepository = require('../../../repositories/itineraryRepository');

const getItineraryAll = async (req, res) => {
    try {
        const data = await itineraryRepository.getItineraryAll()
        const count = await itineraryRepository.count()
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