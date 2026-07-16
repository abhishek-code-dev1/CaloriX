const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const User = require('./models/User');
const Food = require('./models/Food');

const app = express();
let PORT = parseInt(process.env.PORT) || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/calorix';
const JWT_SECRET = process.env.JWT_SECRET || 'secretkey123';

// MongoDB Connection with Auto-Fallback
function connectDB(uri) {
  mongoose.connect(uri)
    .then(() => {
      console.log(`Connected to MongoDB established ✅ (${uri.includes('+srv') ? 'Atlas Cloud' : 'Local Fallback'})`);
    })
    .catch((err) => {
      console.error(`Could not connect to MongoDB ❌ (${uri.includes('+srv') ? 'Atlas Cloud' : 'Local Fallback'})`, err.message);
      if (uri !== 'mongodb://localhost:27017/calorix') {
        console.log("Attempting local database connection fallback...");
        connectDB('mongodb://localhost:27017/calorix');
      }
    });
}

// Perform unique index cleanup once mongoose connection is fully opened and initialized
mongoose.connection.once('open', async () => {
  try {
    const indexes = await User.collection.indexes();
    for (const index of indexes) {
      if (index.key && index.key.passwordToken) {
        console.log(`Dropping unique index ${index.name} on passwordToken...`);
        await User.collection.dropIndex(index.name);
      }
    }
    console.log("Database index audit completed successfully ✅");
  } catch (err) {
    console.log("Database index cleanup check:", err.message);
  }
  
  // Seed the DB
  await seedDB();
});

connectDB(MONGO_URI);

async function seedDB() {
  try {
    // Erase all user data for a fresh start
    console.log("CRITICAL SYNC: Erasing all registered user accounts...");
    await User.deleteMany({});

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

// Simple cookie parsing middleware
app.use((req, res, next) => {
  req.cookies = {};
  if (req.headers.cookie) {
    req.headers.cookie.split(';').forEach(cookie => {
      const parts = cookie.split('=');
      req.cookies[parts.shift().trim()] = decodeURIComponent(parts.join('='));
    });
  }
  next();
});

// Auth Middleware
function requireAuth(req, res, next) {
  const token = req.cookies && req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "Authentication required" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid session. Please login again." });
  }
}

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
app.post('/api/bmi', requireAuth, (req, res) => {
  const { weight, height } = req.body;
  if (!weight || !height) {
    return res.status(400).json({ error: "Weight and height are required." });
  }

  const numWeight = parseFloat(weight);
  const numHeight = parseFloat(height);

  if (isNaN(numWeight) || numWeight <= 0 || isNaN(numHeight) || numHeight <= 0) {
    return res.status(400).json({ error: "Weight and height must be positive numbers." });
  }

  // Calculate BMI
  const heightInMeters = numHeight / 100;
  const bmiNum = numWeight / (heightInMeters * heightInMeters);
  let bmiCategory = 'Normal weight';
  if (bmiNum < 18.5) bmiCategory = 'Underweight';
  else if (bmiNum >= 25 && bmiNum < 30) bmiCategory = 'Overweight';
  else if (bmiNum >= 30) bmiCategory = 'Obesity';

  res.json({
    bmi: bmiNum.toFixed(1),
    bmiCategory
  });
});

// API: Calculate Calories (TDEE and Targets)
app.post('/api/calories', requireAuth, (req, res) => {
  const { weight, height, age, gender, activityLevel, goal } = req.body;
  if (!weight || !height || !age) {
    return res.status(400).json({ error: "Weight, height, and age are required." });
  }

  const numWeight = parseFloat(weight);
  const numHeight = parseFloat(height);
  const numAge = parseInt(age);

  if (isNaN(numWeight) || numWeight <= 0 || isNaN(numHeight) || numHeight <= 0 || isNaN(numAge) || numAge <= 0) {
    return res.status(400).json({ error: "Weight, height, and age must be valid positive numbers." });
  }

  // Calculate TDEE (Mifflin-St Jeor)
  const isMale = gender === 'male';
  let s = isMale ? 5 : -161;
  const bmr = 10 * numWeight + 6.25 * numHeight - 5 * numAge + s;

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

// API: Calculate Steps Active Burn (Distance and Calories)
app.post('/api/steps', requireAuth, (req, res) => {
  const { steps, pace, weight, height, gender } = req.body;
  if (steps === undefined || steps === null || !pace || !weight || !height) {
    return res.status(400).json({ error: "Steps, pace, weight, and height are required." });
  }

  const numericSteps = parseInt(steps);
  const numericWeight = parseFloat(weight);
  const numericHeight = parseFloat(height);

  if (isNaN(numericSteps) || numericSteps <= 0) {
    return res.status(400).json({ error: "Steps must be a valid positive number." });
  }
  if (isNaN(numericWeight) || numericWeight <= 0) {
    return res.status(400).json({ error: "Weight must be a valid positive number." });
  }
  if (isNaN(numericHeight) || numericHeight <= 0) {
    return res.status(400).json({ error: "Height must be a valid positive number." });
  }

  // Stride length calculation (based on height and gender)
  const isMale = gender === 'male';
  const strideFactor = isMale ? 0.415 : 0.413;
  const strideLengthMeters = (numericHeight * strideFactor) / 100;

  // Distance in kilometers
  const distanceKm = parseFloat(((numericSteps * strideLengthMeters) / 1000).toFixed(2));

  // MET depending on pace (standard walking guidelines)
  let cadence = 100; // default Moderate
  let met = 3.3; // default Moderate
  
  if (pace === 'slow') {
    cadence = 80;
    met = 2.0;
  } else if (pace === 'moderate') {
    cadence = 100;
    met = 3.3;
  } else if (pace === 'fast') {
    cadence = 120;
    met = 5.0;
  }

  // Duration in minutes
  const durationMinutes = Math.round(numericSteps / cadence);

  // Calories burned = MET * 3.5 * weight (kg) / 200 * duration (minutes)
  const caloriesBurned = Math.round(met * 3.5 * numericWeight / 200 * durationMinutes);

  res.json({
    distanceKm,
    durationMinutes,
    caloriesBurned,
    paceLabel: pace.charAt(0).toUpperCase() + pace.slice(1)
  });
});


// API: Register User
app.post('/api/auth/register', async (req, res) => {
  const { username, password, name, question1, answer1, question2, answer2 } = req.body;
  if (!username || !password || !name || !question1 || !answer1 || !question2 || !answer2) {
    return res.status(400).json({ error: "All registration fields and security questions are required." });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ error: "Email already taken." });

    const passwordToken = crypto.createHash('sha256').update(password).digest('hex');
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword,
      name: name,
      passwordToken: passwordToken,
      securityQuestion1: question1,
      securityAnswer1: answer1.trim().toLowerCase(),
      securityQuestion2: question2,
      securityAnswer2: answer2.trim().toLowerCase()
    });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, {
      httpOnly: true,
      secure: false, // Since this runs locally on http
      maxAge: 3600000, // 1 hour
      path: '/'
    });

    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    console.error("Registration error details:", err);
    res.status(500).json({ error: "Server error during registration", details: err.message });
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
    res.cookie('token', token, {
      httpOnly: true,
      secure: false, // Since this runs locally on http
      maxAge: 3600000, // 1 hour
      path: '/'
    });

    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// API: Check Session Status
app.get('/api/auth/status', async (req, res) => {
  const token = req.cookies && req.cookies.token;
  if (!token) {
    return res.json({ loggedIn: false });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.json({ loggedIn: false });
    }
    res.json({ loggedIn: true, username: user.username, name: user.name });
  } catch (err) {
    res.json({ loggedIn: false });
  }
});

