// src/pages/Faqs.jsx
import React from 'react';
import styles from './Faqs.module.css';

const faqs = [
  {
    question: "Can medication completely relieve tooth pain?",
    answer:
      "Not entirely. While medications may offer short-term relief, long-lasting relief requires identifying and treating the root cause of the pain through professional dental care."
  },
  {
    question: "Does teeth scaling cause enamel damage, sensitivity, or gaps between teeth?",
    answer:
      "No. Scaling safely removes plaque and tartar from teeth and below the gum line. It doesn’t damage enamel or create gaps. Some temporary sensitivity may occur, but it usually subsides as gums heal and reattach to the teeth."
  },
  {
    question: "Can fluorosis stains be removed through scaling?",
    answer:
      "Scaling can remove surface (extrinsic) stains but not fluorosis, which is an internal (intrinsic) stain. Fluorosis may require treatments like bleaching, veneers, or crowns for cosmetic improvement."
  },
  {
    question: "Can painful teeth be treated with fillings?",
    answer:
      "Not always. If the cavity has reached the pulp—the innermost layer of the tooth—simple filling won’t help. In such cases, root canal treatment or tooth extraction might be necessary. Fillings are effective only when the damage is limited to the outer layers (enamel and dentin)."
  },
  {
    question: "Is placing a cap or crown necessary after root canal treatment (RCT)?",
    answer:
      "Yes. A crown is recommended after RCT to protect the treated tooth, which may be weaker due to decay. It prevents fractures and adds durability, especially during chewing."
  },
  {
    question: "Can milk teeth need root canal treatment (RCT)?",
    answer:
      "Yes. If a milk tooth has a deep cavity and is likely to remain in the mouth for some time, an RCT can preserve it and prevent infection or early loss."
  },
  {
    question: "How can I maintain good oral hygiene?",
    answer:
      "Brush your teeth twice daily with proper technique, rinse after meals, floss regularly, and schedule routine check-ups with your dentist to maintain healthy teeth and gums."
  },
  {
    question: "What is the best age to get braces?",
    answer:
      "Braces are most effective between ages 12 and 14, when the jaw and teeth are still developing. However, some cases may benefit from earlier intervention depending on the condition."
  },
  {
    question: "Do all wisdom teeth need to be removed?",
    answer:
      "No. Wisdom teeth only require removal if they are impacted, infected, or causing pain due to crowding or damage to adjacent teeth."
  },
  {
    question: "Is it important to replace missing teeth after extraction?",
    answer:
      "Yes. Replacing extracted teeth helps maintain proper bite alignment and prevents adjacent teeth from shifting, which can affect chewing and overall oral function."
  },
  {
    question: "What are the benefits of dental implants?",
    answer:
      "Dental implants restore both the appearance and functionality of missing teeth. They provide a stable, natural-looking solution that can improve confidence and overall quality of life."
  },
  {
    question: "Which type of toothbrush and toothpaste should I use?",
    answer:
      "Use a soft or medium-bristled toothbrush with a small head for better reach. Choose a non-abrasive fluoride toothpaste and replace your toothbrush every three months for optimal hygiene."
  },
  {
    question: "What causes tooth sensitivity?",
    answer:
      "Tooth sensitivity can result from enamel wear (due to attrition or abrasion), tooth decay, exposed tooth roots, or hairline cracks in the teeth."
  },
  {
    question: "How often should I see a dentist?",
    answer:
      "Visiting your dentist every six months is recommended for routine check-ups, professional cleaning, and preventive care to maintain good oral health."
  }
];

function Faqs() {
  return (
    <main className={styles.faqsPage}>
      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <p className={styles.introText}>
          We’ve compiled answers to common questions about dental care and procedures.
          If you have more inquiries, feel free to reach out via our contact page.
        </p>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <details key={index} className={styles.faqItem}>
              <summary className={styles.question}>{faq.question}</summary>
              <p className={styles.answer}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Faqs;