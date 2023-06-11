import React from 'react'
import styles from './Project.module.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import {prohectItemsData} from '../datas'
import sampleProject from '../stats/sample.pdf'
import { animated, useSpring } from 'react-spring';

const Project = () => {
  const fadeinAnimation = useSpring({
    opacity: 1,
    from: {opacity: 0},
    config: {friction: 50}
   })
  const location = useLocation();
  const path = location.pathname;
const index = path[path.length - 1] - 1
function logs(){
 
  console.log(index)
}
  const { itemNumber } = useParams();
  const navigate = useNavigate();
  return (
    <div onClick={logs} className={styles.appContainer}>
      <animated.div style={fadeinAnimation} className={`${styles.cardContainer}  `}>
        <div className={styles.imgContainer}>
          <img src={prohectItemsData[index].projectImg} alt={itemNumber} />
          <p className={styles.imgDescription}>{prohectItemsData[index].title}</p>
        </div>
        <p className={styles.description}>{prohectItemsData[index].description}</p>

        <div
          onClick={() => {
            navigate(-1);
          }}
          className={styles.closeIconContainer}
        >
          <i class="fi fi-rr-cross-small"></i>
        </div>
        <a
        href={sampleProject}
         
          className={styles.downloadProjectButton}
        >
          دانلود پروژه
        </a>
      </animated.div>
      <div
            onClick={() => {
              navigate(-1);
            }}
            className={styles.backLayer}
          ></div>
      <Footer/>
    </div>
  );
}

export default Project