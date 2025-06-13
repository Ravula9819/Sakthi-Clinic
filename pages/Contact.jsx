// src/pages/Contact.jsx
import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.contactSection}>
        <h2>We would love to hear from you</h2>
        <div className={styles.contactContainer}>
          {/* Contact Form */}
          <form className={styles.contactForm} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" placeholder="Your full name" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" name="phone" placeholder="+91 9876543210" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" placeholder="How can we help you?" />
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>

          {/* Clinic Info */}
          <div className={styles.clinicInfo}>
            <h3>Reach us</h3>
            <ul className={styles.infoList}>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  <strong>Address:</strong><br />
                  B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India
                </span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>
                  <strong>Email:</strong><br />
                  info@sakthidentalclinic.in
                </span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>
                  <strong>Phone:</strong><br />
                  +91 9862890897 / +91 9363298118
                </span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>
                  <strong>Timings:</strong><br />
                  <b>Sunday – Saturday</b>: 9 AM – 8 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;