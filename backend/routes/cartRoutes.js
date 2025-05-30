const express = require('express');
const router = express.Router();
const Cart = require("../models/Cart");
const userMiddleware = require("../middleware/userMiddleware");

// GET /api/cart-all — protected route
router.get('/cart-all', userMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ userId }).populate('items.productId');

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.json(cart.items);
  } catch (err) {
    console.error("Fetch cart error:", err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
