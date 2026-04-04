const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';

// MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB established ✅"))
  .catch((err) => console.error("Could not connect to MongoDB ❌", err));

// User Model
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  passwordToken: { type: String, required: true, unique: true }, // To ensure unique passwords
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Mock Food Database (Using high-confidence stable Spoonacular and Unsplash IDs)
const foodsDB = {
  healthy: [
    { id: 1, name: 'Apple', calories: 52, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6bcdb?q=80&w=400' },
    { id: 2, name: 'Chicken Breast', calories: 165, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=400' },
    { id: 3, name: 'Oats', calories: 389, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1589333830171-ec5965415712?q=80&w=400' },
    { id: 4, name: 'Broccoli', calories: 34, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1452960962294-51daf305908a?q=80&w=400' },
    { id: 5, name: 'Salmon', calories: 208, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=400' },
    { id: 6, name: 'Almonds', calories: 579, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1508061461508-cb18c242f556?q=80&w=400' },
    { id: 7, name: 'Spinach', calories: 23, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=400' },
    { id: 8, name: 'Brown Rice', calories: 111, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1586201327693-86619a7c3942?q=80&w=400' },
    { id: 17, name: 'Avocado', calories: 160, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=400' },
    { id: 18, name: 'Sweet Potato', calories: 86, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400' },
    { id: 19, name: 'Greek Yogurt', calories: 59, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=400' },
    { id: 20, name: 'Quinoa', calories: 120, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1543332143-4e8c67e9dff1?q=80&w=400' },
    { id: 21, name: 'Banana', calories: 89, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=400' },
    { id: 22, name: 'Orange', calories: 43, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?q=80&w=400' },
    { id: 23, name: 'Grapes', calories: 69, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1537640538966-79f369b41f8f?q=80&w=400' },
    { id: 24, name: 'Watermelon', calories: 30, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=400' },
    { id: 25, name: 'Mango', calories: 60, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=400' },
    { id: 26, name: 'Eggs', calories: 155, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=400' },
    { id: 27, name: 'Lentils', calories: 116, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1518173835740-f5d14111d76a?q=80&w=400' },
    { id: 28, name: 'Carrot', calories: 41, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=400' },
    { id: 29, name: 'Tomato', calories: 18, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=400' },
    { id: 30, name: 'Cucumber', calories: 15, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1449339044511-d11bb99b9a4d?q=80&w=400' }
  ],
  unhealthy: [
    { id: 9, name: 'Cheeseburger', calories: 303, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400' },
    { id: 10, name: 'French Fries', calories: 312, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=400' },
    { id: 11, name: 'Donut', calories: 452, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=400' },
    { id: 12, name: 'Soda', calories: 41, unit: '100ml', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400' },
    { id: 13, name: 'Pizza', calories: 266, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400' },
    { id: 14, name: 'Potato Chips', calories: 536, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=400' },
    { id: 15, name: 'Ice Cream', calories: 207, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=400' },
    { id: 16, name: 'Candies', calories: 394, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=400' },
    { id: 31, name: 'Chocolate Bar', calories: 210, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=400' },
    { id: 32, name: 'Milkshake', calories: 350, unit: '100ml', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=400' },
    { id: 33, name: 'Fried Chicken', calories: 320, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=400' },
    { id: 34, name: 'Nachos', calories: 346, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=400' },
    { id: 35, name: 'Hot Dog', calories: 290, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?q=80&w=400' },
    { id: 36, name: 'Onion Rings', calories: 411, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1616422329720-6d43231fc751?q=80&w=400' },
    { id: 37, name: 'Brownie', calories: 466, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400' },
    { id: 38, name: 'Cupcake', calories: 305, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=400' },
    { id: 39, name: 'Bacon', calories: 541, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1606851682841-84fe0f941810?q=80&w=400' },
    { id: 40, name: 'Cotton Candy', calories: 394, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1628433355606-f77341031c51?q=80&w=400' }
  ]
};

// API: Get foods
app.get('/api/foods', (req, res) => {
  res.json(foodsDB);
});

// API: Calculate BMI
app.post('/api/bmi', (req, res) => {
  const { weight, height } = req.body;
  if (!weight || !height) {
    return res.status(400).json({ error: "Weight and height are required." });
  }

  // Calculate BMI
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
  let bmiCategory = 'Normal weight';
  if (bmi < 18.5) bmiCategory = 'Underweight';
  else if (bmi >= 25 && bmi < 29.9) bmiCategory = 'Overweight';
  else if (bmi >= 30) bmiCategory = 'Obesity';

  res.json({
    bmi,
    bmiCategory
  });
});

// API: Calculate Calories (TDEE and Targets)
app.post('/api/calories', (req, res) => {
  const { weight, height, age, gender, activityLevel, goal } = req.body;
  if (!weight || !height || !age) {
    return res.status(400).json({ error: "Weight, height, and age are required." });
  }

  // Calculate TDEE (Mifflin-St Jeor)
  const isMale = gender === 'male';
  let s = isMale ? 5 : -161;
  const currAge = age || 25;
  const bmr = 10 * weight + 6.25 * height - 5 * currAge + s;

  // Activity Multipliers
  const multipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9
  };
  const multiplier = multipliers[activityLevel] || 1.2;
  const maintenanceCalories = Math.round(bmr * multiplier);

  let targetCalories = maintenanceCalories;
  let recommendation = '';

  if (goal === 'cut') {
    targetCalories -= 500; // 500 deficit
    recommendation = `To lose fat safely, consume around ${targetCalories} kcal per day. This is a 500 kcal deficit from your maintenance level.`;
  } else if (goal === 'bulk') {
    targetCalories += 500; // 500 surplus
    recommendation = `To gain muscle and weight, consume around ${targetCalories} kcal per day. This is a 500 kcal surplus over your maintenance level.`;
  } else {
    recommendation = `To maintain your current weight, consume around ${targetCalories} kcal per day.`;
  }

  res.json({
    maintenanceCalories,
    targetCalories,
    recommendation
  });
});

// API: Register User
app.post('/api/auth/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  try {
    // Check if username exists
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ error: "Username already taken. Please choose another." });

    // Generate a unique token for the password to ensure "password uniqueness" as requested
    // We use a constant pepper or just a hash to check for equality without revealing the actual password
    const passwordToken = crypto.createHash('sha256').update(password).digest('hex');

    // Check if another user already has this password
    const duplicatedPass = await User.findOne({ passwordToken });
    if (duplicatedPass) {
      return res.status(400).json({ error: "This password has already been used by another user. Password must be unique." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword,
      passwordToken: passwordToken
    });
    await newUser.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Server error during registration" });
  }
});

// API: Login User (Real)
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, 'secretkey123', { expiresIn: '1h' });
    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// API: Feedback Placeholder
app.post('/api/feedback', (req, res) => {
  const { feedback } = req.body;
  if (feedback) {
    // In a real app we'd save it to DB
    res.json({ message: "Thank you for your feedback!" });
  } else {
    res.status(400).json({ error: "Feedback content required." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
