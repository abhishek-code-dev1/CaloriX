// Constants
const fallbackFoodsDB = {
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

// Diet Planner Logic - Simplified for Saarthi AI
const generateBtn = document.getElementById('generate-diet-btn');
if (generateBtn) {
  generateBtn.addEventListener('click', () => {
    celebrate();

    // 1. Gather all user details from the form
    const age = document.getElementById('cal-age').value;
    const gender = document.getElementById('cal-gender').value;
    const weight = document.getElementById('cal-weight').value;
    const height = document.getElementById('cal-height').value;
    const activity = document.getElementById('cal-activity').options[document.getElementById('cal-activity').selectedIndex].text;
    const goal = document.getElementById('cal-goal').options[document.getElementById('cal-goal').selectedIndex].text;
    const targetKcal = document.getElementById('res-target').innerText;

    // 2. Format a clear prompt for Saarthi
    const detailString = `Hi Saarthi! Here are my details: 
- Age: ${age}
- Gender: ${gender}
- Weight: ${weight}kg
- Height: ${height}cm
- Activity Level: ${activity}
- My Goal: ${goal}
- Target Intake: ${targetKcal} kcal/day

Please generate a personalized diet plan for me.`;

    // 3. Open Saarthi and Send the data
    if (window.botpress) {
      window.botpress.open();
      // We use a small timeout to ensure the window is open before sending the prompt
      setTimeout(() => {
        window.botpress.sendPayload({
          type: 'text',
          text: detailString
        });
      }, 500);
    } else {
      alert("Saarthi AI is loading... Please wait a moment.");
    }
  });
}



// Fetch Foods Data
async function fetchFoods() {
  try {
    const response = await fetch(`${API_BASE}/foods?v=${Date.now()}`);
    if (response.ok) {
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
  } catch (err) {
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
        <img src="${item.image}" alt="${item.name}" class="food-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=100'" />
        <span class="food-name">${item.name} <span style="opacity: 0.5; font-size: 0.8rem">(${item.unit})</span></span>
      </div>
      <span class="food-cal">${item.calories} kcal ${item.link ? `<a href="${item.link}" target="_blank" title="Nutrition Info" style="font-size: 0.8rem; margin-left: 5px; color: var(--primary-color)"><i class="fas fa-info-circle"></i></a>` : ''}</span>
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: user, password: pass })
    });
    const data = await res.json();

    if (res.ok) {
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
  } catch (err) {
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: user, password: pass })
    });
    const data = await res.json();

    if (res.ok) {
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
  } catch (err) {
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ feedback: text })
    });
    if (res.ok) {
      document.getElementById('feedback-text').value = '';
      const msg = document.getElementById('feedback-msg');
      msg.classList.remove('hidden');
      setTimeout(() => msg.classList.add('hidden'), 3000);
    }
  } catch (err) {
    alert("Failed to submit feedback.");
  }
});

