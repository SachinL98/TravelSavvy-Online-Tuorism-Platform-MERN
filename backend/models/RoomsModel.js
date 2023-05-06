const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  maxPeople: {
    type: Number,
    default: false,
  },
  roomNumbers:[{
    number:Number,
    unavailableDates : {type:[Date]}
  }],
},{timestamps:true});

module.exports = mongoose.model("Room", RoomSchema);
