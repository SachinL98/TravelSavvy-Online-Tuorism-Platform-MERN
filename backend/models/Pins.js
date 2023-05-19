const mongoose = require("mongoose");
const pinsSchema = new mongoose.Schema({
    userID: {type: String},
    title: {type: String},
    lat: {type: Number},
    long: {type: Number}
},
    {timestamps: true})

module.exports = mongoose.model("Pin", pinsSchema);