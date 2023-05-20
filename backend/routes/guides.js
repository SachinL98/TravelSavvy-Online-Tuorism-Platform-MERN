import express from "express";
import {
  createGuide,
  deleteGuide,
  getGuide,
  getGuides,
  updateGuide,
  updateGuideAvailability,
} from "../controllers/guide.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:placeid", verifyAdmin, createGuide);

//UPDATE
router.put("/availability/:id", updateGuideAvailability);
router.put("/:id", verifyAdmin, updateGuide);
//DELETE
router.delete("/:id", verifyAdmin, deleteGuide);
//GET

router.get("/:id", getGuide);
//GET ALL

router.get("/", getGuides);

export default router;
