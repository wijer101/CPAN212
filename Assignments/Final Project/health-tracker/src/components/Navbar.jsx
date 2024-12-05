import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Trigger the logout handler
    navigate("/"); // Redirect to the home page after logging out
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        {isAuthenticated ? (
          <>
            <Link to="/profile" style={styles.link}>
              Profile
            </Link>
            <Link to="/dashboard" style={styles.link}>
              Dashboard
            </Link>
            <Link to="/food-tracker" style={styles.link}>
              Food Tracker
            </Link>
            <Link to="/nutrition-diary" style={styles.link}>
              Nutrition Diary
            </Link>
            <Link to="/exercise-tracker" style={styles.link}>
              Exercise Tracker
            </Link>
            <Link to="/water-tracker" style={styles.link}>
              Water Tracker
            </Link>
            <button onClick={handleLogout} style={styles.logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>
              Login
            </Link>
            <Link to="/register" style={styles.link}>
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center", // Center all content
    alignItems: "center", // Vertically align items
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    width: "100%", // Make navbar span the full width
    boxSizing: "border-box", // Include padding in the width calculation
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
  },
  navLinks: {
    display: "flex",
    alignItems: "center", // Align links and button vertically
    gap: "20px", // Even spacing between links and the logout button
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    padding: "5px 10px", // Padding for clickable area
    transition: "background-color 0.3s ease",
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "#d9534f",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    padding: "5px 10px", // Smaller padding for a compact button
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
};

export default Navbar;
