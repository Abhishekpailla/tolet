import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login Successful\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="      Email  "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="        Password     "
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
    </div>
  );
};

export default Login;