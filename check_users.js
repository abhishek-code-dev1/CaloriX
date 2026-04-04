const mongoose = require('mongoose');
require('dotenv').config({ path: './backend/.env' });

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';

const UserSchema = new mongoose.Schema({
  username: String,
  passwordToken: String,
  createdAt: Date
});

const User = mongoose.model('User', UserSchema);

async function checkUsers() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB established ✅");
    
    const users = await User.find({}, 'username createdAt passwordToken');
    console.log("\nRegistered Users:");
    console.table(users.map(u => ({
      Username: u.username,
      PasswordToken: u.passwordToken.substring(0, 10) + "...",
      Joined: u.createdAt
    })));
    
    process.exit(0);
  } catch (err) {
    console.error("Error checking users:", err);
    process.exit(1);
  }
}

checkUsers();
