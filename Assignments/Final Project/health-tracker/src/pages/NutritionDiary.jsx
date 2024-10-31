import React from 'react';
import Navbar from '../components/Navbar';

function NutritionDiary({ meals, userData, clearMeals }) {
  const totalMacros = meals.reduce(
    (totals, meal) => {
      totals.carbs += meal.carbs;
      totals.fats += meal.fats;
      totals.protein += meal.protein;
      return totals;
    },
    { carbs: 0, fats: 0, protein: 0 }
  );

  return (
    <div className="container">
      <Navbar />
      <h1>Nutrition Diary</h1>

      {userData && userData.macroGoals && (
        <div>
          <h2>Daily Macronutrient Goals</h2>
          <p><strong>Carbohydrate Goal:</strong> {userData.macroGoals.carbGoal}g</p>
          <p><strong>Fat Goal:</strong> {userData.macroGoals.fatGoal}g</p>
          <p><strong>Protein Goal:</strong> {userData.macroGoals.proteinGoal}g</p>
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <h2>Running Total of Macronutrients</h2>
        <p><strong>Total Carbohydrates:</strong> {totalMacros.carbs}g</p>
        <p><strong>Total Fats:</strong> {totalMacros.fats}g</p>
        <p><strong>Total Protein:</strong> {totalMacros.protein}g</p>
      </div>

      <h2>Logged Meals</h2>
      {meals.length === 0 ? (
        <p>No meals recorded yet.</p>
      ) : (
        <ul>
          {meals.map((meal, index) => (
            <li key={index} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <h3>{meal.name}</h3>
              <p><strong>Carbohydrates:</strong> {meal.carbs}g</p>
              <p><strong>Fats:</strong> {meal.fats}g</p>
              <p><strong>Protein:</strong> {meal.protein}g</p>
              <p><strong>Calories:</strong> {meal.calories} kcal</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearMeals} style={styles.clearButton}>Clear Nutrition Diary</button>
    </div>
  );
}

const styles = {
  clearButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#d9534f',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default NutritionDiary;
