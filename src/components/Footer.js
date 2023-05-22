import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <img src="x.png" alt="Logo" className={styles.logo} /> {/* You will need to add your own logo image */}
      <p>© V-Verify Ltd. 2020 - 2023</p>
    </div>
    <div>
      <h2>SOLUTIONS</h2>
      <ul>
        <li>Digital ID</li>
        <li>Identity Verification</li>
        <li>Age Verification</li>
        <li>eSignatures</li>
        <li>Authentication</li>
      </ul>
    </div>
    <div>
      <h2>COMPANY</h2>
      <ul>
        <li>About us</li>
        <li>Social purpose</li>
        <li>Ethical framework</li>
        <li>Press</li>
        <li>Patents</li>
        <li>Careers</li>
        <li>Blog</li>
      </ul>
    </div>
    <div>
      <h2>SUPPORT</h2>
      <ul>
        <li>Help</li>
        <li>Contact us</li>
        <li>Service Status</li>
        <li>Imprint</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
