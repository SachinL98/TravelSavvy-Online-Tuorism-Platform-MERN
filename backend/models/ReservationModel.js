const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  userID: {
    type: String,
    require: true,
  },
  userEmail: {
    type: String,
    require: true,
  },
  userFname: {
    type: String,
    require: true,
  },
  userMobile: {
    type: String,
    require: true,
  },
  selectedRooms: {
    type: [String],
    require: true,
  },
  startDate: {
    type: String,
    require: true,
  },
  endDate: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
