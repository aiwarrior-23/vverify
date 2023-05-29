import React from 'react';
import "./PriceChartIndividual.module.css"

const FixedTableHeader = () => {
  const data = [
    { code: 'AAC', company: 'AUSTRALIAN COMPANY', price: '$1.38', change: '+2.01', percentage: '-0.36%' },
    { code: 'AAD', company: 'AUSENCO', price: '$2.38', change: '-0.01', percentage: '-1.36%' },
    { code: 'AAX', company: 'ADELAIDE', price: '$3.22', change: '+0.01', percentage: '+1.36%' },
    { code: 'XXD', company: 'ADITYA BIRLA', price: '$1.02', change: '-1.01', percentage: '+2.36%' },
    // add more data here
  ];

  return (
    <section>
      <h1>Costing for Individuals</h1>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr>
              <th>Check Type</th>
              <th>Price</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.company}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FixedTableHeader;
