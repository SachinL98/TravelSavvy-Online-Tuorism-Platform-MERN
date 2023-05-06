const express = require("express");
const Hotel = require("../models/HotelModel");
const Room = require("../models/RoomsModel");

const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const saveRoom = await newRoom.save();

    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: saveRoom._id },
      });
    } catch (err) {
      next(err);
    }

    res.status(200).json(saveRoom);
  } catch (err) {
    next(err);
  }
};

const updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedRoom);
  } catch (err) {
    res.status(500).json("error");
  }
};

const deleteRoom = async (req, res) => {

  const hotelId = req.params.hotelid;


  try {
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id},
      });
    } catch (err) {
      next(err);
    }

    res.status(200).json("Delete Room Successfull");
  } catch (err) {
    res.status(500).json("error");
  }
};

const getAllRoom = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    res.status(500).json("error");
  }
};

const getOneRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

module.exports = { getOneRoom, getAllRoom, deleteRoom, updateRoom, createRoom };
