import React from "react";
import styles from "./Card.module.css";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Body from "../body/Body";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
const Card = () => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  function closeTheBarcode() {
    if (pathname === "/share" || pathname === "/contact-save") {
      navigate(-1);
    }
  }
  return (
    <div className={styles.appContainer} onClick={closeTheBarcode}>
      <div className={styles.cardContainer}>
        <Header />
        <Navbar />
        <div className={styles.bodyContainer}>
          <Outlet />
          {pathname === "/" && <Body />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Card;
