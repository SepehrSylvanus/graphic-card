import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import styles from "./Item.module.css";
import Footer from "../footer/Footer";
import { gallerItemsDatas } from "../../datas";
import { animated, useSpring } from "react-spring";
import ReactDom from "react-dom";
const Item = ({ setEnableTransition }) => {
  const fadeinAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { friction: 50 },
  });
  const location = useLocation();
  const path = location.pathname;
  const index = path[path.length - 1] - 1;
  function logs() {
    console.log(index);
  }
  function navigateBack() {
    setEnableTransition(false);
    navigate(-1);
    console.log("clicked!");
  }
  const { itemNumber } = useParams();
  const navigate = useNavigate();
  return ReactDom.createPortal(
    <div
      onClick={logs}
      className={`${styles.appContainer} animate__animated animate__fadeIn`}
    >
      <div onClick={navigateBack} className={styles.backLayer} />

      <animated.div style={fadeinAnimation} className={styles.cardContainer}>
        <div className={styles.imgContainer}>
          <img src={gallerItemsDatas[index].itemImg} alt={itemNumber} />
          <p className={styles.imgDescription}>
            {gallerItemsDatas[index].title}
          </p>
        </div>
        <p className={styles.description}>
          {gallerItemsDatas[index].description}
        </p>

        <div onClick={navigateBack} className={styles.closeIconContainer}>
          <i class="fi fi-rr-cross-small"></i>
        </div>
      </animated.div>

     <div className={styles.footerMainContainer}>
     <Footer />
     </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Item;
