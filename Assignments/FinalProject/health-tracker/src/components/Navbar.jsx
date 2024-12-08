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
      <div style={styles.logo}>MACROS</div>
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
            <Link to="/exercise-log" style={styles.link}>
              Exercise Log
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
    justifyContent: "space-between", // Space between logo and links
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    width: "100%",
    boxSizing: "border-box",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    padding: "5px 10px",
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
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
    alignSelf: "center",
    marginLeft: "20px",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  },
};

export default Navbar;
