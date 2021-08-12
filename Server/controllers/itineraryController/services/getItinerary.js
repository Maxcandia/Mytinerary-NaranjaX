const itineraryRepository = require('../../../repositories/itineraryRepository');
const { createSuccessResponse, createErrorResponse } = require('../../../utils/responses');

const getItineraryByCity = async (req, res) => {
    try {
      const cityId = req.params.cityId;
      const data = await itineraryRepository.getItineraryByCity(cityId);
  
      if (!data) {
        return res.status(401).json(createErrorResponse(''));
      }
    res.status(200).json(createSuccessResponse(data));
    } catch (err) {
      res.status(500).json(createErrorResponse(err));
    }
  }

  module.exports = getItineraryByCity;