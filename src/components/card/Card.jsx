import React, { useState } from "react";
import styles from "./Card.module.css";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Body from "../body/Body";
import { Outlet, useLocation} from "react-router-dom";
import Footer from "../footer/Footer";
import SaveContact from "../saveContact/SaveContact";
import Share from "../share/Share";
const Card = ({enableTransition, setEnableTransition}) => {
  const [isSaveOpen, setIsSaveOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  function openSave() {
    setIsShareOpen(false);
    setIsSaveOpen(true);
  }
  function openShare() {
    setIsShareOpen(true);
    setIsSaveOpen(false);
  }

  return (
    <div className={styles.appContainer}>
      <div className={styles.cardContainer}>
        <Header />
        <Navbar enableTransition={enableTransition} setEnableTransition={setEnableTransition} />
        <div className={styles.bodyContainer}>
          <Outlet />
          {pathname === "/" && <Body />}
          <SaveContact open={isSaveOpen} setIsSaveOpen={setIsSaveOpen} />
          <Share open={isShareOpen} setIsShareOpen={setIsShareOpen} />
        </div>
      </div>
      <Footer setIsSaveOpen={openSave} setIsShareOpen={openShare} />
    </div>
  );
};

export default Card;
