// src/components/WelcomeBanner.jsx
import React from 'react';
import styles from './WelcomeBanner.module.css';

function WelcomeBanner() {
  const banners = [
    "Banner-img-1.jpg",
    "Banner-img-2.jpg",
    "Banner-img-3.jpg",
  ];

  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        {/* Banner Image */}
        <img
          src={`../images/${banners[0]}`}
          alt="Welcome Banner"
          className={styles.bannerImage}
        />
         <img
          src={`../images/${banners[1]}`} 
          alt="Welcome Banner"
          className={styles.bannerImage}
        />
         <img
          src={`../images/${banners[2]}`}
          alt="Welcome Banner"
          className={styles.bannerImage}
        />

        {/* Text Overlay */}
        <div className={styles.textOverlay}>
          <h2>You are always in safe hands.</h2>
          <p>We are ready to help, anytime.</p>
        </div>
      </div>
    </section>
  );
}

export default WelcomeBanner;