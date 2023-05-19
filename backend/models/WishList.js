const mongoose = require("mongoose");
const wishListSchema = new mongoose.Schema({
    userID: {type: String},
    event: {type: Object}
})

module.exports = mongoose.model("WishList", wishListSchema);