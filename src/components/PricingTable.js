import React from 'react';
import './PricingTable.css';

const PricingTable = () => {
  return (
    <div className="table">
      <div className="table-cell">
      <h3>Check Type</h3>
      </div>
      <div className="table-cell plattform">
        <h3>V-Verify for Individuals</h3>
      </div>
      <div className="table-cell enterprise">
        <h3>V-Verify for Business</h3>
      </div>
      <div className="table-cell cell-feature">Digital ID Check</div>
      <div className="table-cell">
          <p style={{color:"black"}}>INR 500</p>
      </div>
      <div className="table-cell">
        <p style={{color:"black"}}>INR 500</p>
      </div>
      <div className="table-cell cell-feature">Right to Work Check</div>
      <div className="table-cell">
        <p style={{color:"black"}}>INR 500</p>
      </div>
      <div className="table-cell">
        <p style={{color:"black"}}>INR 500</p>
      </div>
      <div className="table-cell cell-feature">Basic DBS Check</div>
      <div className="table-cell">
        <p style={{color:"black"}}>INR 500</p>
      </div>
      <div className="table-cell">
        <p style={{color:"black"}}>INR 500</p>
      </div>
      <div className="table-cell cell-feature">Enhanced DBS Check</div>
      <div className="table-cell">
        <p style={{color:"black"}}>INR 500</p>
      </div>
      <div className="table-cell">
        <p style={{color:"black"}}>INR 500</p>
      </div>
    </div>
  );
};

export default PricingTable;
