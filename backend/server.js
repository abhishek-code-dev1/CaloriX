const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Mock Food Database (Using high-confidence stable Spoonacular and Unsplash IDs)
const foodsDB = {
  healthy: [
    { id: 1, name: 'Apple', calories: 52, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg' },
    { id: 2, name: 'Chicken Breast', calories: 165, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/chicken-breast.jpg' },
    { id: 3, name: 'Oats', calories: 389, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/rolled-oats.jpg' },
    { id: 4, name: 'Broccoli', calories: 34, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/broccoli.jpg' },
    { id: 5, name: 'Salmon', calories: 208, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/salmon.jpg' },
    { id: 6, name: 'Almonds', calories: 579, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/almonds.jpg' },
    { id: 7, name: 'Spinach', calories: 23, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg' },
    { id: 8, name: 'Brown Rice', calories: 111, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400' },
    { id: 17, name: 'Avocado', calories: 160, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/avocado.jpg' },
    { id: 18, name: 'Sweet Potato', calories: 86, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/sweet-potato.jpg' },
    { id: 19, name: 'Greek Yogurt', calories: 59, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400' },
    { id: 20, name: 'Quinoa', calories: 120, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/quinoa.jpg' },
    { id: 21, name: 'Banana', calories: 89, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg' },
    { id: 22, name: 'Orange', calories: 43, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/orange.jpg' },
    { id: 23, name: 'Grapes', calories: 69, unit: '100g', category: 'healthy', image: 'https://loremflickr.com/400/400/grapes?lock=23' },
    { id: 24, name: 'Watermelon', calories: 30, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/watermelon.jpg' },
    { id: 25, name: 'Mango', calories: 60, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/mango.jpg' },
    { id: 26, name: 'Eggs', calories: 155, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/egg.jpg' },
    { id: 27, name: 'Lentils', calories: 116, unit: '100g', category: 'healthy', image: 'https://images.unsplash.com/photo-1708436478056-1872a208c010?auto=format&fit=crop&q=80&w=400' },
    { id: 28, name: 'Carrot', calories: 41, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/carrots.jpg' },
    { id: 29, name: 'Tomato', calories: 18, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/tomato.jpg' },
    { id: 30, name: 'Cucumber', calories: 15, unit: '100g', category: 'healthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/cucumber.jpg' }
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
    { id: 36, name: 'Onion Rings', calories: 411, unit: '100g', category: 'unhealthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/onion-rings.jpg' },
    { id: 37, name: 'Brownie', calories: 466, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400' },
    { id: 38, name: 'Cupcake', calories: 305, unit: '100g', category: 'unhealthy', image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=400' },
    { id: 39, name: 'Bacon', calories: 541, unit: '100g', category: 'unhealthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/bacon.jpg' },
    { id: 40, name: 'Cotton Candy', calories: 394, unit: '100g', category: 'unhealthy', image: 'https://spoonacular.com/cdn/ingredients_100x100/cotton-candy.jpg' }
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

// API: Login Placeholder
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.json({ message: "Login successful", token: "mock-jwt-token-123" });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
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
