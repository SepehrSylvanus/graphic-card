import React from 'react'
import styles from './Body.module.css'
const Body = () => {
  return (
    <div className={styles.questionsContainer}>
        <div className={styles.eachAbout}>
            <p className={styles.questionTitle}>Superpower</p>
            <p className={styles.questionAnswer}>What are your design superpowers?</p>
        </div>
        <div className={styles.eachAbout}>
            <p className={styles.questionTitle}>Weakness</p>
            <p className={styles.questionAnswer}>Where can you grow?</p>
        </div>
        <div className={styles.eachAbout}>
            <p className={styles.questionTitle}>Tools of the trade</p>
            <p className={styles.questionAnswer}>What tools are you proficient in?</p>
        </div>
        <div className={styles.eachAbout}>
            <p className={styles.questionTitle}>Guilty pleasures</p>
            <p className={styles.questionAnswer}>3 guilty pleasures</p>
        </div>
    </div>
  )
}

export default Body