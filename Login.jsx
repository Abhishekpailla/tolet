import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../assests/logo.png'; // Make sure logo.png is in src/assets

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowWelcome(true);
    setTimeout(() => {
      navigate('/home');
    }, 2000);
  };

  return (
    <div className="login-page">
      {showWelcome ? (
        <div className="welcome-animation">
          <img src={logo} alt="Tolet Globe Logo" className="logo-animation" />
          <h1>Welcome to <span>Tolet Globe</span>!</h1>
        </div>
      ) : (
        <div className="login-box">
          <img src={logo} alt="Tolet Globe Logo" className="login-logo" />
          <h2>LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn">LOGIN</button>
            <div className="login-links">
              <Link to="/forgot-password">Forgot Password?</Link> | 
              <Link to="/register"> Register</Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
