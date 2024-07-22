import React from 'react';
import './Navbar.css';
import logo from '../logo2.png';  // Adjust the path if you placed the logo elsewhere
import { Link } from 'react-router-dom'; // Uncomment and use this

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Book Chasers Logo" className="logo"/>
        </Link>
        <h1>Book Chasers</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li> 
        <li><Link to="/about">About</Link></li>  
         
        <li><Link to="/contact">Contact</Link></li>  
      </ul>
    </nav>
  );
};

export default Navbar;
