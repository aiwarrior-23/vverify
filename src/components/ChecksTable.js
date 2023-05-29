import React from 'react';
import styles from './ChecksTable.module.css';

const SortableTable = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>
        Recent Checks Summary
      </h2>
      <ul className={styles.responsiveTable}>
        <li className={styles.tableHeader}>
          <div className={`${styles.col} ${styles['col-1']}`}>Check Id</div>
          <div className={`${styles.col} ${styles['col-2']}`}>Check Type</div>
          <div className={`${styles.col} ${styles['col-3']}`}>Check Description</div>
          <div className={`${styles.col} ${styles['col-4']}`}>Check Status</div>
        </li>
        <li className={styles.tableRow}>
          <div className={`${styles.col} ${styles['col-1']}`} data-label="Check Id">
            42235
          </div>
          <div className={`${styles.col} ${styles['col-2']}`} data-label="Check Type">
            Enhanced DBS
          </div>
          <div className={`${styles.col} ${styles['col-3']}`} data-label="Check Description">
            Enhanced DBS Check
          </div>
          <div className={`${styles.col} ${styles['col-4']}`} data-label="Check Status">
            Pending
          </div>
        </li>
        <li className={styles.tableRow}>
          <div className={`${styles.col} ${styles['col-1']}`} data-label="Check Id">
            42442
          </div>
          <div className={`${styles.col} ${styles['col-2']}`} data-label="Check Type">
            Basic DBS
          </div>
          <div className={`${styles.col} ${styles['col-3']}`} data-label="Check Description">
            Basic DBS Check
          </div>
          <div className={`${styles.col} ${styles['col-4']}`} data-label="Check Status">
            Completed
          </div>
        </li>
        <li className={styles.tableRow}>
          <div className={`${styles.col} ${styles['col-1']}`} data-label="Check Id">
            42257
          </div>
          <div className={`${styles.col} ${styles['col-2']}`} data-label="Check Type">
            Digital ID
          </div>
          <div className={`${styles.col} ${styles['col-3']}`} data-label="Check Description">
            Digital ID Check
          </div>
          <div className={`${styles.col} ${styles['col-4']}`} data-label="Check Status">
            Incomplete
          </div>
        </li>
        <li className={styles.tableRow}>
          <div className={`${styles.col} ${styles['col-1']}`} data-label="Check Id">
            42311
          </div>
          <div className={`${styles.col} ${styles['col-2']}`} data-label="Check Type">
            RTW
          </div>
          <div className={`${styles.col} ${styles['col-3']}`} data-label="Check Description">
            RTW Check
          </div>
          <div className={`${styles.col} ${styles['col-4']}`} data-label="Check Status">
            Rejected
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SortableTable;
