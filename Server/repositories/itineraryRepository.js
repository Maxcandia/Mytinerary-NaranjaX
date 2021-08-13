const Itinerary = require('../models/itineraryModel');

const getItineraryAll = async () => Itinerary.find()
const getItineraryByCity = async cityId => Itinerary.find({cityId});
const getById = async id => Itinerary.findById(id);
const getbyCommentId = async (commentId, userId) => Itinerary.findOne({'comments._id': commentId, 'comments.userId' : userId});

module.exports = {
    getItineraryByCity,
    getItineraryAll,
    getById,
    getbyCommentId
}
