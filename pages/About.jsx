// src/pages/About.jsx
import React from 'react';
import styles from './About.module.css';

function About() {
  const teamDoctors = [
    { name: "Dr. Anupriya", role: "Founder" },
    { name: "Dr. Ananya Iyer", role: "Prosthodontist" },
    { name: "Dr. Meera Subramanian", role: "Endodontist" },
    { name: "Dr. Arvind Kumar", role: "Dental Surgeon" },
    { name: "Dr. Sneha N", role: "Orthodontist" },
    { name: "Dr. Srinivas Rohit Ramanujam", role: "Implantologist" },
    { name: "Dr. Balu", role: "Laser Surgeon" },
    { name: "Dr. Vikram Raj Kishore", role: "Aligners Partner" },
    { name: "Dr. Ajay Jumar", role: "Oral & Maxillofacial Surgeon" }
  ];

  return (
    <main className={styles.aboutPage}>
      {/* Dr. Anupriya Section */}
       <img
          src="../images/Dr Anupriya.jpg" // Update path based on your folder structure
          alt="Sakthi Dental Clinic Logo"
          className={styles.logoImage}
        />
      <section className={styles.doctorProfile}>
        <h1>Get to Know Dr. Anupriya</h1>
        <h2>Your Trusted Partner in Dental Care</h2>
        <p>
          Bringing over 20 years of expertise, Dr. Anupriya stands as a leading figure in modern dentistry at Hosur.
          A proud alumna of the renowned Government Dental College, she began her professional journey after graduating in 2000.
          Her passion for delivering exceptional dental care was further nurtured during six impactful years at Mathura Clinic,
          where she refined her clinical skills and deepened her commitment to patient wellbeing.
        </p>
        <p>
          In 2004, Dr. Anupriya established Sakthi Dental Clinic in Hosur with a clear vision — to make high-quality dental care accessible to all.
          Her dedication extends beyond private practice, reflected in her long-standing service with the Primary Health Center at Chandara Hospital,
          where she has been a trusted dental consultant for over a decade.
        </p>
        <p>
          At Sakthi Dental Clinic, we believe that a healthy smile is a gateway to confidence and wellbeing.
          Our clinic blends advanced dental technology with a warm, patient-friendly environment to ensure every visit is comfortable and stress-free.
          From routine check-ups to specialized treatments, we prioritize personalized care tailored to your unique dental needs.
        </p>
        <p>
          Whether you're looking for preventive care, cosmetic enhancements, or restorative solutions,
          Dr. Anupriya and her team are committed to delivering excellence at every step.
          Because here, your smile isn’t just treated — it’s celebrated.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className={styles.visionMission}>
        <h2>Our Vision & Mission</h2>
        <h3>Mission</h3>
        <p>
          At Sakthi Dental Clinic, our mission is to redefine oral healthcare by delivering personalized,
          compassionate, and advanced dental services. We are committed to creating a welcoming environment
          where patients feel comfortable and confident in taking charge of their dental health.
          By integrating state-of-the-art technology with patient-centric care, we ensure that every treatment enhances not only your smile but also your overall well-being.
          Continuous learning and innovation drive us to provide comprehensive solutions — from preventive care to complex dental procedures — all designed to promote long-lasting oral health.
        </p>
        <h3>Vision</h3>
        <p>
          Our vision is to be a leading force in modern dentistry, known for setting new standards in patient care,
          innovation, and community engagement. At Sakthi Dental Clinic, we believe that building trust, encouraging preventive practices,
          and fostering a culture of excellence are key to making a lasting impact.
          We aspire to not only deliver exceptional dental outcomes but also to contribute positively to the community through awareness initiatives and outreach programs.
          With a focus on holistic care and a passion for brightening lives, we are dedicated to ensuring that every smile we treat reflects confidence, health, and happiness.
        </p>
      </section>

      {/* Our Team of Doctors */}
      <section className={styles.teamSection}>
        <h2>Our Team of Doctors</h2>
        <ul className={styles.doctorsList}>
          {teamDoctors.map((doctor, index) => (
            <li key={index} className={styles.doctorItem}>
              <strong>{doctor.name}</strong> – {doctor.role}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default About;