// Constants
const fallbackFoodsDB = {
  healthy: [
    { id: 1, name: 'Apple', calories: 52, unit: '100g', category: 'healthy', price: 20, budget: 'economy', meals: ['snack', 'breakfast'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/apple.jpg' },
    { id: 2, name: 'Chicken Breast', calories: 165, unit: '100g', category: 'healthy', price: 60, budget: 'standard', meals: ['lunch', 'dinner'], dietType: 'non-veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/chicken-breast.jpg' },
    { id: 3, name: 'Oats', calories: 389, unit: '100g', category: 'healthy', price: 30, budget: 'economy', meals: ['breakfast'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/rolled-oats.jpg' },
    { id: 4, name: 'Broccoli', calories: 34, unit: '100g', category: 'healthy', price: 40, budget: 'economy', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/broccoli.jpg' },
    { id: 5, name: 'Salmon', calories: 208, unit: '100g', category: 'healthy', price: 250, budget: 'premium', meals: ['lunch', 'dinner'], dietType: 'non-veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/salmon.jpg' },
    { id: 6, name: 'Almonds', calories: 579, unit: '100g', category: 'healthy', price: 120, budget: 'standard', meals: ['snack'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/almonds.jpg' },
    { id: 7, name: 'Spinach', calories: 23, unit: '100g', category: 'healthy', price: 15, budget: 'economy', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/spinach.jpg' },
    { id: 8, name: 'Brown Rice', calories: 111, unit: '100g', category: 'healthy', price: 45, budget: 'economy', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1680137248876-6ad53db8caef?auto=format&fit=crop&w=500&q=80' },
    { id: 17, name: 'Avocado', calories: 160, unit: '100g', category: 'healthy', price: 180, budget: 'premium', meals: ['breakfast', 'snack'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/avocado.jpg' },
    { id: 18, name: 'Sweet Potato', calories: 86, unit: '100g', category: 'healthy', price: 35, budget: 'economy', meals: ['lunch', 'snack'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/sweet-potato.jpg' },
    { id: 19, name: 'Greek Yogurt', calories: 59, unit: '100g', category: 'healthy', price: 90, budget: 'standard', meals: ['breakfast', 'snack'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/plain-yogurt.jpg' },
    { id: 20, name: 'Quinoa', calories: 120, unit: '100g', category: 'healthy', price: 110, budget: 'standard', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/quinoa.jpg' },
    { id: 21, name: 'Banana', calories: 89, unit: '100g', category: 'healthy', price: 10, budget: 'economy', meals: ['breakfast', 'snack'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/bananas.jpg' },
    { id: 22, name: 'Orange', calories: 43, unit: '100g', category: 'healthy', price: 25, budget: 'economy', meals: ['snack'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/orange.jpg' },
    { id: 26, name: 'Eggs', calories: 155, unit: '100g', category: 'healthy', price: 50, budget: 'economy', meals: ['breakfast', 'dinner'], dietType: 'non-veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/egg.jpg' },
    { id: 27, name: 'Lentils', calories: 116, unit: '100g', category: 'healthy', price: 40, budget: 'economy', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1552585960-0e1069ce7405?auto=format&fit=crop&w=500&q=80' },
    { id: 28, name: 'Carrot', calories: 41, unit: '100g', category: 'healthy', price: 20, budget: 'economy', meals: ['snack', 'lunch'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/carrots.jpg' },
    { id: 41, name: 'Blueberries', calories: 57, unit: '100g', category: 'healthy', price: 300, budget: 'premium', meals: ['breakfast', 'snack'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/blueberries.jpg' },
    { id: 42, name: 'Tofu', calories: 76, unit: '100g', category: 'healthy', price: 70, budget: 'standard', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/tofu.jpg' },
    { id: 43, name: 'Walnuts', calories: 654, unit: '100g', category: 'healthy', price: 200, budget: 'premium', meals: ['snack'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/walnuts.jpg' },
    { id: 44, name: 'Olive Oil', calories: 884, unit: '100ml', category: 'healthy', price: 150, budget: 'standard', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://spoonacular.com/cdn/ingredients_500x500/olive-oil.jpg' },
    { id: 49, name: 'Tuna', calories: 132, unit: '100g', category: 'healthy', price: 140, budget: 'standard', meals: ['lunch', 'dinner'], dietType: 'non-veg', image: 'https://images.unsplash.com/photo-1710106687822-999dbeb73dee?auto=format&fit=crop&w=500&q=80' }
  ],
  unhealthy: [
    { id: 9, name: 'Cheeseburger', calories: 303, unit: '100g', category: 'unhealthy', price: 150, budget: 'standard', meals: ['lunch', 'dinner'], dietType: 'non-veg', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400' },
    { id: 10, name: 'French Fries', calories: 312, unit: '100g', category: 'unhealthy', price: 80, budget: 'economy', meals: ['snack'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=400' },
    { id: 13, name: 'Pizza', calories: 266, unit: '100g', category: 'unhealthy', price: 400, budget: 'premium', meals: ['lunch', 'dinner'], dietType: 'veg', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400' },
    { id: 33, name: 'Fried Chicken', calories: 320, unit: '100g', category: 'unhealthy', price: 250, budget: 'premium', meals: ['lunch', 'dinner'], dietType: 'non-veg', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=400' }
  ]
};

// Constants
const API_BASE = '/api';

// DOM Elements
const authBtn = document.getElementById('auth-btn');
const authModal = document.getElementById('auth-modal');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const feedbackForm = document.getElementById('feedback-form');

// New Calculator Elements
const bmiForm = document.getElementById('bmi-form');
const calForm = document.getElementById('cal-form');

// State
let isLoggedIn = false;
let allFoods = { healthy: [], unhealthy: [] };

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Init AOS
  AOS.init({
    duration: 800,
    easing: 'ease-out-back',
    once: true
  });

  // Scroll Logic
  const fab = document.querySelector('.fab');
  const progressBar = document.getElementById('scroll-progress');

  window.addEventListener('scroll', () => {
    // Progress Bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";

    // FAB Visibility
    if (winScroll > 300) {
      fab.classList.add('visible');
    } else {
      fab.classList.remove('visible');
    }
  });

  // Mobile Menu Toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  
  if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      document.body.classList.toggle('menu-open');
      const icon = mobileMenu.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        const icon = mobileMenu.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      });
    });
  }

  fetchFoods();
  initDietPlanner();
});

// Celebration Effect
function celebrate() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#6366f1', '#a855f7', '#00f2fe']
  });
}

// Calculate BMI
bmiForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const weight = parseFloat(document.getElementById('bmi-weight').value);
  const height = parseFloat(document.getElementById('bmi-height').value);
  const payload = { weight, height };

  const handleLocalBMI = () => {
    if (!weight || !height) return alert("Weight and height required.");
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    let bmiCategory = 'Normal weight';
    if (bmi < 18.5) bmiCategory = 'Underweight';
    else if (bmi >= 25 && bmi < 29.9) bmiCategory = 'Overweight';
    else if (bmi >= 30) bmiCategory = 'Obesity';
    
    updateBMIResult(bmi, bmiCategory);
  };

  try {
    const response = await fetch(`${API_BASE}/bmi`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      const data = await response.json();
      updateBMIResult(data.bmi, data.bmiCategory);
      celebrate();
    } else {
      handleLocalBMI();
    }
  } catch (error) {
    console.error("Backend error, calculating locally:", error);
    handleLocalBMI();
  }
});

function updateBMIResult(bmi, category) {
  const resBmi = document.getElementById('res-bmi');
  const resCat = document.getElementById('res-category');
  const resDiv = document.getElementById('bmi-results');
  const pointer = document.getElementById('bmi-pointer');

  resBmi.innerText = bmi;
  resCat.innerText = category;
  resDiv.classList.remove('hidden');
  resDiv.classList.add('reveal-up');

  // Gauge pointer logic (15 to 40 BMI range)
  let percentage = ((bmi - 15) / (40 - 15)) * 100;
  percentage = Math.min(Math.max(percentage, 0), 100);
  pointer.style.left = `${percentage}%`;
}

// Calculate Calories
calForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const age = parseInt(document.getElementById('cal-age').value);
  const gender = document.getElementById('cal-gender').value;
  const weight = parseFloat(document.getElementById('cal-weight').value);
  const height = parseFloat(document.getElementById('cal-height').value);
  const activityLevel = document.getElementById('cal-activity').value;
  const goal = document.getElementById('cal-goal').value;

  const payload = { age, gender, weight, height, activityLevel, goal };

  const handleLocalCalories = () => {
    if (!weight || !height || !age) return;
    const isMale = gender === 'male';
    const bmr = 10 * weight + 6.25 * height - 5 * age + (isMale ? 5 : -161);
    const multipliers = { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, veryActive: 1.9 };
    const maintenanceCalories = Math.round(bmr * (multipliers[activityLevel] || 1.2));
    
    let targetCalories = maintenanceCalories;
    let recommendation = `To maintain your current weight, consume around ${targetCalories} kcal per day.`;
    
    if (goal === 'cut') {
      targetCalories -= 500;
      recommendation = `To lose fat safely, consume around ${targetCalories} kcal per day. This is a 500 kcal deficit.`;
    } else if (goal === 'bulk') {
      targetCalories += 500;
      recommendation = `To gain muscle and weight, consume around ${targetCalories} kcal per day. This is a 500 kcal surplus.`;
    }

    document.getElementById('res-maintenance').innerText = maintenanceCalories;
    document.getElementById('res-target').innerText = targetCalories;
    document.getElementById('res-recommendation').innerText = recommendation;
    document.getElementById('cal-results').classList.remove('hidden');
    
    // Auto-scroll to results
    document.getElementById('cal-results').scrollIntoView({ behavior: 'smooth' });
    
    // Sync diet filters
    document.getElementById('diet-goal-filter').value = goal;
  };

  try {
    const response = await fetch(`${API_BASE}/calories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      const data = await response.json();
      document.getElementById('res-maintenance').innerText = data.maintenanceCalories;
      document.getElementById('res-target').innerText = data.targetCalories;
      document.getElementById('res-recommendation').innerText = data.recommendation;
      document.getElementById('cal-results').classList.remove('hidden');
      document.getElementById('diet-goal-filter').value = goal;
      celebrate(); 
    } else {
      handleLocalCalories();
    }
  } catch (error) {
    console.error("Backend error, calculating locally:", error);
    handleLocalCalories();
  }
});

// Diet Planner Logic
function initDietPlanner() {
  const generateBtn = document.getElementById('generate-diet-btn');
  const budgetFilter = document.getElementById('diet-budget-filter');
  const dietTypeFilter = document.getElementById('diet-type-filter');
  const goalFilter = document.getElementById('diet-goal-filter');

  generateBtn.addEventListener('click', () => {
    const dietSection = document.getElementById('diet-plan');
    dietSection.classList.remove('hidden');
    generateDietPlan();
    dietSection.scrollIntoView({ behavior: 'smooth' });
    celebrate();
  });

  budgetFilter.addEventListener('change', generateDietPlan);
  dietTypeFilter.addEventListener('change', generateDietPlan);
  goalFilter.addEventListener('change', generateDietPlan);
}

function generateDietPlan() {
  const budget = document.getElementById('diet-budget-filter').value;
  const dietType = document.getElementById('diet-type-filter').value;
  const goal = document.getElementById('diet-goal-filter').value;
  const targetCal = parseInt(document.getElementById('res-target').innerText) || 2000;
  
  const mealDistribution = {
    breakfast: 0.25,
    lunch: 0.35,
    snack: 0.15,
    dinner: 0.25
  };

  let totalCalFinal = 0;
  let totalCostFinal = 0;

  ['breakfast', 'lunch', 'snack', 'dinner'].forEach(mealType => {
    const container = document.getElementById(`${mealType}-items`);
    container.innerHTML = '';
    
    const mealTarget = targetCal * mealDistribution[mealType];
    
    // Filter potential foods
    let availableFoods = [...allFoods.healthy];
    
    // If bulking, allow some "unhealthy" but energy-dense options
    if (goal === 'bulk') {
      availableFoods = [...availableFoods, ...allFoods.unhealthy];
    }

    let filtered = availableFoods.filter(f => f.meals && f.meals.includes(mealType));
    
    // Diet preference filter
    if (dietType !== 'all') {
      filtered = filtered.filter(f => f.dietType === dietType);
    }
    
    // fall back if no specialized meal data exists (standard backends)
    if (filtered.length === 0) {
      filtered = availableFoods.slice(0, 5); // generic fallback
    }

    // Budget filter
    if (budget !== 'all' && filtered.some(f => f.budget)) {
      const budgetMatched = filtered.filter(f => f.budget === budget);
      if (budgetMatched.length > 0) filtered = budgetMatched;
    }

    // Pick items for variety
    const selection = filtered.sort(() => 0.5 - Math.random()).slice(0, 2);
    
    selection.forEach(item => {
      // Calculate portion to match calories
      const portionRatio = (mealTarget / selection.length) / (item.calories || 100);
      const amount = Math.round(100 * portionRatio);
      const itemCost = Math.round(((item.price || 50) / 100) * amount);
      const itemCal = Math.round((item.calories || 100) * portionRatio);

      totalCalFinal += itemCal;
      totalCostFinal += itemCost;

      const itemEl = document.createElement('div');
      itemEl.className = 'meal-suggestion-item reveal-up';
      itemEl.innerHTML = `
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=100'">
        <div class="meal-item-data">
          <span class="meal-item-name">${item.name}</span>
          <span class="meal-item-meta">${amount}g | ${itemCal} kcal</span>
        </div>
        <span class="meal-item-price">₹${itemCost}</span>
      `;
      container.appendChild(itemEl);
    });
  });

  document.getElementById('diet-total-cal').innerText = `${Math.round(totalCalFinal)} kcal`;
  document.getElementById('diet-total-cost').innerText = `₹${Math.round(totalCostFinal)}`;
}

// Fetch Foods Data
async function fetchFoods() {
  try {
    const response = await fetch(`${API_BASE}/foods`);
    if(response.ok) {
      const data = await response.json();
      allFoods = data; // Store globally
      renderFoods('healthy-items', data.healthy);
      renderFoods('unhealthy-items', data.unhealthy);
    } else {
      console.warn("Backend unavailable, using fallback foods.");
      allFoods = fallbackFoodsDB;
      renderFoods('healthy-items', fallbackFoodsDB.healthy);
      renderFoods('unhealthy-items', fallbackFoodsDB.unhealthy);
    }
  } catch(err) {
    console.error("Failed to load foods from backend. Using fallback:", err);
    allFoods = fallbackFoodsDB;
    renderFoods('healthy-items', fallbackFoodsDB.healthy);
    renderFoods('unhealthy-items', fallbackFoodsDB.unhealthy);
  }
}

// Search Logic
document.getElementById('food-search').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  
  const filteredHealthy = allFoods.healthy.filter(f => f.name.toLowerCase().includes(term));
  const filteredUnhealthy = allFoods.unhealthy.filter(f => f.name.toLowerCase().includes(term));
  
  renderFoods('healthy-items', filteredHealthy);
  renderFoods('unhealthy-items', filteredUnhealthy);
});

function renderFoods(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'food-item';
    li.innerHTML = `
      <div class="food-info">
        <img src="${item.image}" alt="${item.name}" class="food-img" loading="lazy" referrerpolicy="no-referrer" onerror="this.src='https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=100'" />
        <span class="food-name">${item.name} <span style="opacity: 0.5; font-size: 0.8rem">(${item.unit})</span></span>
      </div>
      <span class="food-cal">${item.calories} kcal</span>
    `;
    container.appendChild(li);
  });
}

// Auth Handlers
function openAuthModal() {
  if (isLoggedIn) {
    isLoggedIn = false;
    authBtn.innerHTML = '<i class="fas fa-user-plus"></i> <span>Sign Up</span>';
    alert("Logged out successfully.");
    return;
  }
  toggleAuth('signup'); // Default to signup as requested
  authModal.classList.remove('hidden');
}

function closeAuthModal() {
  authModal.classList.add('hidden');
  document.getElementById('signup-error').classList.add('hidden');
  document.getElementById('login-error').classList.add('hidden');
}

function toggleAuth(type) {
  const signupCont = document.getElementById('signup-container');
  const loginCont = document.getElementById('login-container');
  if (type === 'signup') {
    signupCont.classList.remove('hidden');
    loginCont.classList.add('hidden');
  } else {
    signupCont.classList.add('hidden');
    loginCont.classList.remove('hidden');
  }
}

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = document.getElementById('signup-user').value;
  const pass = document.getElementById('signup-pass').value;

  try {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: user, password: pass})
    });
    const data = await res.json();
    
    if(res.ok) {
      isLoggedIn = true;
      authBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> <span>Logout</span>';
      closeAuthModal();
      celebrate();
      alert(`Welcome to CaloriX, ${user}! Your account has been created.`);
    } else {
      const errorEl = document.getElementById('signup-error');
      errorEl.innerText = data.error || "Registration failed.";
      errorEl.classList.remove('hidden');
    }
  } catch(err) {
    document.getElementById('signup-error').innerText = "Backend connection failed.";
    document.getElementById('signup-error').classList.remove('hidden');
  }
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = document.getElementById('login-user').value;
  const pass = document.getElementById('login-pass').value;

  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: user, password: pass})
    });
    const data = await res.json();

    if(res.ok) {
      isLoggedIn = true;
      authBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> <span>Logout</span>';
      closeAuthModal();
      celebrate();
      alert(`Welcome back, ${user}!`);
    } else {
      const errorEl = document.getElementById('login-error');
      errorEl.innerText = data.error || "Invalid credentials.";
      errorEl.classList.remove('hidden');
    }
  } catch(err) {
    document.getElementById('login-error').innerText = "Backend connection failed.";
    document.getElementById('login-error').classList.remove('hidden');
  }
});

// Feedback Form handler
feedbackForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = document.getElementById('feedback-text').value;

  try {
    const res = await fetch(`${API_BASE}/feedback`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ feedback: text })
    });
    if(res.ok) {
      document.getElementById('feedback-text').value = '';
      const msg = document.getElementById('feedback-msg');
      msg.classList.remove('hidden');
      setTimeout(() => msg.classList.add('hidden'), 3000);
    }
  } catch(err) {
    alert("Failed to submit feedback.");
  }
});
