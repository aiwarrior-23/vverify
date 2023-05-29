import React from 'react';
import Hero from "./Hero"
import Recipe from './Card';
import styles from "./AboutUs.module.css"
import Header from './Header';

function AboutUs() {
    return (
        <div>
            <Header />
            <div className={styles.infoSection}>
                <div className={styles.textPart}>
                    <h2 className={styles["heading"]}>Where we came from</h2>
                    <p className={styles["paragraph"]}>V-Verify was started as a family business. It was founded by Jay
                        , who made it his mission to make it quicker and easier for employers
                        to get DBS and other pre-employment checks for their employees. He created a
                        revolutionary website that allows businesses to perform various checks in one place –
                        and V-Verify was born. </p>
                </div>
                <div className={styles.imagePart}>
                    <img src="cxx.png" alt="description" className={styles.imageStyle} />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
