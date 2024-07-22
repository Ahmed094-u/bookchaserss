import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file
import logo from '../logo2.png'; // Reuse the logo from the navbar
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
      <Link to="/">
          <img src={logo} alt="Book Chasers Logo" className="logo"/>
        </Link>
         <h1>Book Chasers</h1>
      </div>
      <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="footer-legal">
        <p>© {new Date().getFullYear()} Book Chasers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
