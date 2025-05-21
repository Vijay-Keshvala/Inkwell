const express = require('express');
const protect = require('../middleware/userMiddleware');

const router = express.Router();

router.get('/dashboard', protect, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.email}` });
});

module.exports = router;
