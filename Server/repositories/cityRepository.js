const City  = require('../models/cityModel')
const Itinerary = require('../models/itineraryModel');

const getAll  = async ()  => City.find()
const count = async ()  =>   City.count()
const getOne  = async id  => City.findById(id)
const getCityByName = async name  => City.find({name})
const createCity = async city => {
    const newCity = new City(city)
    return newCity.save()
}
const getItineraryAll = async () => Itinerary.find()
const getItineraryByCity = async cityId => Itinerary.find({cityId});


module.exports  = {
  getAll,
  getOne,
  getCityByName,
  count,
  createCity,
  getItineraryByCity,
  getItineraryAll
}