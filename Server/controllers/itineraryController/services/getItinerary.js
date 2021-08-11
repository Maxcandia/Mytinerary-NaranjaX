const itineraryRepository = require('../../../repositories/itineraryRepository');

const getItineraryByCity = async (req, res) => {
    try {
      const cityId = req.query.cityId;
      const data = await itineraryRepository.getItineraryByCity(cityId);
  
      if (!data) {
        return res.status(401).json({
          ok: false,
          message: ''
        });
      }
    res.status(200).json({
        ok: true,
        itinerary: data,
    });
    } catch (err) {
      res.status(500).json({
        ok: false,
        message: 'Error interno del servidor',
        err
      });
    }
  }

  module.exports = getItineraryByCity;