import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/login" style={styles.link}>Login</Link>
      <Link to="/register" style={styles.link}>Register</Link>
      <Link to="/dashboard" style={styles.link}>Dashboard</Link>
      <Link to="/profile" style={styles.link}>Profile</Link>
      <Link to="/food-tracker" style={styles.link}>Food Tracker</Link>
      <Link to="/nutrition-diary" style={styles.link}>Nutrition Diary</Link>
      <Link to="/exercise-tracker" style={styles.link}>Exercise Tracker</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#007bff',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Navbar;
