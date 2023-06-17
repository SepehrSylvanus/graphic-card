import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({enableTransition}) => {

  const prevPathRef = useRef(null)
  const [selected, setSelected] = useState(0);
  const bold = {
    fontWeight: "900",
  };
  const location = useLocation();
  useEffect(()=>{
    prevPathRef.current = location.pathname
  }, [location])

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/social":
        setSelected(0);
        break;
      case "/direction":
        setSelected(1);
        break;
      case "/menu":
        setSelected(2);
        break;
      case "/gallery":
        setSelected(3);
        break;
      case "/projects":
        setSelected(4);
        break;
      case "/form":
        setSelected(5);
        break;
      default:
        setSelected(0);
        break;
    }
  }, [location.pathname]);

  const setPosAndWidth = () => {
    if(enableTransition){
      switch (selected) {
        case 1:
          return { width: "70px", left: "63px" };
        case 2:
          return { width: "40px", left: "133px" };
        case 3:
          return { width: "50px", left: "171px" };
        case 4:
          return { width: "60px", left: "219px" };
        case 5:
          return { width: "80px", left: "280px" };
        default:
          return { width: "46px", left: "14px" };
      }
    }else{
      switch (selected) {
        case 1:
          return { width: "70px", left: "63px", transition: 'none' };
        case 2:
          return { width: "40px", left: "133px", transition: 'none' };
        case 3:
          return { width: "50px", left: "171px", transition: 'none' };
        case 4:
          return { width: "60px", left: "219px", transition: 'none' };
        case 5:
          return { width: "80px", left: "280px", transition: 'none' };
        default:
          return { width: "46px", left: "14px", transition: 'none' };
      }
    }
  };

  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList} onClick={()=>console.log(enableTransition)}>
        <li className={styles.links} onClick={() => setSelected(0)}>
          <NavLink style={selected === 0 ? bold : { fontWeight: "400" , opacity: .6}} to="/social">
            ارتباط
          </NavLink>
        </li>
        <li className={styles.links} onClick={() => setSelected(1)}>
          <NavLink style={selected === 1 ? bold : { fontWeight: "400" , opacity: .6}} to="/direction">
            مسیریابی
          </NavLink>
        </li>
        <li className={styles.links} onClick={() => setSelected(2)}>
          <NavLink style={selected === 2 ? bold : { fontWeight: "400" , opacity: .6}} to="/menu">
            منو
          </NavLink>
        </li>
        <li className={styles.links} onClick={() => setSelected(3)}>
          <NavLink style={selected === 3 ? bold : { fontWeight: "400" , opacity: .6}} to="/gallery">
            گالری
          </NavLink>
        </li>
        <li className={styles.links} onClick={() => setSelected(4)}>
          <NavLink style={selected === 4 ? bold : { fontWeight: "400" , opacity: .6}} to="/projects">
            پروژه‌ها
          </NavLink>
        </li>
        <li className={styles.links} onClick={() => setSelected(5)}>
          <NavLink style={selected === 5 ? bold : { fontWeight: "400" , opacity: .6}} to="/form">
            فرم تماس
          </NavLink>
        </li>
        <div className={styles.slide } style={setPosAndWidth()}>
          <div className={styles.slideInner}></div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
