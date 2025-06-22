// src/pages/ContactUs.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}. Your message has been sent!`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2>Contact Us</h2>

        {/* Link back to Get In Touch */}
        <Link to="/getintouch" className="back-link">← Back to Get In Touch</Link>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <i className="fas fa-comment"></i>
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
