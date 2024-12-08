import React from "react";
import HealthForm from "../components/HealthForm";

function Dashboard({ onHealthDataSubmit }) {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <HealthForm onSubmit={onHealthDataSubmit} />
    </div>
  );
}

export default Dashboard;
