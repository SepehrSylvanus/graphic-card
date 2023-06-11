import React, { useEffect } from "react";
import styles from "./SaveContact.module.css";
import qrCode from "../../stats/imgs/qrCode.png";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { animated, useSpring } from 'react-spring';

const SaveContact = () => {

  const fadeinAnimation = useSpring({
    opacity: 1,
    from: {opacity: 0},
    config: {friction: 50}
   })
  const [phoneNumber, setPhoneNumber] = useState(0);
  function handleChange(e) {
    setPhoneNumber(e.target.value);
  }
  useEffect(() => {
    console.log(phoneNumber);
  }, [phoneNumber]);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(phoneNumber);
  }
  const navigate = useNavigate();
  return (
    <div className={styles.appContainer}>
       <div
          onClick={() => {
            navigate(-1);
          }}
          className={styles.backLayer}
        ></div>
      <div  className={`${styles.cardContainer} animate__animated animate__fadeIn`}>
       <animated.div style={fadeinAnimation}> 
       
        <div
          onClick={() => {
            navigate(-1);
          }}
          className={styles.closeIconContainer}
        >
          <i class="fi fi-rr-cross-small"></i>
        </div>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>اسکن کنید</h1>
          <img className={styles.qrImg} src={qrCode} alt="qrcode" />
          <p className={styles.imgSub}>
            برای ذخیره اطلاعات مخاطب کد بالا را با دوربین اسکن کنید
          </p>
          <form onSubmit={handleSubmit} className={styles.form} action="">
            <input placeholder="09123456789" onChange={handleChange} type="text" name="" id="" />
            <button type="submit">
              <i class="fi fi-rs-user-add"></i>
            </button>
          </form>
          <p className={styles.formDesc}>با یک کلیک مخاطب را ذخیره کنید</p>
        </div>
       </animated.div>
      </div>
      <Footer />
     
    </div>
  );
};

export default SaveContact;
