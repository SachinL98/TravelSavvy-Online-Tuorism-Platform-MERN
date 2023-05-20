const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const trainSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    startStation: {type: String, required: true},
    endStation: {type: String, required: true},
    startTime: {type: Number, required: true},
    endTime: {type: Number, required: true},
    imageLink: {type: String},
})

const Train = mongoose.model("Train", trainSchema);
module.exports = Train; //export schema