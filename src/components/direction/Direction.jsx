import React from "react";
import DirectionStyles from "./DirectionStyles.module.css";
import { animated, useSpring } from 'react-spring';

const Direction = () => {
 
  return (
    <div  className={`${DirectionStyles.questionsContainer} animate__animated animate__fadeInLeftBig`}>
      <p style={{fontSize: 16}} className={DirectionStyles.adressTitle}>
        آدرس: تهران، خیابان بهشتی، تقاطع سهروردی
      </p>
      <div className={DirectionStyles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573.2983647378273!2d51.43773834792082!3d35.73116246334379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e03e41b1b559f%3A0xe2f0df101f1e92a!2sSohrevardi!5e0!3m2!1sen!2s!4v1684657142922!5m2!1sen!2s"
          width="303"
          height="120"
          style={{ border: 0, borderRadius: 20 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Address"
        ></iframe>
      </div>

      <div className={DirectionStyles.iconsContainer}>
        <a href="#" className={DirectionStyles.eachIcon}>
          <div className={DirectionStyles.iconContainer}>
            <i style={{ marginBottom: -11 }} class="fi fi-rs-marker"></i>
          </div>
          <p>نشان</p>
        </a>
        <a href="#" className={DirectionStyles.eachIcon}>
          <div className={DirectionStyles.iconContainer}>
            <i class="fa-brands fa-waze"></i>
          </div>
          <p style={{marginRight: 19}}>ویز</p>
        </a>

        <a href="#" className={DirectionStyles.eachIcon}>
          <div className={DirectionStyles.iconContainer}>
            <i style={{ marginBottom: -9 }} class="fi fi-rs-map-marker"></i>
          </div>
          <p style={{marginRight: -6}}>گوگل مپس</p>
        </a>
      </div>
    </div>
  );
};

export default Direction;
