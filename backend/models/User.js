const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, default: 'Champion' },
  passwordToken: { type: String },
  securityQuestion1: { type: String },
  securityAnswer1: { type: String },
  securityQuestion2: { type: String },
  securityAnswer2: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  createdAt: { type: Date, default: Date.now },
  
  // Connected Calculator History Arrays
  bmiHistory: [{
    bmi: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now }
  }],
  caloriesHistory: [{
    maintenanceCalories: { type: Number, required: true },
    targetCalories: { type: Number, required: true },
    goal: { type: String },
    date: { type: Date, default: Date.now }
  }],
  stepsHistory: [{
    steps: { type: Number, required: true },
    distanceKm: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    pace: { type: String },
    durationMinutes: { type: Number },
    date: { type: Date, default: Date.now }
  }]
});

module.exports = mongoose.model('User', userSchema);

