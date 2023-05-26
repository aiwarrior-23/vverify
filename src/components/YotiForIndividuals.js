// Login.js

import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom'; // Import useHistory
import InfoSectionWithImageRight from "./InfoSectionWithImageRight";
import InfoSectionWithImage from "./InfoSectionWithImage";
import { Button } from "@material-ui/core";
import Header from "./Header"
import SortableTable from "./ChecksTable";

function YotiForIndividual() {
    const data = [
        {
            "Check ID": "abc-123-g67y",
            "Check Description": "Basic DBS Check",
            "Check Date": "23/10/1989",
            "Check Type": "DBS",
            "Check Status": "In-Progress"
        }]

    return (
        <div>
            <Header />
            <InfoSectionWithImageRight
                title="V-Verify is your secure digital ID"
                img="https://www.yoti.com/wp-content/uploads/Agecheck_compr.webp"
                desc="The safe way to prove your identity, online and in person."
                clsH="yotiIndividualHeading"
                clsP="yotiIndividualParagraph"
            />
            <div style={{ marginTop: "-8%" }}>
                <InfoSectionWithImage
                    title="Safely store your details, securely prove who you are"
                    img="https://uploads-ssl.webflow.com/622f09894fc230ad07de84a9/62693081500de0f10bb1e8ae_Group%201579-p-500.webp"
                    desc="Keep your personal details safely stored in the Yoti app, where only you can access them. 
            When you need to prove your age, identity or other details about yourself with a business or another person, you can securely share just the details required."
                    clsH="yotiIndividualHeading"
                    clsP="yotiIndividualParagraph"
                />
            </div>
            <div style={{ marginTop: "-8%" }}>
                <h1>Create your account in minutes</h1>
                <p>Verify your identity details once to create your reusable ID.</p>
                <Button variant="outlined" style={{ width: "20%" }}>Register Now</Button>
            </div>
            <div style={{ marginTop: "5%" }}>
                <h1 style={{ marginBottom: "-3%" }}>What you can do with your digital ID</h1>
                <InfoSectionWithImage
                    title="Prove your identity"
                    title2="Prove your age"
                    img="https://uploads-ssl.webflow.com/622f09894fc230ad07de84a9/62693081500de0f10bb1e8ae_Group%201579-p-500.webp"
                    desc="Keep your personal details safely stored in the Yoti app, where only you can access them. 
            When you need to prove your age, identity or other details about yourself with a business or another person, you can securely share just the details required."
                    desc2="Prove your age online and at 12,000 convenience stores in England and Wales* without revealing your whole identity. "
                    clsH="yotiIndividualHeading"
                    clsP="yotiIndividualParagraph"
                />
            </div>
            <div style={{ marginRight: "50%" }}>
                <SortableTable data={data} />
            </div>
            <div>
                <InfoSectionWithImage
                    title="What is a DBS Check?"
                    img="https://uploads-ssl.webflow.com/622f09894fc230ad07de84a9/62693081500de0f10bb1e8ae_Group%201579-p-500.webp"
                    desc="Right to Work Checks are an essential part of the recruitment process, enabling employers to verify that potential employees are eligible to work in the UK.

                    The employer must check the applicable documents – for example, a passport or visa – to establish whether a prospective employee has a time-limited or permanent right to work.
                    
                    Employers are required to do this before employing any person to make sure they are legally allowed to do the work in question. Failing to do so puts the employer at risk of being fined by the Home Office."
                    clsH="yotiIndividualHeading"
                    clsP="yotiIndividualParagraph"
                />
                <InfoSectionWithImageRight
                title="V-Verify is your secure digital ID"
                img="https://uploads-ssl.webflow.com/622f09894fc230ad07de84a9/62693081500de0f10bb1e8ae_Group%201579-p-500.webp"
                desc="Right to Work Checks are an essential part of the recruitment process, enabling employers to verify that potential employees are eligible to work in the UK.

                The employer must check the applicable documents – for example, a passport or visa – to establish whether a prospective employee has a time-limited or permanent right to work.
                
                Employers are required to do this before employing any person to make sure they are legally allowed to do the work in question. Failing to do so puts the employer at risk of being fined by the Home Office."
                clsH="yotiIndividualHeading"
                clsP="yotiIndividualParagraph"
            />
            </div>
        </div>
    );
}

export default YotiForIndividual;
