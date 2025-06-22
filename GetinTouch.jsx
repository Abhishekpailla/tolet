// src/pages/GetInTouch.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/GetInTouch.css';

const GetInTouch = () => {
  return (
    <div className="getintouch-page">
      <div className="getintouch-container">
        <h2>Get in Touch</h2>
        <p>Have questions, feedback, or just want to say hello? We'd love to hear from you!</p>

        {/* Link to Contact Us */}
        <Link to="/contactus" className="contact-button">Go to Contact Us</Link>

        <div className="map-container">
          <h3>Our Global Office</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093603!2d144.95592831550476!3d-37.8172097420115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f57f7f%3A0x3f1c6bbd857a95ee!2sVictoria%2C%20Australia!5e0!3m2!1sen!2sin!4v1629982353560!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '10px', marginTop: '20px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
