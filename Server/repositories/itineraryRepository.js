const Itinerary = require('../models/itineraryModel');

const getItineraryAll = async () => Itinerary.find()
const getItineraryByCity = async cityId => Itinerary.find({cityId});

module.exports = {
    getItineraryByCity,
    getItineraryAll
}