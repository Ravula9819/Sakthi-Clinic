// src/components/TestimonialsSection.jsx
import React from 'react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    quote: "The doctors are extremely kind and attentive. My braces treatment is progressing really well. 5/5.",
    author: "Manisha M"
  },
  {
    quote: "I got my teeth cleaned and whitened here, and the results were amazing... I’ve recommended Sakthi Dental Clinic to my entire family.",
    author: "Mr. Arun Kumar"
  },
  {
    quote: "Their attention to detail is outstanding... The process has been so smooth. Really grateful for their care.",
    author: "Mrs. Revathi S."
  }
];

function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <h2>What Our Patients Say</h2>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <p>"{testimonial.quote}"</p>
            <strong>— {testimonial.author}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;