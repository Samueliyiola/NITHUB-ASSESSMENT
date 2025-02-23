const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    description: String
  }, { 
    timestamps: true,
    index: { name: 1, price: 1 } // Index for optimization
  });


module.exports = mongoose.model('Product', productSchema);