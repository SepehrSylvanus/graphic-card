import React from "react";
import styles from "./Card.module.css";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Body from "../body/Body";

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <Header />
      <Navbar/>
      <Body/>
    </div>
  );
};

export default Card;
