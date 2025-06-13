// src/components/AmenitiesSection.jsx
import React from 'react';
import styles from './AmenitiesSection.module.css';

const amenities = [
  {
    title: "Convenient central location",
    icon: "icon-city-center.png",
  },
  {
    title: "Hassle-free parking",
    icon: "icon-parking.png",
  },
  {
    title: "Doctors available daily (9 AM – 9 PM)",
    icon: "icon-doctors.png",
  },
  {
    title: "Pickup & drop-off support",
    icon: "icon-pickup.png",
  },
  {
    title: "Wheelchair access",
    icon: "icon-wheel-chair.png",
  },
];

function AmenitiesSection() {
  return (
    <section className={styles.section}>
      <h2>Clinic Facilities</h2>
      <ul className={styles.amenitiesList}>
        {amenities.map((amenity, index) => (
          <li key={index} className={styles.amenityItem}>
            {/* Icon */}
            <img
              src={`../images/${amenity.icon}`}
              alt={amenity.title}
              className={styles.amenityIcon}
            />
            {/* Text */}
            <span>{amenity.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AmenitiesSection;