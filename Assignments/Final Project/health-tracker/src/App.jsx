import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import FoodTracker from "./pages/FoodTracker";
import NutritionDiary from "./pages/NutritionDiary";
import ExerciseTracker from "./pages/ExerciseTracker";
import WaterTracker from "./pages/WaterTracker";
import "./App.css";
import "./styles.css";

function App() {
  // Initial data from localStorage
  const initialData = JSON.parse(localStorage.getItem("userData")) || null;
  const initialMeals = JSON.parse(localStorage.getItem("meals")) || [];
  const initialExercises = JSON.parse(localStorage.getItem("exercises")) || [];

  // State management
  const [userData, setUserData] = useState(initialData);
  const [meals, setMeals] = useState(initialMeals);
  const [exercises, setExercises] = useState(initialExercises);
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));

  // Sync state with localStorage
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  useEffect(() => {
    localStorage.setItem("exercises", JSON.stringify(exercises));
  }, [exercises]);

  // Authentication check
  const isAuthenticated = () => {
    return !!authToken;
  };

  // Handlers for data updates
  const handleHealthDataSubmit = (data) => {
    setUserData((prevData) => ({ ...prevData, ...data }));
  };

  const handleRegister = (registrationData) => {
    setUserData((prevData) => ({ ...prevData, ...registrationData }));
  };

  const addMeal = (meal) => {
    setMeals([...meals, { ...meal, name: `Meal ${meals.length + 1}` }]);
  };

  const addExercise = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  const clearUserData = () => {
    setUserData(null);
    localStorage.removeItem("userData");
  };

  const clearMeals = () => {
    setMeals([]);
    localStorage.removeItem("meals");
  };

  const clearExercises = () => {
    setExercises([]);
    localStorage.removeItem("exercises");
  };

  // App routes
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={<Register onRegister={handleRegister} />}
        />
        <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
        <Route
          path="/profile"
          element={
            isAuthenticated() ? (
              <Profile userData={userData} clearUserData={clearUserData} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated() ? (
              <Dashboard onHealthDataSubmit={handleHealthDataSubmit} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/food-tracker"
          element={
            isAuthenticated() ? (
              <FoodTracker addMeal={addMeal} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/nutrition-diary"
          element={
            isAuthenticated() ? (
              <NutritionDiary
                meals={meals}
                userData={userData}
                clearMeals={clearMeals}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/exercise-tracker"
          element={
            isAuthenticated() ? (
              <ExerciseTracker
                addExercise={addExercise}
                exercises={exercises}
                clearExercises={clearExercises}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/water-tracker"
          element={
            isAuthenticated() ? (
              <WaterTracker authToken={authToken} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
