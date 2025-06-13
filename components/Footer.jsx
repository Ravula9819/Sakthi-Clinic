// src/components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Address & Contact Info */}
        <div className={styles.section}>
          <h4>Clinic Address</h4>
          <p>B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India</p>
          <p>Email: info@sakthidentalclinic.in</p>
          <p>Phone: +91 9862890897 / +91 9363298118</p>
          <p>Timings: Sunday – Saturday | 9 AM – 9 PM</p>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/treatments">Treatments</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Key Treatments */}
        <div className={styles.section}>
          <h4>Key Treatments</h4>
          <ul>
            <li>Tooth Extraction</li>
            <li>Artificial Denture</li>
            <li>Teeth Cleaning</li>
            <li>Orthodontics</li>
            <li>Bleaching</li>
            <li>Implants</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className={styles.section}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com"  target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com"  target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com"  target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Sakthi Dental Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;