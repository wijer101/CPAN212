import React, { useState, useEffect } from "react";
import {
  addWaterIntake,
  getWaterIntake,
  clearWaterIntake,
} from "../services/waterService";

function WaterTracker({ authToken }) {
  const [amount, setAmount] = useState("");
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const data = await getWaterIntake(authToken);
      setRecords(data);
    };
    fetchRecords();
  }, [authToken]);

  const handleAdd = async () => {
    const newRecord = await addWaterIntake(parseInt(amount), authToken);
    setRecords([newRecord, ...records]);
    setAmount("");
  };

  const handleClear = async () => {
    await clearWaterIntake(authToken);
    setRecords([]);
  };

  return (
    <div className="container">
      <h1>Water Tracker</h1>
      <label>
        Amount (ml):
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>
      <button onClick={handleAdd}>Add Water Intake</button>
      <button
        onClick={handleClear}
        style={{
          marginLeft: "10px",
          backgroundColor: "#d9534f",
          color: "#fff",
        }}
      >
        Clear All Records
      </button>

      <h2>Logged Records</h2>
      {records.length === 0 ? (
        <p>No records found</p>
      ) : (
        <ul>
          {records.map((record) => (
            <li key={record._id}>
              {record.amount} ml - {new Date(record.date).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WaterTracker;
