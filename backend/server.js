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
    { id: 1, name: 'Apple', calories: 52, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/apple.jpg' },
    { id: 2, name: 'Chicken Breast', calories: 165, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/chicken-breast.jpg' },
    { id: 3, name: 'Oats', calories: 389, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/rolled-oats.jpg' },
    { id: 4, name: 'Broccoli', calories: 34, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/broccoli.jpg' },
    { id: 5, name: 'Salmon', calories: 208, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/salmon.jpg' },
    { id: 6, name: 'Almonds', calories: 579, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/almonds.jpg' },
    { id: 7, name: 'Spinach', calories: 23, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/spinach.jpg' },
    { id: 8, name: 'Brown Rice', calories: 111, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1680137248876-6ad53db8caef?auto=format&fit=crop&w=500&q=80' },
    { id: 17, name: 'Avocado', calories: 160, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/avocado.jpg' },
    { id: 18, name: 'Sweet Potato', calories: 86, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/sweet-potato.jpg' },
    { id: 19, name: 'Greek Yogurt', calories: 59, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/plain-yogurt.jpg' },
    { id: 20, name: 'Quinoa', calories: 120, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/quinoa.jpg' },
    { id: 21, name: 'Banana', calories: 89, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/bananas.jpg' },
    { id: 22, name: 'Orange', calories: 43, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/orange.jpg' },
    { id: 23, name: 'Grapes', calories: 69, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=500&q=80' },
    { id: 24, name: 'Watermelon', calories: 30, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/watermelon.jpg' },
    { id: 25, name: 'Mango', calories: 60, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/mango.jpg' },
    { id: 26, name: 'Eggs', calories: 155, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/egg.jpg' },
    { id: 27, name: 'Lentils', calories: 116, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1552585960-0e1069ce7405?auto=format&fit=crop&w=500&q=80' },
    { id: 28, name: 'Carrot', calories: 41, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/carrots.jpg' },
    { id: 29, name: 'Tomato', calories: 18, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/tomato.jpg' },
    { id: 30, name: 'Cucumber', calories: 15, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/cucumber.jpg' },
    { id: 41, name: 'Blueberries', calories: 57, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/blueberries.jpg' },
    { id: 42, name: 'Tofu', calories: 76, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/tofu.jpg' },
    { id: 43, name: 'Walnuts', calories: 654, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/walnuts.jpg' },
    { id: 44, name: 'Olive Oil', calories: 884, unit: '100ml', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/olive-oil.jpg' },
    { id: 45, name: 'Bell Pepper', calories: 31, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/red-bell-pepper.jpg' },
    { id: 46, name: 'Asparagus', calories: 20, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/asparagus.jpg' },
    { id: 47, name: 'Pineapple', calories: 50, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/pineapple.jpg' },
    { id: 48, name: 'Kale', calories: 49, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/kale.jpg' },
    { id: 49, name: 'Tuna', calories: 132, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1710106687822-999dbeb73dee?auto=format&fit=crop&w=500&q=80' },
    { id: 50, name: 'Garlic', calories: 149, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_500x500/garlic.jpg' }
  ],
  unhealthy: [
    { id: 9, name: 'Cheeseburger', calories: 303, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400' },
    { id: 10, name: 'French Fries', calories: 312, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=400' },
    { id: 11, name: 'Donut', calories: 452, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400' },
    { id: 12, name: 'Soda', calories: 41, unit: '100ml', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=400' },
    { id: 13, name: 'Pizza', calories: 266, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400' },
    { id: 14, name: 'Potato Chips', calories: 536, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=400' },
    { id: 15, name: 'Ice Cream', calories: 207, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=400' },
    { id: 16, name: 'Candies', calories: 394, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=400' },
    { id: 31, name: 'Chocolate Bar', calories: 210, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=400' },
    { id: 32, name: 'Milkshake', calories: 350, unit: '100ml', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=400' },
    { id: 33, name: 'Fried Chicken', calories: 320, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=400' },
    { id: 34, name: 'Nachos', calories: 346, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=400' },
    { id: 35, name: 'Hot Dog', calories: 290, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?q=80&w=400' },
    { id: 36, name: 'Onion Rings', calories: 411, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=500&q=80' },
    { id: 37, name: 'Brownie', calories: 466, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400' },
    { id: 38, name: 'Cupcake', calories: 305, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=400' },
    { id: 39, name: 'Bacon', calories: 541, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1694983361629-0363ab0d1b49?auto=format&fit=crop&w=500&q=80' },
    { id: 40, name: 'Cotton Candy', calories: 394, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1693122070191-277d7274cf46?auto=format&fit=crop&w=500&q=80' },
    { id: 51, name: 'Pancakes', calories: 227, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=400' },
    { id: 52, name: 'Waffles', calories: 291, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=500&q=80' },
    { id: 53, name: 'Cake', calories: 257, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400' },
    { id: 54, name: 'Cookies', calories: 502, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400' },
    { id: 55, name: 'Fried Rice', calories: 163, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=400' },
    { id: 56, name: 'White Bread', calories: 265, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400' },
    { id: 57, name: 'Tacos', calories: 226, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400' },
    { id: 58, name: 'Chicken Wings', calories: 203, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=400' },
    { id: 59, name: 'Popcorn', calories: 375, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1585647347384-2593bc35786b?q=80&w=400' },
    { id: 60, name: 'Beer', calories: 43, unit: '100ml', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=400' }
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
