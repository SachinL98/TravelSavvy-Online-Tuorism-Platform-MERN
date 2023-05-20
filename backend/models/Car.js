const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  image: { type: String },
  isFavorite: { type: String },
  price: { type: Number, required: true },
  oldPrice: { type: Number, required: true },
  seats: { type: Number, required: true },
  transition: { type: String, required: true },
  fuel: { type: Number, required: true },
  image1: { type: String },
  image2: { type: String },
  image3: { type: String },
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car; //export schema
