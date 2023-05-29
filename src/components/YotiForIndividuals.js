// Login.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom'; // Import useHistory
import InfoSectionWithImageRight from "./InfoSectionWithImageRight";
import InfoSectionWithImage from "./InfoSectionWithImage";
import { Button } from "@material-ui/core";
import Header from "./Header"
import SortableTable from "./ChecksTable";
import PricingTable from "./PricingTable";
import styles from "./YotiForIndividuals.module.css"
import FixedTableHeader from "./PriceChartIndividual";

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
            <marquee style={{color:"red", fontWeight:"bold"}}>**** This page is still under development ***</marquee>
            <div className={styles.infoSection}>
                <div className={styles.textPart}>
                    <h2 className={styles["heading"]}>V-Verify is your secure digital ID</h2>
                    <p className={styles["paragraph"]}>The safe way to prove your identity, online and in person.</p>
                </div>
                <div className={styles.imagePart}>
                    <img src="https://www.yoti.com/wp-content/uploads/Agecheck_compr.webp" alt="description" className={styles.imageStyle} />
                </div>
            </div>
            <div style={{ marginTop: "-8%" }}>
                <div className={styles.infoSection2}>
                    <div className={styles.imagePart2}>
                        <img src="https://uploads-ssl.webflow.com/622f09894fc230ad07de84a9/62693081500de0f10bb1e8ae_Group%201579-p-500.webp" alt="description" className={styles.imageStyle} />
                    </div>
                    <div className={styles.textPart2}>
                        <h2 className={styles["heading2"]}>Safely store your details, securely prove who you are</h2>
                        <p className={styles["paragraph2"]}>Keep your personal details safely stored in the Yoti app, where only you can access them.
                            When you need to prove your age, identity or other details about yourself with a business or another person, you can securely share just the details required.</p>
                    </div>
                </div>
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
                <FixedTableHeader />
            </div>
        </div>
    );
}

export default YotiForIndividual;
