import React, {useEffect} from "react";
import styles from "./Share.module.css";
import qrCode from "../../stats/imgs/qrCode.png";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "react-spring";

const Share = () => {
  const handleBodyClick = () => {
    navigate(-1);
  }

  useEffect(() => {
    document.body.addEventListener('click', handleBodyClick);
    return () => document.body.removeEventListener('click', handleBodyClick);
  }, []);
  const fadeinAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { friction: 50 },
  });

  const navigate = useNavigate();
  return (
    <>
      <div className={styles.appContainer}>
      <div
        onClick={() => {
          navigate(-1);
        }}
        className={styles.backLayer}
      ></div>
        <div className={`${styles.cardContainer} `}>
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
                برای ورود به این صفحه
                <br />
                کد بالا را با دوربین گوشی اسکن کنید
              </p>

              <div className={styles.buttonsContainer}>
                <a
                  href="#"
                  style={{ backgroundColor: "#00CC6D" }}
                  className={styles.eachButton}
                >
                  <i class="fi fi-brands-whatsapp"></i>
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#38AEEA" }}
                  className={styles.eachButton}
                >
                  <i class="fi fi-brands-telegram"></i>
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#AA173B" }}
                  className={styles.eachButton}
                >
                  <i class="fi fi-rr-comment-sms"></i>
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#111519" }}
                  className={styles.eachButton}
                >
                  <i class="fi fi-rr-share"></i>
                </a>
              </div>
            </div>
          </animated.div>
        </div>

        <Footer />
      </div>
   
    </>
  );
};

export default Share;
