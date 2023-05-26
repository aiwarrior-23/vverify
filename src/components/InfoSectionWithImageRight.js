import React from 'react';
import styles from './InfoSectionWithImageRight.module.css';

const InfoSectionWithImageRight = ({ title, img, desc, clsH, clsP }) => {
  const A = clsH
  const B = clsP
  console.log({A,B})
  return (
    <div className={styles.infoSection}>
      <div className={styles.textPart}>
        <h2 className={styles[A]}>{title}</h2>
        <p className={styles[B]}>{desc}</p>
      </div>
      <div className={styles.imagePart}>
        <img src={img} alt="description" className={styles.imageStyle} />
      </div>
    </div>
  );
};

export default InfoSectionWithImageRight;