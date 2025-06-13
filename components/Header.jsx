import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div
        className={styles.logo}
        onClick={handleLogoClick}
        role="button"
        tabIndex="0"
      >
        <img
          src="../images/SDC Logo.png"
          alt="Sakthi Dental Clinic Logo"
          className={styles.logoImage}
        />
      </div>

      <nav className={styles.navbar}>
        <ul
          className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(false)} // Auto-close on link click
        >
          <li><Link to="/" className={location.pathname === '/' ? styles.active : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>About Us</Link></li>
          <li><Link to="/treatments" className={location.pathname === '/treatments' ? styles.active : ''}>Treatments</Link></li>
          <li><Link to="/faqs" className={location.pathname === '/faqs' ? styles.active : ''}>FAQs</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''}>Contact</Link></li>
        </ul>
      </nav>

      <div className={styles.hamburgerMenu}>
        <button onClick={toggleMenu}>☰</button>
      </div>
    </header>
  );
};

export default Header;
