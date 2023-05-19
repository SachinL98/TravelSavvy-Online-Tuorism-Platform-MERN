const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    userID: {type: String, required: true},
    eventID: {type: String, required: true},
    userName: {type: String, required: true},
    rating: {type: Number, required: true},
    reviewData: {type: String, required: true},
    createdAt: {type: Date}
})

module.exports = mongoose.model("Review", reviewSchema);