import React from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  const iconStyles = {
    color: "#797979",
    marginRight: "1.5em",
    fontSize: 19,
    display: 'inline-block !important'
  };
  const firstContactStyles = {
    marginTop: "2.40625rem",
  };
  return (
    <div className={styles.questionsContainer}>
      <div style={firstContactStyles} className={styles.eachContact}>
        <i style={iconStyles} className="fa-brands fa-figma"></i>
        <p className={styles.questionTitle}>@figma</p>
      </div>
      <div className={styles.eachContact}>
        <i style={iconStyles} className="fa-brands fa-twitter"></i>
        <p className={styles.questionTitle}>@fima</p>
      </div>
      <div className={styles.eachContact}>
        <i style={iconStyles} class="fa-brands fa-square-instagram"></i>
        <p className={styles.questionTitle}>@instagram</p>
      </div>
      <div className={styles.eachContact}>
        <i style={iconStyles} class="fa-solid fa-basketball"></i>
        <p className={styles.questionTitle}>@dribble</p>
      </div>
    </div>
  );
};

export default Contact;
