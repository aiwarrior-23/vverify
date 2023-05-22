import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Insert logo image here */}
        <img src="x.png" alt="Logo" className={styles.image} />
      </div>
      <nav className={styles.nav}>
        {/* Insert nav links here */}
        <Link to="/vVerify-app" className={styles.paragraph}>How V-Verify Works</Link>
        <Link to="/vVerify-business" className={styles.paragraph}>V-Verify for Business</Link>
        <Link to="/security-privacy" className={styles.paragraph}>Contact Us</Link>
        <Link to="/tech-good" className={styles.paragraph}>Help</Link>
        <Link to="/login" className={styles.paragraph}>Login</Link>
      </nav>
    </header>
  );
}

export default Header;
