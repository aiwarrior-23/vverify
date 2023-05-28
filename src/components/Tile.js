import React from 'react';
import styles from './Tile.module.css';
import { Button } from '@mui/material';

const Tile = ({ title,title2, img, desc,desc2, clsH, clsP }) => {
  const A = clsH
  const B = clsP
  return (
    <div className={styles.infoSection}>
      <div className={styles.imagePart}>
        <img src={img} alt="description" className={styles.imageStyle} />
      </div>
      <div className={styles.contentPart}>
        <div className={styles.textPart}>
          <h2 className={styles[A]}>{title}</h2>
          <p className={styles[B]}>{desc}</p>
          <h2 className={styles[A]}>{title2}</h2>
          <p className={styles[B]}>{desc2}</p>
        </div>
        <div className={styles.buttonSection}>
          <Button className={styles.buttonStyle} variant="outlined">V-Verify for Individuals</Button>
          <Button className={styles.buttonStyle} variant="outlined">V-Verify for Business</Button>
        </div>
      </div>
    </div>
  );
};


export default Tile;
