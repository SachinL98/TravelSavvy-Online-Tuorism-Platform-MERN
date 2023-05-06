const express = require('express');
const { updateRoom, createRoom, deleteRoom, getAllRoom, getOneRoom } = require('../controllers/roomController');
const router = express.Router()



//CREATE
router.post('/:hotelid',createRoom);

//UPDATE
router.put('/:id',updateRoom);
  
//DELETE
router.delete('/:id/:hotelid',deleteRoom);

//GET All
router.get('/',getAllRoom);

//GET ONE
router.get('/:id',getOneRoom);


module.exports = router