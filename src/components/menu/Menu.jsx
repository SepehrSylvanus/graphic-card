import React from "react";
import styles from "./Menu.module.css";
import { animated, useSpring } from 'react-spring';

const Menu = () => {

 
  return (
    <div  className={`${styles.questionsContainer}`}>
      <div className={styles.menuContainer}>
        <div className={styles.eachItem}>
          <p className={styles.title}>تلفن‌های هوشمند</p>
          <p className={styles.price}>599$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>لپ تاپ</p>
          <p className={styles.price}>999$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>کنسول‌های بازی</p>
          <p className={styles.price}>399$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>هدفون‌های وایرلس</p>
          <p className={styles.price}>149$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>هدست‌های واقعیت مجازی</p>
          <p className={styles.price}>299$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>ساعت‌های هوشمند</p>
          <p className={styles.price}>249$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>اسپیکرهای پرتابل</p>
          <p className={styles.price}>79$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>ایرباد‌های بلوتوث</p>
          <p className={styles.price}>99$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>دوربین‌های امنیت خانه</p>
          <p className={styles.price}>199$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>پدهای شارژ وایرلس</p>
          <p className={styles.price}>39$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>پهباد با دوربین HD</p>
          <p className={styles.price}>599$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>دستیار تناسب اندام</p>
          <p className={styles.price}>129$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>مرکز هوشمندسازیِ خانه</p>
          <p className={styles.price}>199$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>مودم‌های پر سرعت</p>
          <p className={styles.price}>129$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>هارد اکسترنال</p>
          <p className={styles.price}>99$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>پرینترهای 3 بعدی</p>
          <p className={styles.price}>499$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>ترموستات‌های هوشمند</p>
          <p className={styles.price}>199$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>جاروبرقی‌های هوشمند</p>
          <p className={styles.price}>299$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>سیستم برقی هوشمند</p>
          <p className={styles.price}>149$</p>
        </div>
        <div className={styles.eachItem}>
          <p className={styles.title}>آیفون‌های تصویری</p>
          <p className={styles.price}>199$</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
