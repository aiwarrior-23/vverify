import React from 'react';
import Recipe from './Card';
import './AfterLogin.module.css'
import AfterLoginHeader from './AfterLoginHeader';
import SortableTable from './ChecksTable';
import styles from "./AfterLogin.module.css"
import Dashboard from './Dashboard';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function AfterLogin() {
      const location = useLocation();
      const email = location.state.email;
      const data = [
            {
                  "Check ID": "abc-123-g67y",
                  "Check Description": "Basic DBS Check",
                  "Check Date": "23/10/1989",
                  "Check Type": "DBS",
                  "Check Status": "In-Progress"
            },
            {
                  "Check ID": "abc-123-g67y",
                  "Check Description": "Enhanced DBS Check",
                  "Check Date": "23/10/1989",
                  "Check Type": "E-DBS",
                  "Check Status": "Success"
            },
            {
                  "Check ID": "abc-123-g67y",
                  "Check Description": "RTW Check",
                  "Check Date": "23/10/1989",
                  "Check Type": "RTW",
                  "Check Status": "Failure"
            },
            // more data objects...
      ]
      return (
            <div style={{ backgroundColor: "linear-gradient(to right, #b0cefa, white)" }}>
                  <div>
                        <AfterLoginHeader />
                  </div>
                  <div className={styles['welcome-section']}>
                        <h1 className={styles['welcome-title']}>Welcome to V-Verify Hub</h1>
                        <p className={styles['logged-in']}>Logged in as: <span className={styles['email']}>{email}</span></p>
                  </div>
                  <div style={{ backgroundColor: "rgb(83, 83, 233)" }}>
                        <SortableTable data={data} />
                  </div>
                  <div>
                        <h1>Please select a Service</h1>
                        <p>Given below are the services that are provided by V-Verify. Please select a service and start the check</p>
                        <section className="recipe-container">
                              <div className={styles["recipe-card"]}>
                                    <div className={styles["recipe-card-image"]}>
                                           <Link to="/formdialog"><img src="https://www.ucheck.co.uk/wp-content/uploads/list-icon-with-checkmark.svg" alt="Enhanced DBS" /></Link>
                                    </div>
                                    <div className={styles["recipe-card-content"]}>
                                          <h3 className={styles["recipe-title"]}>
                                                <Link to="/formdialog" style={{ color: "#3a3a3a", textDecoration: "none", fontWeight: "1000" }}>Enhanced DBS</Link>
                                          </h3>
                                          <p style={{ color: "#546072"}}>"Upgrade the check to Enhanced DBS for effective validations"</p>
                                          <Link to="/formdialog">
                                          <Button variant='outlined' style={{ color: "black", fontWeight: "bold", borderColor: "black" }}>
                                                Start the Check
                                          </Button>
                                          </Link>
                                    </div>
                              </div>

                              <div className={styles["recipe-card"]}>
                                    <div className={styles["recipe-card-image"]}>
                                           <Link to="/formdialog"><img src="https://www.ucheck.co.uk/wp-content/uploads/paper-check-mark.svg" alt="Enhanced DBS" /></Link>
                                    </div>
                                    <div className={styles["recipe-card-content"]}>
                                          <h3 className={styles["recipe-title"]}>
                                                <Link to="/formdialog" style={{ color: "#3a3a3a", textDecoration: "none", fontWeight: "1000" }}>Basic DBS</Link>
                                          </h3>
                                          <p style={{ color: "#546072"}}>Start the basic DBS check for efficient validations</p>
                                          <Link to="/formdialog">
                                          <Button variant='outlined' style={{ color: "black", fontWeight: "bold", borderColor: "black" }}>
                                                Start the Check
                                          </Button>
                                          </Link>
                                    </div>
                              </div>

                              <div className={styles["recipe-card"]}>
                                    <div className={styles["recipe-card-image"]}>
                                           <Link to="/rtw"><img src="https://www.ucheck.co.uk/wp-content/uploads/scale-icon.svg" alt="Enhanced DBS" /></Link>
                                    </div>
                                    <div className={styles["recipe-card-content"]}>
                                          <h3 className={styles["recipe-title"]}>
                                                <Link to="/rtw" style={{ color: "#3a3a3a", textDecoration: "none", fontWeight: "1000" }}>RTW</Link>
                                          </h3>
                                          <p style={{ color: "#546072"}}>"Initiate the check for your eligibility for Right to Work"</p>
                                          <Link to="/rtw">
                                          <Button variant='outlined' style={{ color: "black", fontWeight: "bold", borderColor: "black" }}>
                                                Start the Check
                                          </Button>
                                          </Link>
                                    </div>
                              </div>

                              <div className={styles["recipe-card"]}>
                                    <div className={styles["recipe-card-image"]}>
                                           <Link to="/rtw"><img src="https://www.ucheck.co.uk/wp-content/uploads/identity-check-icon.svg" alt="Enhanced DBS" /></Link>
                                    </div>
                                    <div className={styles["recipe-card-content"]}>
                                          <h3 className={styles["recipe-title"]}>
                                                <Link to="/rtw" style={{ color: "#3a3a3a", textDecoration: "none", fontWeight: "1000" }}>Identity Check</Link>
                                          </h3>
                                          <p style={{ color: "#546072"}}>Check the identity of your personnel and verify it efficiently</p>
                                          <Link to="/rtw">
                                          <Button variant='outlined' style={{ color: "black", fontWeight: "bold", borderColor: "black" }}>
                                                Start the Check
                                          </Button>
                                          </Link>
                                    </div>
                              </div>
                        </section>
                        {email === "pradeep.sen.sap@gmail.com" && <Dashboard />}
                  </div>
            </div>
      );
};

export default AfterLogin;
