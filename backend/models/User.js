const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  passwordToken: { type: String, required: true, unique: true }, // To ensure "password uniqueness"
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
