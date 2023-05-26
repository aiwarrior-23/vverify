import React from 'react';
import styles from './InfoSectionWithImage.module.css';

const InfoSectionWithImage = ({ title,title2, img, desc,desc2, clsH, clsP }) => {
  const A = clsH
  const B = clsP
  return (
    <div className={styles.infoSection}>
      <div className={styles.imagePart}>
        <img src={img} alt="description" className={styles.imageStyle} />
      </div>
      <div className={styles.textPart}>
        <h2 className={styles[A]}>{title}</h2>
        <p className={styles[B]}>{desc}</p>
        <h2 className={styles[A]}>{title2}</h2>
        <p className={styles[B]}>{desc2}</p>
      </div>
    </div>
  );
};

export default InfoSectionWithImage;
