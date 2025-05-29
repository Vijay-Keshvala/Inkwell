const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User')
const authMiddleware = require('../middleware/userMiddleware'); // ✅ Imported



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
  module.exports = router;
