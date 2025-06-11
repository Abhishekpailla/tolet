// src/pages/Register.jsx
import React, { useState } from 'react';
import '../styles/Register.css';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Registered Successfully!\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>REGISTER</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <i className="fa fa-user"></i>
            <input
              type="text"
              name="username"
              placeholder="      Username  "
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <i className="fa fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="      Email  "
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <i className="fa fa-lock"></i>
            <input
              type="password"
              name="password"
              placeholder="      Password  "
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <i className="fa fa-lock"></i>
            <input
              type="password"
              name="confirmPassword"
              placeholder="     Confirm Password  "
              required
              onChange={handleChange}
            />
          </div>
          <button className="register-btn" type="submit">REGISTER</button>
          <div className="register-links">
            <a href="/">Already have an account? Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;