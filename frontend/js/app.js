// Constants
const API_BASE = 'https://calorix-vuq8.onrender.com';

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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  fetchFoods();
});

// Calculate BMI
bmiForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    weight: parseFloat(document.getElementById('bmi-weight').value),
    height: parseFloat(document.getElementById('bmi-height').value)
  };

  try {
    const response = await fetch(`${API_BASE}/bmi`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (response.ok) {
      document.getElementById('res-bmi').innerText = data.bmi;
      document.getElementById('res-category').innerText = data.bmiCategory;
      document.getElementById('bmi-results').classList.remove('hidden');
    } else {
      alert(data.error || "An error occurred.");
    }
  } catch (error) {
    console.error(error);
    alert("Connection to backend failed.");
  }
});

// Calculate Calories
calForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    age: parseInt(document.getElementById('cal-age').value),
    gender: document.getElementById('cal-gender').value,
    weight: parseFloat(document.getElementById('cal-weight').value),
    height: parseFloat(document.getElementById('cal-height').value),
    activityLevel: document.getElementById('cal-activity').value,
    goal: document.getElementById('cal-goal').value
  };

  try {
    const response = await fetch(`${API_BASE}/calories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (response.ok) {
      document.getElementById('res-maintenance').innerText = data.maintenanceCalories;
      document.getElementById('res-target').innerText = data.targetCalories;
      document.getElementById('res-recommendation').innerText = data.recommendation;
      document.getElementById('cal-results').classList.remove('hidden');
    } else {
      alert(data.error || "An error occurred.");
    }
  } catch (error) {
    console.error(error);
    alert("Connection to backend failed.");
  }
});

// Fetch Foods Data
async function fetchFoods() {
  try {
    const response = await fetch(`${API_BASE}/foods`);
    if(response.ok) {
      const data = await response.json();
      renderFoods('healthy-items', data.healthy);
      renderFoods('unhealthy-items', data.unhealthy);
    }
  } catch(err) {
    console.error("Failed to load foods:", err);
  }
}

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
