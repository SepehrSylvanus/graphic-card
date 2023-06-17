import React from "react";
import styles from "./Share.module.css";
import qrCode from "../../stats/imgs/qrCode.png";
import Footer from "../footer/Footer";
import { animated, useSpring } from "react-spring";
import ReactDom from "react-dom";

const Share = ({ open, setIsShareOpen }) => {
 


  const fadeinAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { friction: 50 },
  });


  if (!open) return null;
  return ReactDom.createPortal(
    <div className={styles.appContainer}>
      <div className={styles.backLayer} onClick={() => setIsShareOpen(false)} />

      <div className={`${styles.cardContainer} `}>
        <animated.div style={fadeinAnimation}>
          <div className={styles.closeIconContainer} onClick={() => setIsShareOpen(false)}>
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

      
    </div>,
    document.getElementById("portal")
  );
};

export default Share;
