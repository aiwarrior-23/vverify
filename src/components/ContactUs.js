import React from 'react';
import Hero from "./Hero"
import Recipe from './Card';
import styles from "./ContactUs.module.css"
import Header from './Header';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
function ContactUs() {
    return (
        <div>
            <Header />
            {/* <section className={styles["recipe-container"]}>
                <div className={styles["recipe-card"]}>
                    <div className={styles["recipe-card-image"]}>
                        <img src="https://www.ucheck.co.uk/wp-content/uploads/list-icon-with-checkmark.svg" />
                    </div>
                    <div className={styles["recipe-card-content"]}>
                        <h3 className={styles["recipe-title"]}>
                            <Link style={{ color: "#3a3a3a", textDecoration: "none", fontWeight: "1000" }}>Customer enquiries</Link>
                        </h3>
                        <Button variant='outlined' style={{ color: "black", fontWeight: "bold", borderColor: "black", width:"70%" }}>
                            Get in touch
                        </Button>
                    </div>
                </div>
                <div className={styles["recipe-card"]}>
                    <div className={styles["recipe-card-image"]}>
                        <img src="https://www.ucheck.co.uk/wp-content/uploads/paper-check-mark.svg" />
                    </div>
                    <div className={styles["recipe-card-content"]}>
                        <h3 className={styles["recipe-title"]}>
                            <Link style={{ color: "#3a3a3a", textDecoration: "none", fontWeight: "1000" }}>Business enquiries</Link>
                        </h3>
                        <Button variant='outlined' style={{ color: "black", fontWeight: "bold", borderColor: "black", width:"70%" }}>
                        Get in touch
                        </Button>
                    </div>
                </div>
            </section> */}
            <div>
                <h1>Get in touch</h1>
                <div className={styles.container}>
                    <form>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label for="inputEmail">Email</label>
                                <input type="email" className={styles.formControl} id="inputEmail" placeholder="Email" />
                            </div>
                            <div className={styles.formGroup}>
                                <label for="inputName">Name</label>
                                <input type="text" className={styles.formControl} id="inputName" placeholder="Name" />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label for="inputAddress">Address</label>
                            <input type="text" className={styles.formControl} id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label for="inputCity">City</label>
                                <input type="text" className={styles.formControl} id="inputCity" />
                            </div>
                            <div className={styles.formGroup}>
                                <label for="inputZip">Zip</label>
                                <input type="text" className={styles.formControl} id="inputZip" />
                            </div>
                        </div>
                        <button type="submit" className={styles.btn}>Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
