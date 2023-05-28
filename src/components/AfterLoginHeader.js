import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import CustomizedMenus from './MenuHome';
import UploadIcon from '@mui/icons-material/Upload';

function AfterLoginHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Insert logo image here */}
        <Link to="/"> <img src="x.png" alt="Logo" className={styles.image} /> </Link>
      </div>
      <div><CustomizedMenus /></div>
    </header>
  );
}

export default AfterLoginHeader;
