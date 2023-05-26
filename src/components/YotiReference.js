import { Link } from "react-router-dom";
import styles from "./YotiReference.module.css"
import React from 'react';

const YotiReference = () => {
    return (
      <div className={styles.container}>
        <div className={styles.division}>
          <img src="2.jpg" alt="Description 1" className={styles.l2r} />
          <h2>V-Verify for Individuals</h2>
          <p>This is a dummy paragraph for the first division. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to="/vverifyIndividual"><button>More about V-Verify for Individuals</button></Link>
        </div>
  
        <div className={styles.division}>
          <img src="3.jpg" alt="Description 2" className={styles.r2l} />
          <h2>V-Verify for Business</h2>
          <p>This is a dummy paragraph for the second division. Suspendisse potenti. Sed ullamcorper</p>
          <Link to="/vverifyBusiness"><button>More about V-Verify for Business</button></Link>
        </div>
      </div>
    );
  };
  
  export default YotiReference;