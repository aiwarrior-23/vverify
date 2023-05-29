import React, { useState, useEffect } from 'react';
import styles from './Tile.module.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Tile = ({ title, title2, img, desc, desc2 }) => {
  const texts = ["Background Screening ", "RTW Check ", "Identity Check ", "DBS Check "];
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isDeleting) {
        setText((text) => text.slice(0, -1));
        setCurrentIndex((currentIndex) => currentIndex - 1);
      } else {
        setText((text) => text + texts[currentTextIndex][currentIndex]);
        setCurrentIndex((currentIndex) => currentIndex + 1);
      }
    }, 50);

    if (!isDeleting && currentIndex === texts[currentTextIndex].length) {
      setIsDeleting(true);
      clearInterval(timer);
    }

    if (isDeleting && currentIndex === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((currentTextIndex) => (currentTextIndex + 1) % texts.length);
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [currentIndex, currentTextIndex, isDeleting, texts]);
  return (
    <div className={styles.infoSection}>
      <div className={styles.imagePart}>
        <img src={img} alt="description" className={styles.imageStyle} />
      </div>
      <div className={styles.contentPart}>
        <div className={styles.textPart}>
          <h2 className={styles.heading}>
            <span>Your </span>
            <span>{text}</span>
          </h2>
          <h2 className={styles.heading} style={{marginTop:"-5%"}}>Expert</h2>

          <p className={styles.paragraph}>{desc}</p>
          <h2 className={styles.heading}>{title2}</h2>
          <p className={styles.paragraph}>{desc2}</p>
        </div>
        <div className={styles.buttonSection}>
          <Link to="/vverifyIndividual"><Button className={styles.buttonStyle} variant="outlined">V-Verify for Individuals</Button></Link>
          <Link to="/vverifyBusiness"><Button className={styles.buttonStyle} variant="outlined">V-Verify for Business</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Tile;
