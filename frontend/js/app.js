// Constants
const fallbackFoodsDB = {
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
