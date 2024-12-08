import React from "react";
import { Link } from "react-router-dom";

function Profile({ userData, clearUserData }) {
  if (!userData) {
    return (
      <div className="container no-data">
        <p>
          No data available. Please enter your health information on the
          Dashboard.
        </p>
        <Link to="/dashboard">
          <button style={styles.dashboardButton}>Go to Dashboard</button>
        </Link>
      </div>
    );
  }

  const formattedHeight =
    userData.heightUnit === "cm"
      ? `${userData.height} cm`
      : `${userData.feet}ft ${userData.inches}in`;

  return (
    <div className="container">
      <h1>{userData.name}'s Profile</h1>
      {userData.email && (
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
      )}
      <p>
        <strong>Age:</strong> {userData.age}
      </p>
      <p>
        <strong>Weight:</strong> {userData.weight} {userData.weightUnit}
      </p>
      <p>
        <strong>Height:</strong> {formattedHeight}
      </p>
      <p>
        <strong>Sex:</strong> {userData.sex}
      </p>
      <button onClick={clearUserData} style={styles.clearButton}>
        Clear Profile
      </button>
    </div>
  );
}

const styles = {
  dashboardButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#5bc0de",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
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

export default Profile;
