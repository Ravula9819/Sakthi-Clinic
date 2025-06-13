// src/components/TreatmentsSection.jsx
import React from 'react';
import styles from './Treatments.module.css';

const treatments = [
  {
    title: "Teeth Cleaning & Scaling",
    description:
      "We offer advanced, non-surgical gum care using modern LASER technology for precise and effective treatment. Whether you're dealing with early signs of gum disease or a more advanced condition, our skilled professionals ensure thorough cleaning to restore gum health.",
    icon: "Teeth Cleaning.png",
  },
  {
    title: "Tooth Filling",
    description:
      "We specialize in restoring smiles through expert tooth filling services. Whether tooth damage is caused by cavities, trauma, or wear from habits like teeth grinding or nail-biting, our team uses high-quality materials and the latest techniques to repair and protect your teeth.",
    icon: "Tooth-Filling.jpg",
  },
  {
    title: "Tooth Extraction",
    description:
      "When a tooth is beyond repair, we ensure the extraction process is handled with utmost care and comfort. Our experienced dental team evaluates every option before recommending removal, but when necessary, we perform extractions using gentle techniques to minimize discomfort.",
    icon: "Teeth Extraction.png",
  },
  {
    title: "Artificial Complete Denture",
    description:
      "We craft high-quality complete dentures to restore both function and aesthetics for patients with missing teeth. Our dentures are designed with precision using durable materials, providing a natural look and a comfortable fit.",
    icon: "Artificial Complete Denture.png",
  },
  {
    title: "Dental Implants",
    description:
      "Offering a modern and reliable solution for replacing missing teeth. Using biocompatible materials like titanium, we securely place artificial roots into the jawbone, creating a stable foundation for prosthetic teeth.",
    icon: "Impants.png",
  },
  {
    title: "Laser Dentistry",
    description:
      "Utilizing advanced laser technology to perform precise, minimally invasive dental treatments. From soft tissue surgeries to gum care, laser procedures offer faster healing, reduced discomfort, and enhanced accuracy.",
    icon: "Laser-Surgery.png",
  },
  {
    title: "Root Canal Therapy",
    description:
      "When tooth infections reach deep into the pulp, root canal treatment becomes essential. We carefully remove infected tissue, clean the area thoroughly, and seal the tooth to prevent future issues.",
    icon: "Root Canal Treatment.png",
  },
  {
    title: "Wisdom Tooth Extraction",
    description:
      "If impacted or problematic, wisdom teeth can cause discomfort and oral health risks. We specialize in gentle and effective wisdom tooth removal, using modern techniques and anesthesia options to ensure a smooth, pain-free experience.",
    icon: "Wisdom Teeth Removal.png",
  },
  {
    title: "Fixed Partial Denture (Bridge)",
    description:
      "Our expertly crafted fixed partial dentures offer a secure solution for replacing missing teeth by anchoring prosthetic teeth to adjacent natural teeth or implants.",
    icon: "Fixed Partial Denture.png",
  },
  {
    title: "Teeth Whitening (Bleaching)",
    description:
      "Brighten your smile with professional teeth whitening services. We treat both external and internal stains, using safe bleaching agents to lighten your teeth by several shades.",
    icon: "Bleaching.png",
  },
  {
    title: "Veneers",
    description:
      "Transform your smile with dental veneers—thin, custom-made shells designed to cover imperfections such as chips, gaps, or discoloration.",
    icon: "Veneer Treatment.jpg",
  },
  {
    title: "Pediatric Dentistry",
    description:
      "We provide gentle and comprehensive dental care for children. Our friendly team creates a welcoming environment, ensuring young patients feel safe and comfortable during their visits.",
    icon: "Pediatric-dentistry.png",
  },
  {
    title: "Flap Surgery",
    description:
      "For advanced gum disease, flap surgery may be necessary. Our skilled team performs this procedure by lifting the gum tissue to remove plaque and bacteria, then repositioning it for optimal healing.",
    icon: "Flap-surgery.png",
  },
  {
    title: "Orthodontic Braces",
    description:
      "Correct misaligned teeth with customized orthodontic treatments. We offer a variety of braces—metal, ceramic, or lingual—to suit your preferences.",
    icon: "Orthodonic-Treatment.png",
  },
  {
    title: "Clear Aligners",
    description:
      "For a discreet alternative to traditional braces, we offer clear aligners. These transparent, removable trays gradually shift your teeth into perfect alignment, providing comfort and flexibility throughout your orthodontic journey.",
    icon: "Aligner.png",
  },
];

function TreatmentsSection() {
  return (
    <section className={styles.treatmentsSection}>
      <h2>Explore Our Services</h2>
      <p className={styles.introText}>
        At Sakthi Dental Clinic, we provide a wide range of dental treatments tailored to meet your needs.
        From routine procedures to advanced restorative and cosmetic care, our expert team ensures personalized,
        compassionate service for every patient.
      </p>

      <div className={styles.treatmentsGrid}>
        {treatments.map((treatment, index) => (
          <div key={index} className={styles.treatmentCard}>
            {/* Icon */}
            <img
              src={`../images/${treatment.icon}`}
              alt={`${treatment.title} icon`}
              className={styles.icon}
            />
            {/* Title */}
            <h3>{treatment.title}</h3>
            {/* Description */}
            <p>{treatment.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TreatmentsSection;