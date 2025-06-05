import Review from "../models/Review.js";

export async function addReview(req, res) {
  const { rating, comment } = req.body;
  const existing = await Review.findOne({
    book: req.params.id,
    user: req.user,
  });
  if (existing) return res.status(400).json({ error: "Already reviewed" });

  const review = await Review.create({
    book: req.params.id,
    user: req.user,
    rating,
    comment,
  });
  res.status(201).json(review);
}

export async function updateReview(req, res) {
  const review = await Review.findById(req.params.id);
  if (review.user.toString() !== req.user)
    return res.status(403).json({ error: "Unauthorized" });

  review.rating = req.body.rating ?? review.rating;
  review.comment = req.body.comment ?? review.comment;
  await review.save();
  res.json(review);
}

export async function deleteReview(req, res) {
  const review = await Review.findById(req.params.id);
  if (review.user.toString() !== req.user)
    return res.status(403).json({ error: "Unauthorized" });

  await review.remove();
  res.json({ message: "Review deleted" });
}
