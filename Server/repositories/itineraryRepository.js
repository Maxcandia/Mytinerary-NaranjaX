const Itinerary = require('../models/itineraryModel');

const getItineraryAll = async () => Itinerary.find()
const getItineraryByCity = async cityId => Itinerary.find({cityId});
const getById = async id => Itinerary.findById(id);

module.exports = {
    getItineraryByCity,
    getItineraryAll,
    getById
}
