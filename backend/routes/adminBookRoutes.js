const express = require('express')
const router = express.Router();
const Book = require('../models/Book')
const upload = require('../middleware/multer')



// Create a book //
router.post('/add-book', upload.single('image'), async (req, res) => {
    try {
        const { title, author, description, price, category, stock } = req.body;
  
        // Validate required fields
        if (!title || !author || !description || !price || !category || stock === undefined) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }
  
        if (price <= 0) {
            return res.status(400).json({ success: false, message: 'Price must be greater than 0' });
        }
  
        if (stock < 0) {
            return res.status(400).json({ success: false, message: 'Stock cannot be negative' });
        }
  
        const imageUrl = req.file?.path || ''; // Get secure image URL from Cloudinary
  
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
  
  

// Update book //
router.put('/update-book/:id',async (req,res)=>{
    try {
      const {id} = req.params;
      const {title, author, description, price, category, stock, imageUrl} = req.body;
      const updatedBook = await Book.findByIdAndUpdate(
        id,
        { title, author, description, price, category, stock, imageUrl },
        { new: true ,runValidators: true }
      )
      res.status(200).json({ success: true, data: updatedBook });
  
      if (!updatedBook) {
        return res.status(404).json({ success: false, message: 'Book not found' });
      }
    } catch (error) {
      console.error('Error updating book:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  })


//// Delete a book //

  router.delete('/delete-book/:id',async (req,res)=>{
    try {
      const {id} = req.params;
      const deletedBook = await Book.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: 'Book deleted successfully', data: deletedBook });
      if(!deletedBook){
        return res.status(404).json({ success: false, message: 'Book not found' });
      }
      
    } catch (error) {
      console.error('Error deleting book:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  })

  module.exports = router