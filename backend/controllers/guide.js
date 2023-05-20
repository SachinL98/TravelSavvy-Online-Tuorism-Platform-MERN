import Guide from "../models/Guide.js";
import Place from "../models/Place.js";
import { createError } from "../utils/error.js";

export const createGuide = async (req, res, next) => {
  const placeId = req.params.placeid;
  const newGuide = new Guide(req.body);

  try {
    const savedGuide = await newGuide.save();
    try {
      await Place.findByIdAndUpdate(placeId, {
        $push: { guides: savedGuide._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedGuide);
  } catch (err) {
    next(err);
  }
};

export const updateGuide = async (req, res, next) => {
  try {
    const updatedGuide = await Guide.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedGuide);
  } catch (err) {
    next(err);
  }
};
export const updateGuideAvailability = async (req, res, next) => {
  try {
    await Guide.updateOne(
      { "guideNumbers._id": req.params.id },
      {
        $push: {
          "guideNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Guide status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteGuide = async (req, res, next) => {
  const placeId = req.params.placeid;
  try {
    await Guide.findByIdAndDelete(req.params.id);
    try {
      await Place.findByIdAndUpdate(placeId, {
        $pull: { guides: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Guide has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getGuide = async (req, res, next) => {
  try {
    const guide = await Guide.findById(req.params.id);
    res.status(200).json(guide);
  } catch (err) {
    next(err);
  }
};
export const getGuides = async (req, res, next) => {
  try {
    const guides = await Guide.find();
    res.status(200).json(guides);
  } catch (err) {
    next(err);
  }
};
