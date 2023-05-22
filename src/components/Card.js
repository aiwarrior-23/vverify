import React from 'react';
import styles from "./Card.module.css"

function Recipe({title, img}) {
    return (
        <div className={styles["recipe-card"]}>
            <div className={styles["recipe-card-image"]}>
                <img src={img} alt={title} />
            </div>
            <div className={styles["recipe-card-content"]}>
                <h3 className={styles["recipe-title"]}>{title}</h3>
            </div>
        </div>
    );
}

export default Recipe