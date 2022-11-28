////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const mongoose = require('./connection') // we imported mongoose here

const { Schema, model } = mongoose // destructuring, grabbing model and schema off mongoose variable

// make Animals schema
const animalsSchema = new Schema({
  species: String,
  extinct: Boolean,
  location: String,
  lifeExpectancy: Number
})

// make fruit model
const Animal = model("Animal", animalsSchema)

module.exports = Animal