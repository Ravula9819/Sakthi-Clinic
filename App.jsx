// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <ErrorBoundary>
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </>
    </ErrorBoundary>
  );
}

export default App;