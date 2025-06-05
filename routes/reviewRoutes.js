import express from "express";
import auth from "../middlewares/auth.js";
import {
  addReview,
  updateReview,
  deleteReview,
} from "../controllers/reviewController.js";

const router = express.Router();
router.post("/books/:id/reviews", auth, addReview);
router.put("/reviews/:id", auth, updateReview);
router.delete("/reviews/:id", auth, deleteReview);
export default router;