// API: Logout User
app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('token', { path: '/' });
  res.json({ message: "Logged out successfully" });
});

// API: Forgot Password - Get Security Questions for User Recovery
app.post('/api/auth/questions', async (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ error: "Email address required" });
  }
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "No account associated with this email address." });
    }
    
    // Fallback if security questions fields are empty
    const q1 = user.securityQuestion1 || "What is your favorite food?";
    const q2 = user.securityQuestion2 || "What was the name of your first pet?";

    res.json({
      question1: q1,
      question2: q2
    });
  } catch (err) {
    res.status(500).json({ error: "Server error during questions query." });
  }
});

// API: Reset Password - Verify Questions & Update
app.post('/api/auth/reset', async (req, res) => {
  const { username, answer1, answer2, newPassword } = req.body;
  if (!username || !answer1 || !answer2 || !newPassword) {
    return res.status(400).json({ error: "All fields are required." });
  }
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const match1 = (user.securityAnswer1 || "pizza").trim().toLowerCase() === answer1.trim().toLowerCase();
    const match2 = (user.securityAnswer2 || "buddy").trim().toLowerCase() === answer2.trim().toLowerCase();

    if (!match1 || !match2) {
      return res.status(400).json({ error: "Verification failed. Incorrect answers to security questions." });
    }

    const passwordToken = crypto.createHash('sha256').update(newPassword).digest('hex');
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.passwordToken = passwordToken;
    await user.save();

    res.json({ message: "Password reset successful! You can now log in." });
  } catch (err) {
    res.status(500).json({ error: "Server error during password reset." });
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
