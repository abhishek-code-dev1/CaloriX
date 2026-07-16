const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, default: 'Champion' },
  passwordToken: { type: String, required: true, unique: true }, // To ensure "password uniqueness"
  securityQuestion1: { type: String },
  securityAnswer1: { type: String },
  securityQuestion2: { type: String },
  securityAnswer2: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);

