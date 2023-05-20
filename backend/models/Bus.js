const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const busSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    startStation: {type: String, required: true},
    endStation: {type: String, required: true},
    startTime: {type: Number, required: true},
    endTime: {type: Number, required: true},
    imageLink: {type: String},
})

const Bus = mongoose.model("Bus", busSchema);
module.exports = Bus; //export schema