import React from "react";
import rezaProf from "../../stats/imgs/rezaProf.jpg";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.imgContainer}>
          <img className={styles.rezaProf} src={rezaProf} alt="Reza image" />
        </div>
        <h3>Reza Kargozar</h3>
        <p>Digital marketing</p>
      </div>
     
    </div>
  );
};

export default Header;
