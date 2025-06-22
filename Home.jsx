// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import logo from '../assests/logo.png'; // Make sure this path is correct

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <img src={logo} alt="Tolet Globe Logo" className="home-logo" />
        <h1 className="animated-title">
          Welcome to Our Website <span>Tolet Globe</span>
        </h1>
        <p className="animated-subtitle">Your one-stop destination for everything!</p>
        <div className="home-buttons fade-in">
          <Link to="/login" className="home-btn">Login</Link>
          <Link to="/register" className="home-btn">Register</Link>
          <Link to="/contactus" className="home-btn">Contact Us</Link>
          <Link to="/getintouch" className="home-btn">Get In Touch</Link>
          <Link to="/blog" className="home-btn">Blog</Link>
          <Link to="/property" className="home-btn">View Properties</Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
