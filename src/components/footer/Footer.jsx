import React, {useState, useEffect} from "react";
import styles from "./Footer.module.css";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
 function stopPropagation(e){
e.stopPropagation()
 }
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();
  const path = location.pathname;
  function opacitySetter(){
    if(path.startsWith('/contact-save') || path.startsWith('/share') || path.startsWith('/projects/project' ) || path.startsWith('/gallery/item')){
      return {opacity: '50%'}
    }
    
  }
  
  function makeItOpen(){
    if(path.startsWith('/contact-save') || path.startsWith('/share') || path.startsWith('/projects/project' ) || path.startsWith('/gallery/item')){
      setIsOpen(true)
      console.log(isOpen)
    }
  }
 useEffect(makeItOpen,[isOpen])
  return (
    <div style={opacitySetter()}  className={styles.footerContainer}>
      <div className={styles.iconsContainer}>
        <Link onClick={stopPropagation} style={isOpen? {cursor: 'default'}: {cursor: "pointer"}}  to={!isOpen ? "/contact-save" : '#'} className={styles.iconContainer}>
          <i class="fi fi-rs-user-add"></i>
        </Link>
        <Link onClick={stopPropagation} style={isOpen? {cursor: 'default', pointerEvents: 'none'}: {cursor: "pointer"}} to={!isOpen ? '/share' : '#'} className={styles.barcodeContainer}>
          <div className={styles.iconContainer}>
            <i class="fi fi-rr-apps"></i>
          </div>
        </Link>
        <Link onClick={stopPropagation} style={isOpen? {cursor: 'default'}: {cursor: "pointer"}} to={!isOpen ? '/share' : '#'}  className={styles.iconContainer}>
          <i class="fi fi-rr-inbox-out"></i>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
