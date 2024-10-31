import React from 'react';
import Navbar from '../components/Navbar';
import HealthForm from '../components/HealthForm';

function Dashboard({ onHealthDataSubmit }) {
  return (
    <div className="container">
      <Navbar />
      <h1>Dashboard</h1>
      <HealthForm onSubmit={onHealthDataSubmit} />
    </div>
  );
}

export default Dashboard;
