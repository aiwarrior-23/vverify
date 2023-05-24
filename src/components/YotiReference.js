import styles from "./YotiReference.module.css"
import React from 'react';

const YotiReference = () => {
    return (
      <div className={styles.container}>
        <div className={styles.division}>
          <img src="https://www.yoti.com/wp-content/uploads/Individual-tile_compr-423x500.webp" alt="Description 1" className={styles.l2r} />
          <h2>V-Verify for Individuals</h2>
          <p>This is a dummy paragraph for the first division. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>More about V-Verify for Individuals</button>
        </div>
  
        <div className={styles.division}>
          <img src="https://www.yoti.com/wp-content/uploads/Yoti_home-business_compr-423x500.webp" alt="Description 2" className={styles.r2l} />
          <h2>V-Verify for Business</h2>
          <p>This is a dummy paragraph for the second division. Suspendisse potenti. Sed ullamcorper, justo a sollicitudin rutrum, erat ipsum vehicula elit.</p>
          <button>More about V-Verify for Business</button>
        </div>
      </div>
    );
  };
  
  export default YotiReference;