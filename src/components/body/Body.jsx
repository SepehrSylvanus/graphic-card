import React from 'react';
import styles from './justBody.module.css';
import { animated, config, useSpring } from 'react-spring';
import SaveContact from '../saveContact/SaveContact';

const Body = () => {
  

  return (
    <div  className={`${styles.questionsContainer} `}>
      <a href="#" className={styles.eachAbout}>
        <div className={styles.iconContainer}>
          <i class="fa-brands fa-telegram"></i>
        </div>
        <p>تلگرام</p>
      </a>
      <a href="#" className={styles.eachAbout}>
        <div className={styles.iconContainer}>
          <i class="fa-brands fa-instagram"></i>
        </div>
        <p>پیج شنودید</p>
      </a>
      <a href="#" className={styles.eachAbout}>
        <div className={styles.iconContainer}>
          <i class="fa-brands fa-instagram"></i>
        </div>
        <p>اینستاگرام</p>
      </a>
      <div className={styles.eachAbout}>
        <div className={styles.iconContainer}>
          <i style={{ marginBottom: -20 }} class="fi fi-rs-marker"></i>
        </div>
        <p>آدرس</p>
      </div>
      <a href="#" className={styles.eachAbout}>
        <div className={styles.iconContainer}>
          <i style={{ marginBottom: -20 }} class="fi fi-ts-messages"></i>
        </div>
        <p>پیامک</p>
      </a>
      <div className={styles.eachAbout}>
        <div className={styles.iconContainer}>
          <i style={{ marginBottom: -20 }} class="fi fi-rr-mobile-button"></i>
        </div>
        <p>موبایل</p>
      </div>
      
    </div>
  );
};

export default Body;
