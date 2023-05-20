import express from "express";
import {
  countByCity,
  countByType,
  createPlace,
  deletePlace,
  getPlace,
  getPlaceGuides,
  getPlaces,
  updatePlace,
} from "../controllers/place.js";
import Place from "../models/Place.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createPlace);

//UPDATE
router.put("/:id", verifyAdmin, updatePlace);
//DELETE
router.delete("/:id", verifyAdmin, deletePlace);
//GET

router.get("/find/:id", getPlace);
//GET ALL

router.get("/", getPlaces);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/guide/:id", getPlaceGuides);

export default router;
