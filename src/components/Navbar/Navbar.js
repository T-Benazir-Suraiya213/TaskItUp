import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../logo-1.jpeg';


const Navbar = ({ score }) => {
  return (
      <nav className="navbar">
           <div className="navbar-logo">
        <img src={logo} alt="TaskItUp Logo" />
        <Link to="/home" className="navbar-brand">
          <h2>TaskItUp</h2>
        </Link>
      </div>
      <div className="nav-links-left">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/progress" className="nav-link">Progress</Link>
      </div>
      
      <div className="nav-links-right">
       { /* <p>Score Points: {score}</p> */}
        <Link to="/profile" className="profile-btn">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
