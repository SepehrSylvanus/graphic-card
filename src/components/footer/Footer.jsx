import React from "react";
import styles from "./Footer.module.css";
const Footer = ({ setIsSaveOpen, setIsShareOpen }) => {
  return (
    < >
      <div className={styles.footerContainer}>
        <div className={styles.iconsContainer}>
          <div onClick={() => setIsSaveOpen()} className={styles.iconContainer}>
            <i class="fi fi-rs-user-add"></i>
          </div>
          <div
            onClick={() => setIsShareOpen()}
            className={styles.barcodeContainer}
          >
            <div className={styles.iconContainer}>
              <i class="fi fi-rr-apps"></i>
            </div>
          </div>
          <div
            onClick={() => setIsShareOpen()}
            className={styles.iconContainer}
          >
            <i class="fi fi-rr-inbox-out"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
