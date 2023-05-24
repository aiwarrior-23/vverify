import React from 'react';
import styles from './ChecksTable.module.css';

const SortableTable = ({ data }) => {

  const headers = ["Check ID", "Check Description", "Check Date", "Check Type", "Check Status"];

  const rows = data.map((row, idx) => (
    <tr key={idx}>
      <td>{row["Check ID"]}</td>
      <td>{row["Check Description"]}</td>
      <td>{row["Check Date"]}</td>
      <td>{row["Check Type"]}</td>
      <td>{row["Check Status"]}</td>
    </tr>
  ));

  const headerRow = headers.map((header, idx) => (
    <th key={idx}><span>{header}</span></th>
  ));

  return (
    <div className={styles.tableContainer}>
      <h1 className={styles.title}>Recent Checks Performed</h1>

      <table className={styles.sortableTable}>
        <thead>
          <tr>
            {headerRow}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;
