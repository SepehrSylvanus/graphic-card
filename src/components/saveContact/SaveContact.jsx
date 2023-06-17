import React, { useEffect } from "react";
import styles from "./SaveContact.module.css";
import qrCode from "../../stats/imgs/qrCode.png";
import { useState } from "react";
import { animated, useSpring } from 'react-spring';
import ReactDom from 'react-dom'
const SaveContact = ({open, setIsSaveOpen}) => {

  const fadeinAnimation = useSpring({
    opacity: 1,
    from: {opacity: 0},
    config: {friction: 50}
   })
  const [phoneNumber, setPhoneNumber] = useState(0);
  function handleChange(e) {
    setPhoneNumber(e.target.value);
  }
  useEffect(() => {
    console.log(phoneNumber);
  }, [phoneNumber]);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(phoneNumber);
  }

  if (!open) return null
  return ReactDom.createPortal(
    <animated.div className={`${styles.appContainer } animate__animated animate__fadeIn`}>
    <div className={styles.backLayer} onClick={()=> setIsSaveOpen(false)}/>
       <div  className={`${styles.cardContainer} `}>
        <div style={fadeinAnimation}> 
        
         <div
           onClick={() => setIsSaveOpen(false)}
           className={styles.closeIconContainer}
         >
           <i class="fi fi-rr-cross-small"></i>
         </div>
         <div className={styles.contentContainer}>
           <h1 className={styles.title}>اسکن کنید</h1>
           <img className={styles.qrImg} src={qrCode} alt="qrcode" />
           <p className={styles.imgSub}>
             برای ذخیره اطلاعات مخاطب کد بالا را با دوربین اسکن کنید
           </p>
           <form onSubmit={handleSubmit} className={styles.form} action="">
             <input placeholder="09123456789" onChange={handleChange} type="text" name="" id="" />
             <button type="submit">
               <i class="fi fi-rs-user-add"></i>
             </button>
           </form>
           <p className={styles.formDesc}>با یک کلیک مخاطب را ذخیره کنید</p>
         </div>
        </div>
       </div>
       
     
      
    
    </animated.div>,
    document.getElementById('portal')
  );
};

export default SaveContact;
