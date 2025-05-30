const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },  // link cart to user
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
            title: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true, default: 1 },
            totalPrice: { type: Number, required: true }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);
