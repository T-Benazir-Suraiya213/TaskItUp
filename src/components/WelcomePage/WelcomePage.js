import React from 'react';
import './WelcomePage.css';

import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="welcomepage">
      
      <div className="content">
        <h1 id="t1">Welcome to TaskItUp!</h1>
        <p id="t2">Manage your tasks efficiently with our app.</p>
        <div className="buttons-container">
          <Link to="/login" className="login-btn">Login</Link>
           <Link to="/signup" className="signup-btn">Sign Up </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
