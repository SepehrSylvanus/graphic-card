import React from "react";
import rezaProf from "../../stats/imgs/rezaProf.jpg";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.imgContainer}>
          <img className={styles.rezaProf} src={rezaProf} alt="Reza" />
        </div>
        <h3 className={styles.h3}>رضا کارگزار</h3>
        <h4 className={styles.subHeading}>طراح برند، کارشناس شبکه‌های اجتماعی</h4>
        <p className={styles.p}>سرپرست استودیو شنودید</p>
      </div>
    </div>
  );
};

export default Header;
