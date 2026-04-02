// Constants
const fallbackFoodsDB = {
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

// Constants
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const API_BASE = isLocal ? 'http://localhost:3000/api' : 'https://calorix-vuq8.onrender.com/api';

// DOM Elements
const authBtn = document.getElementById('auth-btn');
const loginModal = document.getElementById('login-modal');
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
      mobileMenu.querySelector('i').classList.toggle('fa-bars');
      mobileMenu.querySelector('i').classList.toggle('fa-times');
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.querySelector('i').classList.add('fa-bars');
        mobileMenu.querySelector('i').classList.remove('fa-times');
      });
    });
  }

  fetchFoods();
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
      celebrate(); // Celeb on success
    } else {
      handleLocalCalories();
    }
  } catch (error) {
    console.error("Backend error, calculating locally:", error);
    handleLocalCalories();
  }
});

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
        <img src="${item.image}" alt="${item.name}" class="food-img" loading="lazy" referrerpolicy="no-referrer" />
        <span class="food-name">${item.name} <span style="opacity: 0.5; font-size: 0.8rem">(${item.unit})</span></span>
      </div>
      <span class="food-cal">${item.calories} kcal</span>
    `;
    container.appendChild(li);
  });
}

// Auth Handlers
function openLoginModal() {
  if (isLoggedIn) {
    isLoggedIn = false;
    authBtn.textContent = 'Login';
    alert("Logged out successfully.");
    return;
  }
  loginModal.classList.remove('hidden');
}

function closeLoginModal() {
  loginModal.classList.add('hidden');
  document.getElementById('login-error').classList.add('hidden');
}

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
    if(res.ok) {
      isLoggedIn = true;
      authBtn.textContent = 'Logout';
      closeLoginModal();
      alert(`Welcome back, ${user}!`);
    } else {
      document.getElementById('login-error').classList.remove('hidden');
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
