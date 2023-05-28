import React from 'react';
import Recipe from './Card';
import './AfterLogin.module.css'
import AfterLoginHeader from './AfterLoginHeader';
import SortableTable from './ChecksTable';
import styles from "./AfterLogin.module.css"
import Dashboard from './Dashboard';
import { useLocation } from 'react-router-dom'; // Import useLocation hook


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
                  <div style={{backgroundColor: "rgb(83, 83, 233)"}}>
                        <SortableTable data={data} />
                  </div>
                  <div>
                        <h1>Please select a Service</h1>
                        <p>Given below are the services that are provided by V-Verify. Please select a service and start the check</p>
                        <section className="recipe-container">
                              <Recipe
                                    title="Enhanced DBS"
                                    img="https://www.ucheck.co.uk/wp-content/uploads/list-icon-with-checkmark.svg"
                                    lnk="/formdialog"
                                    desc="Upgrade the check to Enhanced DBS for effective validations"
                                    startCheck={true}
                              />
                              <Recipe
                                    title="Basic DBS"
                                    img="https://www.ucheck.co.uk/wp-content/uploads/paper-check-mark.svg"
                                    lnk="/formdialog"
                                    desc="Start the basic DBS check for efficient validations"
                                    startCheck={true}
                              />
                              <Recipe
                                    title="RTW"
                                    img="https://www.ucheck.co.uk/wp-content/uploads/scale-icon.svg"
                                    lnk="/rtw"
                                    desc="Initiate the check for your eligibility for Right to Work"
                                    startCheck={true}
                              />
                              <Recipe
                                    title="Identity Check"
                                    img="https://www.ucheck.co.uk/wp-content/uploads/identity-check-icon.svg"
                                    desc="Check the identity of your personnel and verify it efficiently"
                                    startCheck={true}
                              />
                        </section>
                        {email === "pradeep.sen.sap@gmail.com" && <Dashboard />}
                  </div>
            </div>
      );
};

export default AfterLogin;
