import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ setAuthToken }) {
  const [loginMethod, setLoginMethod] = useState('email'); // Default to email
  const [identifier, setIdentifier] = useState(''); // Email or username
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend login endpoint
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        loginMethod,
        identifier,
        password,
      });

      // Extract token and user data from the response
      const { token, user } = response.data;

      // Save the token to localStorage
      localStorage.setItem('authToken', token);

      // Optional: Update parent state to store the token
      if (setAuthToken) {
        setAuthToken(token);
      }

      alert(`Welcome back, ${user.username}!`);
      navigate('/profile'); // Redirect to the Profile page
    } catch (err) {
      // Handle login errors
      console.error(err.response?.data?.message || 'Login failed');
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Login Method:
          <select
            value={loginMethod}
            onChange={(e) => setLoginMethod(e.target.value)}
          >
            <option value="email">Email</option>
            <option value="username">Username</option>
          </select>
        </label>
        <label>
          {loginMethod === 'email' ? 'Email' : 'Username'}:
          <input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
        </label>
        <label>Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
