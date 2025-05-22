const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const upload = require('../middleware/multer');
const mongoose = require('mongoose');

// ✅ Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Get categories (moved before :id route)
router.get('/categories', async (req, res) => {
  try {
    const categories = await Book.distinct('category');
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Search books (moved before :id route)
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ success: false, message: 'Please provide a search query' });
    }

    const books = await Book.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { author: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } },
      ],
    });

    res.status(200).json({ success: true, data: books });
  } catch (error) {
    console.error('Error searching books:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ✅ Get books (optionally filtered by category) — if this isn't used externally, consider removing it
router.get('/books', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const books = await Book.find(filter);
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Health check
router.get('/test', (req, res) => {
  res.send('Backend working');
});

// ✅ Get single book by ID (moved to bottom, and added ID validation)
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid book ID' });
  }

  try {
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error('Error fetching book by ID:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
