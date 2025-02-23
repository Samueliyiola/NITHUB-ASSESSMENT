const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [{
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number
    }],
    status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
    total: Number
  }, { timestamps: true });