import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function AfterLoginHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Insert logo image here */}
        <img src="x.png" alt="Logo" className={styles.image} />
      </div>
      <nav className={styles.nav}>
        {/* Insert nav links here */}
        <Link to="/login" className={styles.paragraph}>Login</Link>
      </nav>
    </header>
  );
}

export default AfterLoginHeader;
