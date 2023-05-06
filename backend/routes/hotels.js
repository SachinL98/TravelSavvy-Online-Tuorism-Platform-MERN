const express = require("express");
const router = express.Router();
const {createHotel, updateHotel, getOneHotel, getAllHotels,deleteHotel ,countByCity , countByType,getFeaturedHotels} = require('../controllers/hotelController')





//CREATE
router.post('/',createHotel);

//UPDATE
router.put('/:id',updateHotel);
  
//DELETE
router.delete('/:id',deleteHotel);

//GET All
router.get('/',getAllHotels);

//GET ONE
router.get('/find/:id',getOneHotel);



router.get('/countByCity',countByCity);
router.get('/countByType',countByType);

router.get('/getFeaturedHotels',getFeaturedHotels);



module.exports = router;
