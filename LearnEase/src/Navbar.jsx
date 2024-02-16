import React from 'react';
import './css/Navbar.css'; // Importing the CSS file for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
