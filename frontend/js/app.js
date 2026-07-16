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
const feedbackForm = document.getElementById('feedback-form');

// New Calculator Elements
const bmiForm = document.getElementById('bmi-form');
const calForm = document.getElementById('cal-form');

// State
let isLoggedIn = false;
let allFoods = { healthy: [], unhealthy: [] };

// Auth verification helper
async function checkAuthStatus() {
  try {
    const res = await fetch(`${API_BASE}/auth/status`);
    if (res.ok) {
      const data = await res.json();
      const mobileAuthBtn = document.getElementById('mobile-auth-btn');
      if (data.loggedIn) {
        isLoggedIn = true;
        const displayName = data.name || data.username.split('@')[0];
        
        if (authBtn) {
          authBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> <span>Logout</span>';
        }
        if (mobileAuthBtn) {
          mobileAuthBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> <span>Logout</span>';
          mobileAuthBtn.title = `Logged in as ${displayName}`;
        }
        
        // Update welcome banner
        const welcomeBanner = document.getElementById('welcome-banner');
        const welcomeName = document.getElementById('welcome-name');
        if (welcomeBanner && welcomeName) {
          welcomeName.innerText = displayName;
          welcomeBanner.classList.remove('hidden');
        }
      } else {
        isLoggedIn = false;
        if (authBtn) {
          authBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> <span>Login</span>';
        }
        if (mobileAuthBtn) {
          mobileAuthBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> <span>Login</span>';
        }
        // Hide welcome banner
        const welcomeBanner = document.getElementById('welcome-banner');
        if (welcomeBanner) {
          welcomeBanner.classList.add('hidden');
        }
      }
    }
  } catch (err) {
    console.error("Error checking auth status:", err);
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Check auth session on load
  checkAuthStatus();

  // Attach navbar button event listener
  if (authBtn) {
    authBtn.addEventListener('click', async () => {
      if (isLoggedIn) {
        try {
          const res = await fetch(`${API_BASE}/auth/logout`, { method: 'POST' });
          if (res.ok) {
            isLoggedIn = false;
            authBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> <span>Login</span>';
            alert("Logged out successfully.");
            window.location.reload();
          }
        } catch (err) {
          console.error("Logout failed:", err);
          alert("Failed to log out. Try again.");
        }
      } else {
        window.location.href = `/login.html?redirect=${encodeURIComponent(window.location.pathname)}`;
      }
    });
  }

  // Mobile top-bar auth button click handler
  const mobileAuthBtn = document.getElementById('mobile-auth-btn');
  if (mobileAuthBtn) {
    mobileAuthBtn.addEventListener('click', async (e) => {
      if (isLoggedIn) {
        e.preventDefault(); // Stop redirection
        try {
          const res = await fetch(`${API_BASE}/auth/logout`, { method: 'POST' });
          if (res.ok) {
            isLoggedIn = false;
            mobileAuthBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> <span>Login</span>';
            alert("Logged out successfully.");
            window.location.reload();
          }
        } catch (err) {
          console.error("Logout failed:", err);
          alert("Failed to log out. Try again.");
        }
      }
    });
  }

  // Mobile Bottom Navigation Tab Spy
  const mobileTabs = document.querySelectorAll('.mobile-bottom-nav .mobile-nav-tab');
  
  mobileTabs.forEach(tab => {
    const href = tab.getAttribute('href');
    if (href.startsWith('#')) {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 70;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          
          mobileTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
        }
      });
    }
  });

  // Scroll Spy to set active tab as user scrolls
  window.addEventListener('scroll', () => {
    if (window.innerWidth >= 768) return;
    
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    
    const sections = [
      { id: 'home', tabId: 'tab-home' },
      { id: 'foods', tabId: 'tab-foods' }
    ];
    
    let activeTabId = 'tab-home';
    
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        const offsetTop = el.offsetTop - 120;
        const offsetBottom = offsetTop + el.offsetHeight;
        if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
          activeTabId = section.tabId;
          break;
        }
      }
    }
    
    mobileTabs.forEach(tab => {
      if (tab.id === activeTabId) {
        tab.classList.add('active');
      } else if (tab.getAttribute('href').startsWith('#')) {
        tab.classList.remove('active');
      }
    });
  });

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
      const active = navLinks.classList.toggle('active');
      document.body.classList.toggle('menu-open');
      const icon = mobileMenu.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
      
      mobileMenu.setAttribute('aria-expanded', active ? 'true' : 'false');
      mobileMenu.setAttribute('aria-label', active ? 'Close navigation menu' : 'Toggle navigation menu');
    });

    // Support keyboard activation (Enter key)
    mobileMenu.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        mobileMenu.click();
      }
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        const icon = mobileMenu.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
        mobileMenu.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-label', 'Toggle navigation menu');
      });
    });
  }

  // Unit conversion state trackers
  let bmiUnit = 'metric';
  let calUnit = 'metric';

  const bmiWeightMetric = document.getElementById('bmi-weight');
  const bmiWeightImperial = document.getElementById('bmi-weight-lbs');
  const bmiHeightMetric = document.getElementById('bmi-height');
  const bmiHeightImperialGroup = document.getElementById('bmi-height-imperial-group');
  const bmiWeightLabel = document.getElementById('bmi-weight-label-text');
  const bmiHeightLabel = document.getElementById('bmi-height-label-text');
  
  const bmiBtnMetric = document.getElementById('bmi-unit-metric');
  const bmiBtnImperial = document.getElementById('bmi-unit-imperial');

  function updateBmiUnitUI() {
    if (bmiUnit === 'metric') {
      bmiBtnMetric.classList.add('active');
      bmiBtnImperial.classList.remove('active');
      
      bmiWeightMetric.classList.remove('hidden');
      bmiWeightMetric.required = true;
      bmiWeightImperial.classList.add('hidden');
      bmiWeightImperial.required = false;

      bmiHeightMetric.classList.remove('hidden');
      bmiHeightMetric.required = true;
      bmiHeightImperialGroup.classList.add('hidden');
      document.getElementById('bmi-height-ft').required = false;
      document.getElementById('bmi-height-in').required = false;

      bmiWeightLabel.innerText = "Weight (kg)";
      bmiHeightLabel.innerText = "Height (cm)";
    } else {
      bmiBtnMetric.classList.remove('active');
      bmiBtnImperial.classList.add('active');
      
      bmiWeightMetric.classList.add('hidden');
      bmiWeightMetric.required = false;
      bmiWeightImperial.classList.remove('hidden');
      bmiWeightImperial.required = true;

      bmiHeightMetric.classList.add('hidden');
      bmiHeightMetric.required = false;
      bmiHeightImperialGroup.classList.remove('hidden');
      document.getElementById('bmi-height-ft').required = true;
      document.getElementById('bmi-height-in').required = true;

      bmiWeightLabel.innerText = "Weight (lb)";
      bmiHeightLabel.innerText = "Height (ft / in)";
    }
  }

  window.toggleBmiUnit = (unit) => {
    bmiUnit = unit;
    updateBmiUnitUI();
  };

  const calWeightMetric = document.getElementById('cal-weight');
  const calWeightImperial = document.getElementById('cal-weight-lbs');
  const calHeightMetric = document.getElementById('cal-height');
  const calHeightImperialGroup = document.getElementById('cal-height-imperial-group');
  const calWeightLabel = document.getElementById('cal-weight-label-text');
  const calHeightLabel = document.getElementById('cal-height-label-text');
  
  const calBtnMetric = document.getElementById('cal-unit-metric');
  const calBtnImperial = document.getElementById('cal-unit-imperial');

  function updateCalUnitUI() {
    if (calUnit === 'metric') {
      calBtnMetric.classList.add('active');
      calBtnImperial.classList.remove('active');
      
      calWeightMetric.classList.remove('hidden');
      calWeightMetric.required = true;
      calWeightImperial.classList.add('hidden');
      calWeightImperial.required = false;

      calHeightMetric.classList.remove('hidden');
      calHeightMetric.required = true;
      calHeightImperialGroup.classList.add('hidden');
      document.getElementById('cal-height-ft').required = false;
      document.getElementById('cal-height-in').required = false;

      calWeightLabel.innerText = "Weight (kg)";
      calHeightLabel.innerText = "Height (cm)";
    } else {
      calBtnMetric.classList.remove('active');
      calBtnImperial.classList.add('active');
      
      calWeightMetric.classList.add('hidden');
      calWeightMetric.required = false;
      calWeightImperial.classList.remove('hidden');
      calWeightImperial.required = true;

      calHeightMetric.classList.add('hidden');
      calHeightMetric.required = false;
      calHeightImperialGroup.classList.remove('hidden');
      document.getElementById('cal-height-ft').required = true;
      document.getElementById('cal-height-in').required = true;

      calWeightLabel.innerText = "Weight (lb)";
      calHeightLabel.innerText = "Height (ft / in)";
    }
  }

  window.toggleCalUnit = (unit) => {
    calUnit = unit;
    updateCalUnitUI();
  };

  const launchBmi = document.getElementById('launch-bmi');
  const launchCalories = document.getElementById('launch-calories');
  const bmiModal = document.getElementById('bmi-calculator-modal');
  const caloriesModal = document.getElementById('calories-calculator-modal');
  
  const bmiBackBtn = document.getElementById('bmi-back-btn');
  const caloriesBackBtn = document.getElementById('calories-back-btn');

  if (launchBmi && bmiModal) {
    launchBmi.addEventListener('click', () => {
      bmiModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      document.getElementById('bmi-form').reset();
      document.getElementById('bmi-results').classList.add('hidden');
      document.getElementById('bmi-weight-error').classList.remove('visible');
      document.getElementById('bmi-height-error').classList.remove('visible');
      bmiUnit = 'metric';
      updateBmiUnitUI();
    });
  }

  if (bmiBackBtn && bmiModal) {
    bmiBackBtn.addEventListener('click', () => {
      bmiModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (launchCalories && caloriesModal) {
    launchCalories.addEventListener('click', () => {
      caloriesModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      document.getElementById('cal-form').reset();
      document.getElementById('cal-results').classList.add('hidden');
      document.getElementById('cal-weight-error').classList.remove('visible');
      document.getElementById('cal-height-error').classList.remove('visible');
      calUnit = 'metric';
      updateCalUnitUI();
    });
  }

  if (caloriesBackBtn && caloriesModal) {
    caloriesBackBtn.addEventListener('click', () => {
      caloriesModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  const chatbotTab = document.getElementById('tab-chatbot');
  if (chatbotTab) {
    chatbotTab.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.botpressWebChat) {
        window.botpressWebChat.sendEvent({ type: 'toggle' });
      } else if (window.botpress) {
        window.botpress.toggle();
      } else {
        const bpButton = document.querySelector('iframe[title="webchat-launcher"]') || 
                         document.querySelector('[class*="bp-widget"]') ||
                         document.querySelector('[id*="bp-widget"]');
        if (bpButton) {
          bpButton.click();
        } else {
          alert("Chatbot is loading, please try again in a moment!");
        }
      }
    });
  }

  // Step Counter unit state tracker
  let stepsUnit = 'metric';

  const stepsWeightMetric = document.getElementById('steps-weight');
  const stepsWeightImperial = document.getElementById('steps-weight-lbs');
  const stepsHeightMetric = document.getElementById('steps-height');
  const stepsHeightImperialGroup = document.getElementById('steps-height-imperial-group');
  const stepsWeightLabel = document.getElementById('steps-weight-label-text');
  const stepsHeightLabel = document.getElementById('steps-height-label-text');

  const stepsBtnMetric = document.getElementById('steps-unit-metric');
  const stepsBtnImperial = document.getElementById('steps-unit-imperial');

  function updateStepsUnitUI() {
    if (stepsUnit === 'metric') {
      stepsBtnMetric.classList.add('active');
      stepsBtnImperial.classList.remove('active');
      
      stepsWeightMetric.classList.remove('hidden');
      stepsWeightMetric.required = true;
      stepsWeightImperial.classList.add('hidden');
      stepsWeightImperial.required = false;

      stepsHeightMetric.classList.remove('hidden');
      stepsHeightMetric.required = true;
      stepsHeightImperialGroup.classList.add('hidden');
      document.getElementById('steps-height-ft').required = false;
      document.getElementById('steps-height-in').required = false;

      stepsWeightLabel.innerText = "Weight (kg)";
      stepsHeightLabel.innerText = "Height (cm)";
    } else {
      stepsBtnMetric.classList.remove('active');
      stepsBtnImperial.classList.add('active');
      
      stepsWeightMetric.classList.add('hidden');
      stepsWeightMetric.required = false;
      stepsWeightImperial.classList.remove('hidden');
      stepsWeightImperial.required = true;

      stepsHeightMetric.classList.add('hidden');
      stepsHeightMetric.required = false;
      stepsHeightImperialGroup.classList.remove('hidden');
      document.getElementById('steps-height-ft').required = true;
      document.getElementById('steps-height-in').required = true;

      stepsWeightLabel.innerText = "Weight (lb)";
      stepsHeightLabel.innerText = "Height (ft / in)";
    }
  }

  if (stepsBtnMetric && stepsBtnImperial) {
    stepsBtnMetric.addEventListener('click', () => { stepsUnit = 'metric'; updateStepsUnitUI(); });
    stepsBtnImperial.addEventListener('click', () => { stepsUnit = 'imperial'; updateStepsUnitUI(); });
  }

  const launchSteps = document.getElementById('launch-steps');
  const stepsModal = document.getElementById('steps-calculator-modal');
  const stepsBackBtn = document.getElementById('steps-back-btn');

  if (launchSteps && stepsModal) {
    launchSteps.addEventListener('click', () => {
      stepsModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      document.getElementById('steps-form').reset();
      stepsUnit = 'metric';
      updateStepsUnitUI();
      resetLiveTracker();
    });
  }

  if (stepsBackBtn && stepsModal) {
    stepsBackBtn.addEventListener('click', () => {
      stepsModal.classList.remove('active');
      document.body.style.overflow = '';
      resetLiveTracker();
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

  if (!isLoggedIn) {
    window.location.href = `/login.html?redirect=${encodeURIComponent(window.location.pathname + '#launch-bmi')}`;
    return;
  }

  const weightErr = document.getElementById('bmi-weight-error');
  const heightErr = document.getElementById('bmi-height-error');
  weightErr.classList.remove('visible');
  heightErr.classList.remove('visible');

  let weight, height;
  let isValid = true;

  if (bmiUnit === 'metric') {
    weight = parseFloat(document.getElementById('bmi-weight').value);
    height = parseFloat(document.getElementById('bmi-height').value);
    
    if (!weight || weight <= 0) {
      weightErr.innerText = "Weight must be a valid positive number.";
      weightErr.classList.add('visible');
      isValid = false;
    }
    if (!height || height <= 0) {
      heightErr.innerText = "Height must be a valid positive number.";
      heightErr.classList.add('visible');
      isValid = false;
    }
  } else {
    const weightLbs = parseFloat(document.getElementById('bmi-weight-lbs').value);
    const feet = parseFloat(document.getElementById('bmi-height-ft').value);
    const inches = parseFloat(document.getElementById('bmi-height-in').value || 0);

    if (!weightLbs || weightLbs <= 0) {
      weightErr.innerText = "Weight in lbs must be a valid positive number.";
      weightErr.classList.add('visible');
      isValid = false;
    }
    if (!feet || feet <= 0 || inches < 0 || inches >= 12) {
      heightErr.innerText = "Height in feet and inches must be valid.";
      heightErr.classList.add('visible');
      isValid = false;
    }

    if (isValid) {
      weight = parseFloat((weightLbs * 0.45359237).toFixed(2));
      const totalInches = (feet * 12) + inches;
      height = parseFloat((totalInches * 2.54).toFixed(2));
    }
  }

  if (!isValid) return;

  const payload = { weight, height };

  const handleLocalBMI = () => {
    const heightInMeters = height / 100;
    const bmiNum = weight / (heightInMeters * heightInMeters);
    let bmiCategory = 'Normal weight';
    if (bmiNum < 18.5) bmiCategory = 'Underweight';
    else if (bmiNum >= 25 && bmiNum < 30) bmiCategory = 'Overweight';
    else if (bmiNum >= 30) bmiCategory = 'Obesity';

    updateBMIResult(bmiNum.toFixed(1), bmiCategory);
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

  // Dynamic Guidance logic
  let heightCm;
  if (bmiUnit === 'metric') {
    heightCm = parseFloat(document.getElementById('bmi-height').value);
  } else {
    const feet = parseFloat(document.getElementById('bmi-height-ft').value);
    const inches = parseFloat(document.getElementById('bmi-height-in').value || 0);
    heightCm = ((feet * 12) + inches) * 2.54;
  }

  const heightMeters = heightCm / 100;
  const minWeightKg = (18.5 * (heightMeters * heightMeters)).toFixed(1);
  const maxWeightKg = (24.9 * (heightMeters * heightMeters)).toFixed(1);

  let guidanceHtml = '';
  if (bmiUnit === 'metric') {
    guidanceHtml = `For your height of <strong>${Math.round(heightCm)} cm</strong>, the healthy weight range is <strong>${minWeightKg} kg to ${maxWeightKg} kg</strong>. A healthy BMI is between 18.5 and 24.9.`;
  } else {
    const minWeightLbs = Math.round(minWeightKg / 0.45359237);
    const maxWeightLbs = Math.round(maxWeightKg / 0.45359237);
    const feet = Math.floor(heightCm / 30.48);
    const inches = Math.round((heightCm / 2.54) - (feet * 12));
    guidanceHtml = `For your height of <strong>${feet} ft ${inches} in</strong>, the healthy weight range is <strong>${minWeightLbs} lb to ${maxWeightLbs} lb</strong>. A healthy BMI is between 18.5 and 24.9.`;
  }
  
  document.getElementById('bmi-guidance').innerHTML = guidanceHtml;

  // Update Bento Quick Stats Card
  const statsBmi = document.getElementById('stats-bmi');
  const statsCat = document.getElementById('stats-category');
  if (statsBmi) statsBmi.innerText = bmi;
  if (statsCat) statsCat.innerText = category;
}

// Calculate Calories
calForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!isLoggedIn) {
    window.location.href = `/login.html?redirect=${encodeURIComponent(window.location.pathname + '#launch-calories')}`;
    return;
  }

  const weightErr = document.getElementById('cal-weight-error');
  const heightErr = document.getElementById('cal-height-error');
  const ageErr = document.getElementById('cal-age-error');
  weightErr.classList.remove('visible');
  heightErr.classList.remove('visible');
  ageErr.classList.remove('visible');

  const age = parseInt(document.getElementById('cal-age').value);
  const gender = document.getElementById('cal-gender').value;
  const activityLevel = document.getElementById('cal-activity').value;
  const goal = document.getElementById('cal-goal').value;

  let weight, height;
  let isValid = true;

  if (age < 10 || age > 100) {
    ageErr.classList.add('visible');
    isValid = false;
  }

  if (calUnit === 'metric') {
    weight = parseFloat(document.getElementById('cal-weight').value);
    height = parseFloat(document.getElementById('cal-height').value);
    
    if (!weight || weight <= 0) {
      weightErr.innerText = "Weight must be a valid positive number.";
      weightErr.classList.add('visible');
      isValid = false;
    }
    if (!height || height <= 0) {
      heightErr.innerText = "Height must be a valid positive number.";
      heightErr.classList.add('visible');
      isValid = false;
    }
  } else {
    const weightLbs = parseFloat(document.getElementById('cal-weight-lbs').value);
    const feet = parseFloat(document.getElementById('cal-height-ft').value);
    const inches = parseFloat(document.getElementById('cal-height-in').value || 0);

    if (!weightLbs || weightLbs <= 0) {
      weightErr.innerText = "Weight in lbs must be a valid positive number.";
      weightErr.classList.add('visible');
      isValid = false;
    }
    if (!feet || feet <= 0 || inches < 0 || inches >= 12) {
      heightErr.innerText = "Height in feet and inches must be valid.";
      heightErr.classList.add('visible');
      isValid = false;
    }

    if (isValid) {
      weight = parseFloat((weightLbs * 0.45359237).toFixed(2));
      const totalInches = (feet * 12) + inches;
      height = parseFloat((totalInches * 2.54).toFixed(2));
    }
  }

  if (!isValid) return;

  const payload = { age, gender, weight, height, activityLevel, goal };

  const handleLocalCalories = () => {
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

    updateCalorieResults(maintenanceCalories, targetCalories, recommendation);
  };

  try {
    const response = await fetch(`${API_BASE}/calories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      const data = await response.json();
      updateCalorieResults(data.maintenanceCalories, data.targetCalories, data.recommendation);
      celebrate();
    } else {
      handleLocalCalories();
    }
  } catch (error) {
    console.error("Backend error, calculating locally:", error);
    handleLocalCalories();
  }
});

function updateCalorieResults(maintenance, target, recommendation) {
  document.getElementById('res-maintenance').innerText = maintenance;
  document.getElementById('res-target').innerText = target;
  document.getElementById('res-recommendation').innerText = recommendation;
  document.getElementById('cal-results').classList.remove('hidden');

  // Update Bento Quick Stats Card
  const statsTarget = document.getElementById('stats-target');
  const statsMaint = document.getElementById('stats-maintenance');
  if (statsTarget) statsTarget.innerText = `${target} kcal`;
  if (statsMaint) statsMaint.innerText = `${maintenance} kcal`;
}

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
        <img src="${item.image}" alt="${item.name}" class="food-img" loading="lazy" decoding="async" onerror="this.src='https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=100'" />
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
    fetch(`${API_BASE}/auth/logout`, { method: 'POST' }).then(() => {
      isLoggedIn = false;
      const authBtnSpan = authBtn.querySelector('span');
      const authBtnIcon = authBtn.querySelector('i');
      if (authBtnSpan) authBtnSpan.innerText = 'Login';
      if (authBtnIcon) {
        authBtnIcon.className = 'fas fa-sign-in-alt';
      }
      const welcome = document.getElementById('welcome-banner');
      if (welcome) welcome.classList.add('hidden');
      alert("Logged out successfully.");
    }).catch(err => {
      // Fallback
      isLoggedIn = false;
      authBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> <span>Login</span>';
      const welcome = document.getElementById('welcome-banner');
      if (welcome) welcome.classList.add('hidden');
      alert("Logged out successfully.");
    });
    return;
  }
  window.location.href = '/login.html';
}



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

// Live Step Tracker States & Controller
let liveTracking = false;
let stepCount = 0;
let trackInterval = null;
let accelerometerActive = false;
let lastStepTime = 0;
let accelThreshold = 2.2; // peak threshold over gravity 9.8

// Reset Live Tracker State
function resetLiveTracker() {
  if (trackInterval) clearInterval(trackInterval);
  trackInterval = null;
  
  if (accelerometerActive) {
    window.removeEventListener('devicemotion', handleDeviceMotion);
    accelerometerActive = false;
  }
  
  liveTracking = false;
  stepCount = 0;
  
  const valEl = document.getElementById('live-steps-val');
  if (valEl) valEl.innerText = '0';

  const dot = document.getElementById('live-status-dot');
  const txt = document.getElementById('live-status-text');
  if (dot) {
    dot.style.backgroundColor = 'var(--text-muted)';
    dot.style.animation = 'none';
  }
  if (txt) {
    txt.innerText = 'Ready to Track';
    txt.style.color = 'var(--text-muted)';
  }

  const btn = document.getElementById('steps-toggle-btn');
  if (btn) {
    btn.innerHTML = '<i class="fas fa-play" aria-hidden="true"></i> Start Live Tracking';
    btn.style.backgroundColor = 'var(--primary-color)';
    btn.style.borderColor = 'var(--primary-color)';
  }

  const results = document.getElementById('steps-results');
  if (results) results.classList.add('hidden');
}

// Device Motion Event Handler
function handleDeviceMotion(e) {
  if (!liveTracking) return;
  
  const acc = e.accelerationIncludingGravity || e.acceleration;
  if (!acc || acc.x === null || acc.y === null || acc.z === null) {
    console.warn("No accelerometer data reporting. Falling back to cadence simulation.");
    window.removeEventListener('devicemotion', handleDeviceMotion);
    accelerometerActive = false;
    startStepsSimulation();
    return;
  }

  const mag = Math.sqrt(acc.x * acc.x + acc.y * acc.y + acc.z * acc.z);
  const diff = Math.abs(mag - 9.81);

  if (diff > accelThreshold) {
    const now = Date.now();
    if (now - lastStepTime > 350) { // 350ms cooldown
      stepCount++;
      lastStepTime = now;
      
      const valEl = document.getElementById('live-steps-val');
      if (valEl) valEl.innerText = stepCount.toLocaleString();
      
      calculateAndSyncLiveMetrics();
    }
  }
}

// Start Accelerometer Tracking
function startAccelerometerTracking() {
  lastStepTime = Date.now();
  window.addEventListener('devicemotion', handleDeviceMotion);
  accelerometerActive = true;
  
  const dot = document.getElementById('live-status-dot');
  const txt = document.getElementById('live-status-text');
  if (dot) {
    dot.style.backgroundColor = '#27ae60';
    dot.style.animation = 'pulse 1.5s infinite';
  }
  if (txt) {
    txt.innerText = 'Live Tracking (Sensor)';
    txt.style.color = '#27ae60';
  }
}

// Start Simulated Cadence Fallback (for Desktop/Testings)
function startStepsSimulation() {
  const pace = document.getElementById('steps-pace').value;
  let intervalMs = 600; // default moderate pace: ~100 steps/min
  
  if (pace === 'slow') {
    intervalMs = 750; // ~80 steps/min
  } else if (pace === 'moderate') {
    intervalMs = 600; // ~100 steps/min
  } else if (pace === 'fast') {
    intervalMs = 500; // ~120 steps/min
  }

  const dot = document.getElementById('live-status-dot');
  const txt = document.getElementById('live-status-text');
  if (dot) {
    dot.style.backgroundColor = 'var(--secondary-color)';
    dot.style.animation = 'pulse 1.5s infinite';
  }
  if (txt) {
    txt.innerText = 'Live Tracking (Simulated)';
    txt.style.color = 'var(--secondary-color)';
  }

  trackInterval = setInterval(() => {
    stepCount++;
    const valEl = document.getElementById('live-steps-val');
    if (valEl) valEl.innerText = stepCount.toLocaleString();
    
    calculateAndSyncLiveMetrics();
  }, intervalMs);
}

// Live Calculations on Step increment
function calculateAndSyncLiveMetrics() {
  let weight, height;
  const gender = document.getElementById('steps-gender').value;
  const pace = document.getElementById('steps-pace').value;

  if (stepsUnit === 'metric') {
    weight = parseFloat(document.getElementById('steps-weight').value || 70);
    height = parseFloat(document.getElementById('steps-height').value || 175);
  } else {
    const weightLbs = parseFloat(document.getElementById('steps-weight-lbs').value || 154);
    const feet = parseFloat(document.getElementById('steps-height-ft').value || 5);
    const inches = parseFloat(document.getElementById('steps-height-in').value || 9);
    weight = weightLbs * 0.45359237;
    height = ((feet * 12) + inches) * 2.54;
  }

  const isMale = gender === 'male';
  const strideFactor = isMale ? 0.415 : 0.413;
  const strideLengthMeters = (height * strideFactor) / 100;
  const distanceKm = (stepCount * strideLengthMeters) / 1000;

  let cadence = 100;
  let met = 3.3;
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

  const durationMinutes = stepCount / cadence;
  const caloriesBurned = Math.round(met * 3.5 * weight / 200 * durationMinutes);

  let displayDistance = distanceKm;
  let displayDistanceUnit = 'km';

  if (stepsUnit === 'imperial') {
    displayDistance = distanceKm * 0.621371;
    displayDistanceUnit = 'miles';
  }

  const distEl = document.getElementById('res-steps-distance');
  const distUnitEl = document.getElementById('res-steps-distance-unit');
  const calEl = document.getElementById('res-steps-calories');
  const recEl = document.getElementById('res-steps-recommendation');

  if (distEl) distEl.innerText = displayDistance.toFixed(2);
  if (distUnitEl) distUnitEl.innerText = displayDistanceUnit;
  if (calEl) calEl.innerText = caloriesBurned;
  
  if (recEl) {
    recEl.innerHTML = `You completed <strong>${stepCount.toLocaleString()} steps</strong>. Estimated covered distance is <strong>${displayDistance.toFixed(2)} ${displayDistanceUnit}</strong> in about <strong>${Math.round(durationMinutes)} minutes</strong>!`;
  }

  const results = document.getElementById('steps-results');
  if (results) results.classList.remove('hidden');
}

// Final Save to backend
async function saveLiveStepsSession() {
  let weight, height;
  const gender = document.getElementById('steps-gender').value;
  const pace = document.getElementById('steps-pace').value;

  if (stepsUnit === 'metric') {
    weight = parseFloat(document.getElementById('steps-weight').value || 70);
    height = parseFloat(document.getElementById('steps-height').value || 175);
  } else {
    const weightLbs = parseFloat(document.getElementById('steps-weight-lbs').value || 154);
    const feet = parseFloat(document.getElementById('steps-height-ft').value || 5);
    const inches = parseFloat(document.getElementById('steps-height-in').value || 9);
    weight = weightLbs * 0.45359237;
    height = ((feet * 12) + inches) * 2.54;
  }

  const payload = { steps: stepCount, pace, weight, height, gender };

  try {
    const res = await fetch(`${API_BASE}/steps`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const data = await res.json();
      
      const statsSteps = document.getElementById('stats-steps');
      const statsBurned = document.getElementById('stats-burned');
      
      if (statsSteps) {
        statsSteps.innerText = `${stepCount.toLocaleString()} steps`;
      }
      if (statsBurned) {
        statsBurned.innerText = `${data.caloriesBurned} kcal`;
      }
      
      celebrate();
      alert(`Success! Logged active walk of ${stepCount.toLocaleString()} steps and ${data.caloriesBurned} kcal active burn.`);
    }
  } catch (err) {
    console.error("Failed to save steps session in backend:", err);
  }
}

// Start / Stop State Machine Trigger
const stepsToggleBtn = document.getElementById('steps-toggle-btn');
if (stepsToggleBtn) {
  stepsToggleBtn.addEventListener('click', async () => {
    if (!isLoggedIn) {
      window.location.href = `/login.html?redirect=${encodeURIComponent(window.location.pathname + '#launch-steps')}`;
      return;
    }

    if (!liveTracking) {
      liveTracking = true;
      stepCount = 0;
      document.getElementById('live-steps-val').innerText = '0';
      document.getElementById('steps-results').classList.remove('hidden');
      
      stepsToggleBtn.innerHTML = '<i class="fas fa-stop-circle" aria-hidden="true"></i> Stop Tracking';
      stepsToggleBtn.style.backgroundColor = '#e74c3c';
      stepsToggleBtn.style.borderColor = '#e74c3c';

      if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
        try {
          const state = await DeviceMotionEvent.requestPermission();
          if (state === 'granted') {
            startAccelerometerTracking();
          } else {
            startStepsSimulation();
          }
        } catch (err) {
          console.warn("DeviceMotion permission check failed, fallback to simulation:", err);
          startStepsSimulation();
        }
      } else {
        if (typeof DeviceMotionEvent !== 'undefined') {
          startAccelerometerTracking();
        } else {
          startStepsSimulation();
        }
      }
    } else {
      liveTracking = false;
      
      if (trackInterval) clearInterval(trackInterval);
      trackInterval = null;
      
      if (accelerometerActive) {
        window.removeEventListener('devicemotion', handleDeviceMotion);
        accelerometerActive = false;
      }

      stepsToggleBtn.innerHTML = '<i class="fas fa-redo" aria-hidden="true"></i> Start Now';
      stepsToggleBtn.style.backgroundColor = 'var(--primary-color)';
      stepsToggleBtn.style.borderColor = 'var(--primary-color)';

      const dot = document.getElementById('live-status-dot');
      const txt = document.getElementById('live-status-text');
      if (dot) {
        dot.style.backgroundColor = 'var(--text-muted)';
        dot.style.animation = 'none';
      }
      if (txt) {
        txt.innerText = 'Session Logged';
        txt.style.color = 'var(--text-muted)';
      }

      if (stepCount > 0) {
        await saveLiveStepsSession();
      } else {
        alert("No steps registered. Walk around to record stats before stopping!");
        resetLiveTracker();
      }
    }
  });
}

