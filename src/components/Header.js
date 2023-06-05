import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* <img src="x.png" alt="Logo" className={styles.image} /> */}
      </div>
      <nav className={styles.nav}>
        {/* Insert nav links here */}
        <Link className={styles.paragraph} onClick={handleScrollToServices}>
          Services
        </Link>
        <Link to="/contactus" className={styles.paragraph}>Contact Us</Link>
        <Link to="/aboutus" className={styles.paragraph}>About Us</Link>
        <Link to="/login" className={styles.paragraph}>Login</Link>
      </nav>
    </header>
  );
}

export default Header;
