import React from 'react';
import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

function Recipe({title, img, lnk, desc, startCheck}) {
    return (
        <div className={styles["recipe-card"]}>
            <div className={styles["recipe-card-image"]}>
                <Link to="/dummy"><img src={img} alt={title} /></Link>
                <p style={{color:"#546072"}}>{desc}</p>
            </div>
            <div className={styles["recipe-card-content"]}>
                {/* <h3 className={styles["recipe-title"]}>
                    <Link to={lnk} style={{color:"#3a3a3a", textDecoration:"none", fontWeight:"1000"}}>{title}</Link>
                </h3> */}
                {/* <p style={{color:"#546072", marginRight:"30%"}}>{desc}</p> */}
                {startCheck && 
                    <Button variant='outlined' style={{color:"black", fontWeight:"bold", borderColor:"black"}}>
                        Start the Check
                    </Button>
                }
            </div>
        </div>
    );
}

export default Recipe
