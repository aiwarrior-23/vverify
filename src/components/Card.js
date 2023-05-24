import React from 'react';
import styles from "./Card.module.css"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button } from '@material-ui/core';

function Recipe({title, img, lnk, desc, startCheck}) {
    return (
        <div className={styles["recipe-card"]}>
            <div className={styles["recipe-card-image"]}>
                <img src={img} alt={title} />
            </div>
            <div className={styles["recipe-card-content"]}>
                <h3 className={styles["recipe-title"]}>
                    <Link to={lnk} style={{color:"#546072", textDecoration:"none"}}>{title}</Link>
                </h3>
                <p style={{color:"#546072"}}>{desc}</p>
                {startCheck && 
                    <Button variant='outlined' style={{color:"#546072"}}>
                        Start the Check
                    </Button>
                }
            </div>
        </div>
    );
}

export default Recipe
