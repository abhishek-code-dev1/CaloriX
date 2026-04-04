# CaloriX - Premium Health & Nutrition Tracker

CaloriX is a modern, responsive web application designed to help users track their nutrition, calculate BMI, and manage their daily calorie intake. It features a premium UI/UX with smooth animations and deep-indigo palette.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (installed with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd FitTrack
   ```

2. **Install dependencies:**
   The project is split into a `frontend` and a `backend`. You only need to install backend dependencies as the frontend is served as static files.
   ```bash
   npm install
   ```
   *Note: This will automatically run `npm install` in the `backend` folder via the root `postinstall` script.*

### Running the Application

To start the server (both backend and frontend):
```bash
npm start
```
The application will be available at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

- `frontend/`: The client-side application.
  - `index.html`: Main UI entry point.
  - `js/`: Application logic and API interactions.
  - `styles/`: CSS files (Vanilla CSS).
- `backend/`: The server-side API.
  - `server.js`: Express.js server and API endpoints.

## ✨ Features
- **BMI Calculator**: Real-time BMI calculation with visual categories.
- **Calorie Tracker**: Personal calorie target calculation based on goals (Cut, Bulk, Maintain).
- **Food Library**: Searchable database of healthy and unhealthy food options with calorie counts.
- **Premium Design**: Dark-mode indigo aesthetic with AOS animations and smooth transitions.
- **Responsive**: Fully optimized for Desktop, Tablet, and Mobile devices.

## 🛠️ Tech Stack
- **Frontend**: HTML5, Vanilla JavaScript, Vanilla CSS, [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Backend**: Node.js, Express.js
- **Icons**: FontAwesome

## 📄 License
This project is for educational purposes.
