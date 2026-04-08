const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
require('dotenv').config();

const User = require('./models/User');
const Food = require('./models/Food');

const app = express();
let PORT = parseInt(process.env.PORT) || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/calorix';
const JWT_SECRET = process.env.JWT_SECRET || 'secretkey123';

// MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB established ✅");
    await seedDB();
  })
  .catch((err) => console.error("Could not connect to MongoDB ❌", err));

async function seedDB() {
  try {
    // Auto-cleanup unwanted items
    const namesToRemove = ['Cottage Cheese', 'Pomegranate', 'Kiwi', 'Chia Seeds', 'Hummus', 'Energy Drink', 'Baklava', 'Pancakes', 'Waffles', 'Grilled Hot Dog', 'Classic Cola Soda', 'Sizzling Bacon Strip', 'Cinnamon Churros', 'Crispy Onion Rings', 'Chocolate Candy Bar', 'Fudgy Brownie', 'Soft Pretzel', 'Mozzarella Sticks', 'Mexican Street Tacos'];
    await Food.deleteMany({ name: { $in: namesToRemove } });

    // Synchronization: Ensure DB matches the foodsDB in code
    const allFoods = [...foodsDB.healthy, ...foodsDB.unhealthy];

    console.log("CRITICAL SYNC: Purging and Re-seeding database...");
    await Food.deleteMany({});
    const result = await Food.insertMany(allFoods);
    console.log(`CRITICAL SYNC: ${result.length} items successfully updated! 🌱`);
  } catch (err) {
    console.error("Seeding failed:", err);
  }
}

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Mock Food Database (Fallback if DB is empty)
const foodsDB = {
  healthy: [
    { id: 1, name: 'Apple', calories: 52, protein: 0.3, unit: '100g', category: 'healthy', price: 20, budget: 'economy', meals: ['snack', 'breakfast'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/apple.jpg' },
    { id: 2, name: 'Chicken Breast', calories: 165, protein: 31, unit: '100g', category: 'healthy', price: 60, budget: 'standard', meals: ['lunch', 'dinner'], dietType: 'non-veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/chicken-breast.jpg' },
    { id: 3, name: 'Oats', calories: 389, protein: 13, unit: '100g', category: 'healthy', price: 30, budget: 'economy', meals: ['breakfast'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/rolled-oats.jpg' },
    { id: 4, name: 'Broccoli', calories: 34, protein: 2.8, unit: '100g', category: 'healthy', price: 40, budget: 'economy', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/broccoli.jpg' },
    { id: 5, name: 'Salmon', calories: 208, protein: 20, unit: '100g', category: 'healthy', price: 250, budget: 'premium', meals: ['lunch', 'dinner'], dietType: 'non-veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/salmon.jpg' },
    { id: 6, name: 'Almonds', calories: 579, protein: 21, unit: '100g', category: 'healthy', price: 120, budget: 'standard', meals: ['snack'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/almonds.jpg' },
    { id: 7, name: 'Spinach', calories: 23, protein: 2.9, unit: '100g', category: 'healthy', price: 15, budget: 'economy', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/spinach.jpg' },
    { id: 8, name: 'Brown Rice', calories: 111, protein: 2.6, unit: '100g', category: 'healthy', price: 45, budget: 'economy', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1680137248876-6ad53db8caef?auto=format&fit=crop&w=500&q=80' },
    { id: 17, name: 'Avocado', calories: 160, protein: 2, unit: '100g', category: 'healthy', price: 180, budget: 'premium', meals: ['breakfast', 'snack'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/avocado.jpg' },
    { id: 18, name: 'Sweet Potato', calories: 86, protein: 1.6, unit: '100g', category: 'healthy', price: 35, budget: 'economy', meals: ['lunch', 'snack'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/sweet-potato.jpg' },
    { id: 19, name: 'Greek Yogurt', calories: 59, protein: 10, unit: '100g', category: 'healthy', price: 90, budget: 'standard', meals: ['breakfast', 'snack'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/plain-yogurt.jpg' },
    { id: 20, name: 'Quinoa', calories: 120, protein: 4.4, unit: '100g', category: 'healthy', price: 110, budget: 'standard', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/quinoa.jpg' },
    { id: 21, name: 'Banana', calories: 89, protein: 1.1, unit: '100g', category: 'healthy', price: 10, budget: 'economy', meals: ['breakfast', 'snack'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/bananas.jpg' },
    { id: 22, name: 'Orange', calories: 43, protein: 0.9, unit: '100g', category: 'healthy', price: 25, budget: 'economy', meals: ['snack'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/orange.jpg' },
    { id: 23, name: 'Grapes', calories: 69, protein: 0.7, unit: '100g', category: 'healthy', price: 50, budget: 'economy', meals: ['snack'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=500&q=80' },
    { id: 26, name: 'Eggs', calories: 155, protein: 13, unit: '100g', category: 'healthy', price: 50, budget: 'economy', meals: ['breakfast', 'dinner'], dietType: 'non-veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/egg.jpg' },
    { id: 27, name: 'Lentils', calories: 116, protein: 9, unit: '100g', category: 'healthy', price: 40, budget: 'economy', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1552585960-0e1069ce7405?auto=format&fit=crop&w=500&q=80' },
    { id: 28, name: 'Carrot', calories: 41, protein: 0.9, unit: '100g', category: 'healthy', price: 20, budget: 'economy', meals: ['snack', 'lunch'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/carrots.jpg' },
    { id: 41, name: 'Blueberries', calories: 57, protein: 0.7, unit: '100g', category: 'healthy', price: 300, budget: 'premium', meals: ['breakfast', 'snack'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/blueberries.jpg' },
    { id: 42, name: 'Tofu', calories: 76, protein: 8, unit: '100g', category: 'healthy', price: 70, budget: 'standard', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/tofu.jpg' },
    { id: 43, name: 'Walnuts', calories: 654, protein: 15, unit: '100g', category: 'healthy', price: 200, budget: 'premium', meals: ['snack'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/walnuts.jpg' },
    { id: 44, name: 'Olive Oil', calories: 884, protein: 0, unit: '100ml', category: 'healthy', price: 150, budget: 'standard', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/olive-oil.jpg' },
    { id: 49, name: 'Tuna', calories: 132, protein: 28, unit: '100g', category: 'healthy', price: 140, budget: 'standard', meals: ['lunch', 'dinner'], dietType: 'non-veg', image: 'https://images.unsplash.com/photo-1710106687822-999dbeb73dee?auto=format&fit=crop&w=500&q=80' },

  ],
  unhealthy: [
    { id: 90, name: 'Fried Chicken Sandwich', calories: 450, protein: 25, unit: '100g', category: 'unhealthy', price: 280, budget: 'standard', meals: ['lunch', 'dinner'], dietType: 'non-veg', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=800' },
    { id: 92, name: 'Caramel Popcorn', calories: 430, protein: 3, unit: '100g', category: 'unhealthy', price: 150, budget: 'standard', meals: ['snack'], dietType: 'veg', image: 'https://theheirloompantry.co/wp-content/uploads/2022/10/miso-caramel-popcorn-caramel-corn-the-heirloom-pantry-05.jpg' },
    { id: 9, name: 'Crispy Aloo Tikki Burger', calories: 350, protein: 8, unit: '1 pc', category: 'unhealthy', price: 60, budget: 'economy', meals: ['snack', 'lunch'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800' },
    { id: 10, name: 'Crispy French Fries', calories: 312, protein: 3.4, unit: '100g', category: 'unhealthy', price: 80, budget: 'economy', meals: ['snack'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600' },
    { id: 13, name: 'Pepperoni Pizza', calories: 266, protein: 11, unit: '100g', category: 'unhealthy', price: 400, budget: 'premium', meals: ['lunch', 'dinner'], dietType: 'non-veg', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600' },
    { id: 33, name: 'Southern Fried Chicken', calories: 320, protein: 18, unit: '100g', category: 'unhealthy', price: 250, budget: 'premium', meals: ['lunch', 'dinner'], dietType: 'non-veg', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=600' },
    { id: 70, name: 'Glazed Gourmet Donuts', calories: 452, protein: 4.9, unit: '100g', category: 'unhealthy', price: 120, budget: 'standard', meals: ['snack'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600' },
    { id: 71, name: 'Rich Chocolate Cake', calories: 371, protein: 5.3, unit: '100g', category: 'unhealthy', price: 250, budget: 'premium', meals: ['snack'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600' },
    { id: 74, name: 'Salted Potato Chips', calories: 536, protein: 7, unit: '100g', category: 'unhealthy', price: 60, budget: 'economy', meals: ['snack'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=600' },
    { id: 75, name: 'Crispy Chicken Wings', calories: 324, protein: 19, unit: '100g', category: 'unhealthy', price: 280, budget: 'standard', meals: ['snack', 'dinner'], dietType: 'non-veg', image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=600' },
    { id: 76, name: 'Vanilla Ice Cream', calories: 207, protein: 3.5, unit: '100g', category: 'unhealthy', price: 150, budget: 'economy', meals: ['snack'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=600' },
    { id: 77, name: 'Extra Cheese Pizza', calories: 285, protein: 12, unit: '100g', category: 'unhealthy', price: 450, budget: 'premium', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=600' },
    { id: 79, name: 'Chocolate Milkshake', calories: 163, protein: 3, unit: '100ml', category: 'unhealthy', price: 180, budget: 'standard', meals: ['snack'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600' },
    { id: 81, name: 'Loaded Nachos', calories: 343, protein: 10, unit: '100g', category: 'unhealthy', price: 200, budget: 'standard', meals: ['snack'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=600' },
    { id: 85, name: 'Gourmet Cupcake', calories: 305, protein: 3, unit: '100g', category: 'unhealthy', price: 150, budget: 'standard', meals: ['snack'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600' },
    { id: 91, name: 'Milk Chocolate Bar', calories: 535, protein: 7.7, unit: '100g', category: 'unhealthy', price: 90, budget: 'economy', meals: ['snack'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800' },
    { id: 93, name: 'Spicy Samosa (2 pcs)', calories: 300, protein: 4, unit: 'plate', category: 'unhealthy', price: 30, budget: 'economy', meals: ['snack'], dietType: 'veg', image: 'https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800' },
    { id: 94, name: 'Creamy Mac & Cheese', calories: 164, protein: 7, unit: '100g', category: 'unhealthy', price: 220, budget: 'standard', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=600' },
    { id: 95, name: 'Blueberry Muffin', calories: 377, protein: 4.5, unit: '100g', category: 'unhealthy', price: 120, budget: 'standard', meals: ['breakfast', 'snack'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?q=80&w=600' },
    { id: 96, name: 'Classic Fish & Chips', calories: 232, protein: 15, unit: '100g', category: 'unhealthy', price: 350, budget: 'premium', meals: ['lunch', 'dinner'], dietType: 'non-veg', image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?q=80&w=600' },
    { id: 97, name: 'Chole Bhature Platter', calories: 650, protein: 15, unit: 'plate', category: 'unhealthy', price: 120, budget: 'standard', meals: ['lunch'], dietType: 'veg', image: 'https://nutriscan.app/calories-nutrition/images/chole-bhature-8230b.webp', link: 'https://nutriscan.app/calories-nutrition/chole-bhature' },
    { id: 98, name: 'Deep Fried Cheese Curds', calories: 360, protein: 14, unit: '100g', category: 'unhealthy', price: 200, budget: 'standard', meals: ['snack'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=600' },
    { id: 99, name: 'Sweet Gulab Jamun (2 pcs)', calories: 350, protein: 3, unit: 'plate', category: 'unhealthy', price: 50, budget: 'economy', meals: ['snack'], dietType: 'veg', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_awXAHv0T998wy9jxUp41ZRCH7UvidlJ-pA&s' }
  ]
};

// API: Get foods
app.get('/api/foods', async (req, res) => {
  try {
    const foods = await Food.find({});
    if (foods && foods.length > 0) {
      const formatted = {
        healthy: foods.filter(f => f.category === 'healthy'),
        unhealthy: foods.filter(f => f.category === 'unhealthy')
      };
      res.json(formatted);
    } else {
      res.json(foodsDB);
    }
  } catch (err) {
    res.json(foodsDB);
  }
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
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ error: "Username already taken." });

    const passwordToken = crypto.createHash('sha256').update(password).digest('hex');
    const duplicatedPass = await User.findOne({ passwordToken });
    if (duplicatedPass) {
      return res.status(400).json({ error: "This password has already been used by another user. Choose a unique password." });
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
    res.status(500).json({ error: "Server error during registration" });
  }
});

// API: Login User
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// API: Feedback
app.post('/api/feedback', (req, res) => {
  const { feedback } = req.body;
  if (feedback) {
    res.json({ message: "Thank you for your feedback!" });
  } else {
    res.status(400).json({ error: "Feedback content required." });
  }
});

// Port Management and Server Start
function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} ✅`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is busy, trying ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error("Server error:", err);
    }
  });
}

startServer(PORT);
