import React from "react";
import styles from "./Gallery.module.css";
import { Link } from "react-router-dom";
import item1 from '../../stats/imgs/itemsImg/item1.jpg'
import item2 from '../../stats/imgs/itemsImg/item2.jpg'
import item3 from '../../stats/imgs/itemsImg/item3.jpg'
import item4 from '../../stats/imgs/itemsImg/item4.jpg'
import item5 from '../../stats/imgs/itemsImg/item5.jpg'
import item6 from '../../stats/imgs/itemsImg/item6.jpg'

const Gallery = () => {
 
  return (
    <div  className={`${styles.questionsContainer} animate__animated animate__fadeInLeft`}>
    <Link to='/gallery/item1' className={styles.eachAbout}>
       <div className={styles.iconContainer}>
<img src={item1} alt='item'/>
       </div>
       <p>عکس 1</p>
    </Link>
    <Link to='/gallery/item2' className={styles.eachAbout}>
         <div className={styles.iconContainer}>
      <img src={item2}alt='item'/>
       </div>
       <p>عکس 2</p>
    </Link>
    <Link to='/gallery/item3' className={styles.eachAbout}>
        <div className={styles.iconContainer}>
      <img src={item3} alt='item'/>
       </div>
       <p>عکس 3</p>
    </Link>
    <Link to='/gallery/item4' className={styles.eachAbout}>
        <div className={styles.iconContainer}>
        <img src={item4} alt='item'/>
       </div>
       <p>عکس 4</p>
    </Link>
    <Link to='/gallery/item5' className={styles.eachAbout}>
        <div className={styles.iconContainer}>
      <img src={item5} alt='item'/>
       </div>
       <p>عکس 5</p>
    </Link>
    <Link to='/gallery/item6' className={styles.eachAbout}>
        <div className={styles.iconContainer}>
       <img src={item6} alt='item'/>
       </div>
       <p>عکس 6</p>
    </Link>
</div>
  );
};

export default Gallery;
