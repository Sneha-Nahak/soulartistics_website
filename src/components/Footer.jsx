import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin,  FaInstagram,FaGithub } from 'react-icons/fa';
import '../styles/Footer.css'; 

import logo from '../assets/soulartistics-logo-white.png';

const Footer = () => {
  const [message, setMessage] = useState('');
    const formRef = useRef();

    const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
        'service_x8bqd55',
      'template_anf6hao',
      formRef.current,
      'ydZ7L8ppRLWT7-b91'
    )
    .then(() => {
      setMessage('Message sent successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('Failed to send message:', error);
      setMessage('Something went wrong. Please try again.');
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* === Column 1: Logo & Social === */}
        <div className="footer-section logo-social">
          <img src={logo} alt="Soulartistics Logo" className="footer-logo" />
          <p className="logo-tagline">Design that speaks to your soul.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/sneha-nahak-s3/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Sneha-Nahak" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/soulartistics" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        {/* === Column 2: About Me (Information) === */}
        <div className="footer-section about-me">
          <h3>Contact & Info</h3>
          <p>
            <strong>Profession:</strong> Graphic Designer & Web Developer
          </p>
          <p>
            <strong>Official Email:</strong> snehanahak6@gmail.com
          </p>
          <p>
            <strong>Social Email:</strong> soulartistics379@gmail.com
          </p>
          <p>
            <strong>Contact No:</strong> +91 7847867991
          </p>
        </div>

        {/* === Column 3: Contact Form === */}
        <div className="footer-section contact-form-section">
          <h3>Get in Touch</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <input type="text" name='user_name' placeholder="Your Name" required />
            <input type="email" name='user_email' placeholder="Your Email" required />
            <textarea name='message' placeholder="Your Message" rows="3" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
          {message && <p className="success-message">{message}</p>}
        </div>
      </div>
      
      {/* === Footer Bottom === */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Soulartistics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;