import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here (e.g., API call to create a new user)
    // Redirect to the Home Page after successful signup
    // Replace "/home" with the actual route to the Home Page in your application
    window.location.href = '/home';
  };

  return (
    <div className="signup-page">
      <div className="signup-form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit">Sign Up</button>
            <Link to="/" className="cancel-button">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
