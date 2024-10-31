import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="container">
      <Navbar />
      <h1>Welcome to Health & Fitness Tracker</h1>
      <p>Your go-to app for tracking diet, exercise, and reaching your fitness goals.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
