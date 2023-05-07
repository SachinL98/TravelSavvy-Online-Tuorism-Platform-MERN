const express = require("express");
const Hotel = require("../models/HotelModel");
const Room = require('../models/RoomsModel')

const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();

    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json("error");
  }
};

const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json("error");
  }
};

const deleteHotel = async (req, res) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedHotel);
  } catch (err) {
    res.status(500).json("error");
  }
};

const getAllHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

const getOneHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

const countByCity = async (req, res) => {
  const cities = req.query.cities.split(",");

  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json("error");
  }
};

const countByType = async (req, res) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
    const villaCount = await Hotel.countDocuments({ type: "Villa" });
    const apartmentsCount = await Hotel.countDocuments({ type: "apartment" });
    const resortsCount = await Hotel.countDocuments({ type: "resort" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "villa", count: villaCount },
      { type: "apartment", count: apartmentsCount },
      { type: "resort", count: resortsCount },
    ]);
  } catch (err) {
    res.status(500).json("error");
  }
};

const getFeaturedHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find(req.query).limit(3);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const roomsList = await Promise.all(hotel.rooms.map(room=>{
      return Room.findById(room)
    }))

    res.status(200).json(roomsList)
  } catch (err) {
    next(err);
  }
};

const getHotelByUser = async (req, res, next) => {
  try {
    const hotels = await Hotel.find({userID:req.params.id})
    
    res.status(200).json(hotels)
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createHotel,
  updateHotel,
  deleteHotel,
  getAllHotels,
  getOneHotel,
  countByCity,
  countByType,
  getFeaturedHotels,
  getHotelRooms,
  getHotelByUser,
};
