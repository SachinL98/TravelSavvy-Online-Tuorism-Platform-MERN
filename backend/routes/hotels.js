const express = require("express");
const router = express.Router();
const {
  createHotel,
  updateHotel,
  getOneHotel,
  getAllHotels,
  deleteHotel,
  countByCity,
  countByType,
  getFeaturedHotels,
  getHotelRooms,
  getHotelByUser,
} = require("../controllers/hotelController");

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);

//GET All
router.get("/", getAllHotels);

//GET ONE
router.get("/find/:id", getOneHotel);


//GET HOTEL COUNT BY CITY
router.get("/countByCity", countByCity);

//GET HOTEL COUNT BY TYPE Eg:Hotel , Villa
router.get("/countByType", countByType);

//GET FEATURED HOTEL FEATURE == TRUE
router.get("/getFeaturedHotels", getFeaturedHotels);

router.get("/room/:id", getHotelRooms);


//GET USERS HOTELS
router.get("/userId/:id", getHotelByUser);

module.exports = router;
