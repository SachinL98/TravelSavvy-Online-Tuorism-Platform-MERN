const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
    userID: {type: String},
    name: {type: String, default: "Name"},
    description: {type: String},
    location: {type: String},
    organizerName: {type: String},
    type: {type: String},
    startDate: {type: Date},
    duration: {type: Number},
    image: {type: String}
})

module.exports = mongoose.model("Event", eventSchema);