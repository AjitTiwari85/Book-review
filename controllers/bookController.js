import Book from "../models/Book.js";
import Review from "../models/Review.js";

export async function addBook(req, res) {
  const book = await Book.create({ ...req.body, createdBy: req.user });
  res.status(201).json(book);
}

export async function getBooks(req, res) {
  const { author, genre, page = 1, limit = 10 } = req.query;
  const query = {};
  if (author) query.author = new RegExp(author, "i");
  if (genre) query.genre = genre;

  const books = await Book.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));
  res.json(books);
}

export async function getBookById(req, res) {
  const book = await Book.findById(req.params.id);
  const reviews = await Review.find({ book: book._id });
  const avgRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length || 0;

  res.json({ book, avgRating, reviews });
}

export async function searchBooks(req, res) {
  const { q } = req.query;
  const books = await Book.find({
    $or: [{ title: new RegExp(q, "i") }, { author: new RegExp(q, "i") }],
  });
  res.json(books);
}
