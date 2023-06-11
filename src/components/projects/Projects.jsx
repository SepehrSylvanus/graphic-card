import React from "react";
import styles from "../gallery/Gallery.module.css";
import project1 from "../../stats/imgs/projectsImg/project1.jpg";
import project2 from "../../stats/imgs/projectsImg/project2.jpg";
import project3 from "../../stats/imgs/projectsImg/project3.jpg";
import project4 from "../../stats/imgs/projectsImg/project4.jpg";
import project5 from "../../stats/imgs/projectsImg/project5.jpg";
import project6 from "../../stats/imgs/projectsImg/project6.jpg";
import { Link } from "react-router-dom";
import { animated, useSpring } from 'react-spring';

const Projects = () => {
 
  return (
    <div className={`${styles.questionsContainer} `}>
      <Link to='/projects/project1' className={styles.eachAbout}>
        <div className={styles.iconContainer}>
          <img src={project1} />
        </div>
        <p>عکس 1</p>
      </Link>
      <Link to='/projects/project2' className={styles.eachAbout}>
        <div className={styles.iconContainer}>
          <img src={project2} />
        </div>
        <p>عکس 2</p>
      </Link>
      <Link to='/projects/project3' className={styles.eachAbout}>
        <div className={styles.iconContainer}>
          <img src={project3} />
        </div>
        <p>عکس 3</p>
      </Link>
      <Link to='/projects/project4' className={styles.eachAbout}>
        <div className={styles.iconContainer}>
          <img src={project4} />
        </div>
        <p>عکس 4</p>
      </Link>
      <Link to='/projects/project5' className={styles.eachAbout}>
        <div className={styles.iconContainer}>
          <img src={project5} />
        </div>
        <p>عکس 5</p>
      </Link>
      <Link to='/projects/project6' className={styles.eachAbout}>
        <div className={styles.iconContainer}>
          <img src={project6} />
        </div>
        <p>عکس 6</p>
      </Link>
    </div>
  );
};

export default Projects;
