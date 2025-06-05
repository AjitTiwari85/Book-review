import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rating: { type: Number, required: true },
  comment: String,
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;