import React from 'react';
import Recipe from './Card';
import './AfterLogin.module.css'
import AfterLoginHeader from './AfterLoginHeader';

const AfterLogin = () => (
      <div>
            <AfterLoginHeader />
            <div>
                  <h1>Welcome to V-Verify Hub</h1>
                  <i>Logged in as: himanshuit3036@gmail.com</i>
            </div>
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
      </div>
);

export default AfterLogin;
