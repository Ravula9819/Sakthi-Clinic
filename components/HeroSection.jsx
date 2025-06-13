// src/components/HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css';


function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Specialized Dental Care for Women, Children & Families</h1>
        <p>
          Experience compassionate, expert-led dental services tailored to your needs — all in a modern and welcoming environment.
        </p>
        <div className={styles.cta}>
          <button className={styles.primary}>Fix an Appointment</button>
          <button className={styles.secondary}>Emergency Dental Support</button>
        </div>

      </div>
                    <div className={styles.heroImage}>
        <img src="../images/SDC Logo.png" alt="HeroImage" />
      </div>
    </section>
  );
}

export default HeroSection;