import Place from "../models/Place.js";
import Guide from "../models/Guide.js";

export const createPlace = async (req, res, next) => {
  const newPlace = new Place(req.body);

  try {
    const savedPlace = await newPlace.save();
    res.status(200).json(savedPlace);
  } catch (err) {
    next(err);
  }
};
export const updatePlace = async (req, res, next) => {
  try {
    const updatedPlace = await Place.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPlace);
  } catch (err) {
    next(err);
  }
};
export const deletePlace = async (req, res, next) => {
  try {
    await Place.findByIdAndDelete(req.params.id);
    res.status(200).json("Place has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getPlace = async (req, res, next) => {
  try {
    const place = await Place.findById(req.params.id);
    res.status(200).json(place);
  } catch (err) {
    next(err);
  }
};
export const getPlaces = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const places = await Place.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(places);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Place.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const attractionCount = await Place.countDocuments({ type: "attraction" });
    const shopCount = await Place.countDocuments({ type: "shop" });
    const spaCount = await Place.countDocuments({ type: "spa" });
    const zooCount = await Place.countDocuments({ type: "zoo" });
    const restaurantCount = await Place.countDocuments({ type: "restaurant" });

    res.status(200).json([
      { type: "attractions", count: attractionCount },
      { type: "shops", count: shopCount },
      { type: "spas", count: spaCount },
      { type: "zoos", count: zooCount },
      { type: "restaurants", count: restaurantCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getPlaceGuides = async (req, res, next) => {
  try {
    const place = await Place.findById(req.params.id);
    const list = await Promise.all(
      place.guides.map((guide) => {
        return Guide.findById(guide);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
