import React from 'react';
import styles from './InfoSectionWithImageRight.module.css';

const InfoSectionWithImageRight = ({ title, img, desc }) => {
  return (
    <div className={styles.infoSection}>
      <div className={styles.textPart}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.paragraph}>{desc}</p>
      </div>
      <div className={styles.imagePart}>
        <img src={img} alt="description" className={styles.imageStyle} />
      </div>
    </div>
  );
};

export default InfoSectionWithImageRight;