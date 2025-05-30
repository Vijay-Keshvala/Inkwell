const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User')
const authMiddleware = require('../middleware/userMiddleware'); // ✅ Imported
const Cart = require('../models/Cart');
const Book = require('../models/Book');


// Example: GET /api/me
router.get('/me', authMiddleware, async (req, res) => {
  const userId = req.user.id; // or req.user._id
  res.json({ userId });
});


// Register //

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const userExist = await User.findOne({ email });
      if (userExist) return res.status(400).json({ message: 'User already exists' });
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashedPassword });
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
// Login //
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'Invalid credentials' });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
  
      const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '2h'
      });
  
      res.json({ message: 'Login successful', token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  router.get('/profile', authMiddleware, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password"); // Exclude password
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  router.put('/update-name', authMiddleware, async (req, res) => {
    const { name } = req.body;
  
    if (!name || name.trim() === '') {
      return res.status(400).json({ message: 'Name cannot be empty' });
    }
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.user.id,
        { name },
        { new: true, runValidators: true }
      ).select('-password');
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'Name updated successfully', user: updatedUser });
    } catch (err) {
      res.status(500).json({ message: 'Failed to update name', error: err.message });
    }
  });


  router.post('/cart', authMiddleware, async (req, res) => {
    try {
      const userId = req.user.id; // Now comes from the verified token, NOT the body
      const { bookId, quantity } = req.body;
  
      if (!bookId || !quantity) {
        return res.status(400).json({ message: 'Book ID and quantity are required' });
      }
  
      // Find or create cart for this user
      let cart = await Cart.findOne({ userId });
  
      if (!cart) {
        cart = new Cart({ userId, items: [] });
      }
  
      const existingItem = cart.items.find(item => item.productId.toString() === bookId);
  
      if (existingItem) {
        // If already in cart, increase quantity and update price
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        // Fetch book details for price and title (optional, or send from client)
        const book = await Book.findById(bookId);
        if (!book) return res.status(404).json({ message: 'Book not found' });
  
        cart.items.push({
          productId: book._id,
          title: book.title,
          price: book.price,
          quantity,
          totalPrice: book.price * quantity,
        });
      }
  
      await cart.save();
      return res.json({ message: 'Book added to cart', cart });
    } catch (error) {
      console.error('Error adding to cart:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


  module.exports = router;
