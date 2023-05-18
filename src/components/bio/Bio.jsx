import React from "react";
import styles from "../body/Body.module.css";
const Bio = () => {
  const textStyle ={
    lineHeight: '22.4px'
  }
  return (
    <div className={styles.questionsContainer}>
      <p className={styles.questionTitle}>Your story</p>
      <p style={textStyle} className={styles.questionAnswer}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.{" "}
      </p>
    </div>
  );
};

export default Bio;
