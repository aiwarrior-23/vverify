import React from 'react';
import styles from './InfoSectionWithImage.module.css';

const InfoSectionWithImage = ({ title, img, desc }) => {
  return (
    <div className={styles.infoSection}>
      <div className={styles.imagePart}>
        <img src={img} alt="description" className={styles.imageStyle} />
      </div>
      <div className={styles.textPart}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.paragraph}>{desc}</p>
      </div>
    </div>
  );
};

export default InfoSectionWithImage;
