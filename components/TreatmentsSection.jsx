// src/components/TreatmentsSection.jsx
import React from 'react';
import styles from './TreatmentsSection.module.css';

const treatments = [
  {
    title: "Tooth Extraction",
    description:
      "Safe and painless removal of impacted or decayed teeth.",
  },
  {
    title: "Artificial Complete Denture",
    description:
      "Full mouth replacement to restore confidence and function.",
  },
  {
    title: "Tooth Filling",
    description:
      "Composite fillings for cavity treatment and tooth restoration.",
  },
  {
    title: "Teeth Cleaning or Scaling",
    description:
      "Preventive care to remove plaque and protect gums.",
  },
  {
    title: "Bleaching",
    description:
      "Cosmetic whitening treatments for a brighter smile.",
  },
  {
    title: "Orthodontic Treatment",
    description:
      "Braces and aligners to straighten and align teeth.",
  }
];

function TreatmentsSection() {
  return (
    <section className={styles.section}>
      <h2>Explore Our Services</h2>
      <div className={styles.treatmentsGrid}>
        {treatments.map((treatment, index) => (
          <div key={index} className={styles.treatmentCard}>
            {/* Optional: Add icon here */}
            <h3>{treatment.title}</h3>
            <p>{treatment.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.cta}>
        <button><a href="/treatments">View Full List of Treatments</a></button>
      </div>
    </section>
  );
}

export default TreatmentsSection;