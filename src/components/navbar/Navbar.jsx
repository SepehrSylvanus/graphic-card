import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink, NavNavLink } from "react-router-dom";
const Navbar = () => {
  const [selected, setSelected] = useState(0);
  function setPosAndWidth() {
    switch (selected) {
      case 1:
        return { width: "40px", left: "156px" };
      case 2:
        return { width: "70px", left: "205px" };
      default:
        return { width: "60px", left: "90px" };
    }
  }
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
        <li onClick={() => setSelected(0)}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li onClick={() => setSelected(1)}>
          <NavLink to="/bio">Bio</NavLink>
        </li>
        <li onClick={() => setSelected(2)}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <div className={styles.slide} style={setPosAndWidth()}>
          <div className={styles.slideInner}></div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
