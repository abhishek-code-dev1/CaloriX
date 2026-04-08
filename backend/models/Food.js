const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  protein: { type: Number },
  unit: { type: String, default: '100g' },
  category: { type: String, enum: ['healthy', 'unhealthy'], required: true },
  price: { type: Number },
  budget: { type: String, enum: ['economy', 'standard', 'premium'] },
  meals: { type: [String] },
  dietType: { type: String, enum: ['veg', 'non-veg'] },
  image: { type: String, required: true }
});

module.exports = mongoose.model('Food', foodSchema);
