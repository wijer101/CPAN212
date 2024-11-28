import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import FoodTracker from './pages/FoodTracker';
import NutritionDiary from './pages/NutritionDiary';
import ExerciseTracker from './pages/ExerciseTracker';
import './App.css';
import './styles.css';

function App() {
  const initialData = JSON.parse(localStorage.getItem("userData")) || null;
  const initialMeals = JSON.parse(localStorage.getItem("meals")) || [];
  const initialExercises = JSON.parse(localStorage.getItem("exercises")) || [];

  const [userData, setUserData] = useState(initialData);
  const [meals, setMeals] = useState(initialMeals);
  const [exercises, setExercises] = useState(initialExercises);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  useEffect(() => {
    localStorage.setItem("exercises", JSON.stringify(exercises));
  }, [exercises]);

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

  const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
  };
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/login" element={<Login userData={userData} />} />
        <Route path="/dashboard" element={<Dashboard onHealthDataSubmit={handleHealthDataSubmit} />} />
        <Route path="/profile" element={<Profile userData={userData} clearUserData={clearUserData} />} />
        <Route path="/food-tracker" element={<FoodTracker addMeal={addMeal} />} />
        <Route path="/nutrition-diary" element={<NutritionDiary meals={meals} userData={userData} clearMeals={clearMeals} />} />
        <Route path="/exercise-tracker" element={<ExerciseTracker addExercise={addExercise} exercises={exercises} clearExercises={clearExercises} />} />
        <Route path="/dashboard" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} />

      </Routes>
    </Router>
  );
}

export default App;
