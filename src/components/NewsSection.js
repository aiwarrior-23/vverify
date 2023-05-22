import React from 'react';
import styles from "./NewsSection.module.css"

function NewsSection() {
  return (
    <section id="news" className={styles.section}>
      <h2>Latest News</h2>
      <div className={styles.item}>
        {/* Insert news content here */}
        <h3>News Title</h3>
        <p>News content...</p>
      </div>
      {/* Add more news items as needed */}
    </section>
  );
}

export default NewsSection;