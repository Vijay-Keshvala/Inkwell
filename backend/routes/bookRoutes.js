const express = require('express')
const router = express.Router();
const Book = require('../models/Book')


// Get all books //
router.get('/',async (req,res)=>{
    try {
        const books = await Book.find()
        res.json(books)
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
})


router.get('/test', (req, res) => {
    res.send('Backend working')
  })
  


// Create a book //
router.post('/add-book', async (req, res) => {
    try {
      const { title, author, description, price, category, stock, imageUrl } = req.body;
  
      // Basic validation
      if (!title || !author || !description || !price || !category || stock === undefined) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
      }
  
      if (price <= 0) {
        return res.status(400).json({ success: false, message: 'Price must be greater than 0' });
      }
  
      if (stock < 0) {
        return res.status(400).json({ success: false, message: 'Stock cannot be negative' });
      }
  
      const book = new Book({
        title,
        author,
        description,
        price,
        category,
        stock,
        imageUrl
      });
  
      const savedBook = await book.save();
      res.status(201).json({ success: true, data: savedBook });
  
    } catch (error) {
      console.error('Error creating book:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  });

module.exports = router;
