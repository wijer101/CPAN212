import React, { useState, useEffect } from "react";
import {
  addExerciseLog,
  getExerciseLogs,
  clearExerciseLogs,
} from "../services/exerciseService";

function ExerciseLog({ authToken }) {
  const [exerciseType, setExerciseType] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("Medium");
  const [caloriesBurned, setCaloriesBurned] = useState("");
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const data = await getExerciseLogs(authToken);
      setLogs(data);
    };
    fetchLogs();
  }, [authToken]);

  const handleAddLog = async () => {
    const newLog = await addExerciseLog(
      {
        exerciseType,
        duration: parseInt(duration),
        intensity,
        caloriesBurned: parseInt(caloriesBurned),
      },
      authToken
    );
    setLogs([newLog, ...logs]);
    setExerciseType("");
    setDuration("");
    setCaloriesBurned("");
  };

  const handleClearLogs = async () => {
    await clearExerciseLogs(authToken);
    setLogs([]);
  };

  return (
    <div>
      <h1>Exercise Log</h1>
      <div>
        <label>
          Exercise Type:
          <input
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
        <button onClick={handleAddLog}>Add Exercise</button>
        <button
          onClick={handleClearLogs}
          style={{
            marginLeft: "10px",
            backgroundColor: "#d9534f",
            color: "#fff",
          }}
        >
          Clear All Logs
        </button>
      </div>
      <h2>Exercise Logs</h2>
      {logs.length === 0 ? (
        <p>No logs available</p>
      ) : (
        <ul>
          {logs.map((log) => (
            <li key={log._id}>
              {log.exerciseType} - {log.duration} min - {log.intensity} -{" "}
              {log.caloriesBurned} cal ({new Date(log.date).toLocaleString()})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExerciseLog;
