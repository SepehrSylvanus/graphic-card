import React from "react";
import styles from "./Card.module.css";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Body from "../body/Body";
import { Outlet, useLocation } from "react-router-dom";
const Card = () => {
  const location = useLocation()
  const {pathname} = location
  return (
    <div className={styles.cardContainer}>
      <Header />
      <Navbar/>
      <Outlet/>
     {pathname === '/' && <Body/>}
    </div>
  );
};

export default Card;
