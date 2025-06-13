// src/components/WhyChooseUs.jsx
import React from 'react';
import styles from './WhyChooseUs.module.css';

const reasons = [
  {
    title: "All-in-One Care",
    description:
      "From general dentistry to specialized treatments, everything under one roof.",
  },
  {
    title: "Experienced Doctors",
    description:
      "Our dentists are professionally trained and committed to personalized patient care.",
  },
  {
    title: "Patient-Centric Approach",
    description:
      "We prioritize comfort, safety, and transparency in every treatment we offer.",
  },
  {
    title: "Technology-Driven Services",
    description:
      "Modern tools and equipment ensure precision and safety.",
  },
];

function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <h2>Why Choose Sakthi Dental Clinic?</h2>
      <div className={styles.reasonsGrid}>
        {reasons.map((reason, index) => (
          <div key={index} className={styles.reasonCard}>
            {/* Optional: Add icons here */}
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;