import React, { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [selected, setSelected] = useState(0);
function setPosAndWidth(){
    switch(selected){
        case 1:
            return{width: '40px', left:'138px'}
            case 2:
                return{width: '65px', left:'190px'}
        default:
            return{width: '60px', left:'73px'}
    }
}
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
        <li onClick={() => setSelected(0)}>About</li>
        <li onClick={() => setSelected(1)}>Bio</li>
        <li onClick={() => setSelected(2)}>Contact</li>
        <div className={styles.slide} style={setPosAndWidth()}>
          <div className={styles.slideInner}></div>
        </div>
      </ul>
    </div>
  )
}

export default Navbar
