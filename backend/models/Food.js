const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  unit: { type: String, default: '100g' },
  category: { type: String, enum: ['healthy', 'unhealthy'], required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model('Food', foodSchema);
