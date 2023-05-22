import React from 'react';
import styles from './Hero.module.css'; // Import the CSS Module
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Hero() {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Your Background Screening Experts</h1>
      <p className={styles.text}>
      Get your business set up to run trusted, compliant background checks in less than 1 hour.
      </p>
      <Button variant="outlined" className={styles.outlined}>V-Verify for Business</Button>
      <Button variant="outlined" className={styles.outlined}>V-Verify for Individuals</Button>
    </section>
  );
}

export default Hero;
