import React, { useState } from "react";

function ExerciseTracker({ addExercise, exercises, clearExercises }) {
  const [exerciseType, setExerciseType] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("Medium");
  const [caloriesBurned, setCaloriesBurned] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      exerciseType,
      duration: parseFloat(duration),
      intensity,
      caloriesBurned: parseFloat(caloriesBurned),
    };
    addExercise(exercise);
    setExerciseType("");
    setDuration("");
    setIntensity("Medium");
    setCaloriesBurned("");
  };

  return (
    <div className="container">
      <h1>Exercise Tracker</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Exercise Type:
          <input
            type="text"
            value={exerciseType}
            onChange={(e) => setExerciseType(e.target.value)}
            required
          />
        </label>

        <label>
          Duration (minutes):
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </label>

        <label>
          Intensity:
          <select
            value={intensity}
            onChange={(e) => setIntensity(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <label>
          Calories Burned:
          <input
            type="number"
            value={caloriesBurned}
            onChange={(e) => setCaloriesBurned(e.target.value)}
            required
          />
        </label>

        <button type="submit">Log Exercise</button>
      </form>

      <h2>Logged Exercises</h2>
      {exercises.length === 0 ? (
        <p>No exercises logged yet.</p>
      ) : (
        <ul>
          {exercises.map((exercise, index) => (
            <li
              key={index}
              style={{
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <p>
                <strong>Exercise Type:</strong> {exercise.exerciseType}
              </p>
              <p>
                <strong>Duration:</strong> {exercise.duration} minutes
              </p>
              <p>
                <strong>Intensity:</strong> {exercise.intensity}
              </p>
              <p>
                <strong>Calories Burned:</strong> {exercise.caloriesBurned} kcal
              </p>
            </li>
          ))}
        </ul>
      )}

      <button onClick={clearExercises} style={styles.clearButton}>
        Clear All Exercises
      </button>
    </div>
  );
}

const styles = {
  clearButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#d9534f",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ExerciseTracker;
