import React from 'react';
import styles from "./InfoSection.module.css"

function InfoSection({ title, id, img, desc }) {
    return (
    <section className={styles.container}>
      <h2 className={styles.heading}>{title}</h2>
      <img className={styles.image} src={img} alt={title} /> {/* Replace with actual image */}
      <p className={styles.text}>
        {desc}
      </p>
      <a className={styles.link} href="https://vVerify.com">Learn More</a>
    </section>
  );
}

export default InfoSection;