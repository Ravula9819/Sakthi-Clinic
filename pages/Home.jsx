// src/pages/Home.jsx
import React from 'react';

// Import Components
import HeroSection from '../components/HeroSection';
import WelcomeBanner from '../components/WelcomeBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import TreatmentsSection from '../components/TreatmentsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AmenitiesSection from '../components/AmenitiesSection.jsx';


function Home() {
  return (
    <main>
      <HeroSection />
      <WelcomeBanner />
      <WhyChooseUs />
      <TreatmentsSection />
      <TestimonialsSection />
      <AmenitiesSection />
    </main>
  );
}

export default Home;