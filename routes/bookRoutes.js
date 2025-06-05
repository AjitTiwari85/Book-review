import express from "express";
import auth from "../middlewares/auth.js";
import {
  addBook,
  getBooks,
  getBookById,
  searchBooks,
} from "../controllers/bookController.js";

const router = express.Router();
router.post("/books", auth, addBook);
router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.get("/search", searchBooks);
export default router;
