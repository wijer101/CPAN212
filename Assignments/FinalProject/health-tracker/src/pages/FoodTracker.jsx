import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FoodTracker({ addMeal }) {
  const [carbs, setCarbs] = useState(0);
  const [fats, setFats] = useState(0);
  const [protein, setProtein] = useState(0);

  const navigate = useNavigate();

  // Calculate calories based on input
  const calculateCalories = () => carbs * 4 + fats * 9 + protein * 4;

  const handleSubmit = () => {
    const meal = {
      carbs,
      fats,
      protein,
      calories: calculateCalories(),
    };
    addMeal(meal);
    // Navigate to Nutrition Diary page
    navigate("/nutrition-diary");
  };

  return (
    <div className="container">
      <h1>Food Tracker</h1>

      <div>
        <label>
          Carbohydrates (g):
          <input
            type="number"
            value={carbs}
            onChange={(e) => setCarbs(parseFloat(e.target.value) || 0)}
          />
        </label>

        <label>
          Fats (g):
          <input
            type="number"
            value={fats}
            onChange={(e) => setFats(parseFloat(e.target.value) || 0)}
          />
        </label>

        <label>
          Protein (g):
          <input
            type="number"
            value={protein}
            onChange={(e) => setProtein(parseFloat(e.target.value) || 0)}
          />
        </label>
      </div>

      <h2>Total Calories: {calculateCalories()} kcal</h2>
      <button onClick={handleSubmit}>Submit Meal</button>
    </div>
  );
}

export default FoodTracker;
