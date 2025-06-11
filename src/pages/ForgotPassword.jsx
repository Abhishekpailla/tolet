import React, { useState } from 'react';
import '../styles/ForgotPassword.css';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to: ${email}`); // ✅ Use backticks!
    setEmail('');
    navigate('/'); // ✅ Navigate to login
  };

  return (
    <div className="forgot-page">
      <div className="forgot-box">
        <h2>Reset Password</h2>
        <p>Enter your email to receive a reset link.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button className="forgot-btn" type="submit">Send Reset Link</button>
        </form>
        <div className="forgot-links">
          <Link to="/">← Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;