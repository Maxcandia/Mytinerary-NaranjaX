const City  = require('../models/cityModel')
const getAll  = async ()  => City.find()
const count = async ()  =>   City.count()
const getOne  = async id  => City.findById(id)
const getCityByName = async name  => City.find({name})
const createCity = async city => {
    const newCity = new City(city)
    return newCity.save()
}

module.exports  = {
  getAll,
  getOne,
  getCityByName,
  count,
  createCity,
 }