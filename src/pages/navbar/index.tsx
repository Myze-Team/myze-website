import React from 'react';
import styles from './index.module.scss';
import MyzePng from '../../assets/img/myze.png';

const Navbar: React.FC = () => {
  //${this.state.isTop ? styles.scrolled : ""}
  return (
    <div className={styles.nav}>
      <div className={`${styles.navbar} ${styles.responsiveContainer}`}>
        <div className={styles.logoContainer}>
          <img src={MyzePng} alt='Myze Logo' className={styles.myzeLogo} />
          <div className={styles.logoText}>
            myze
          </div>
        </div>
        <div className={styles.navbarList}>
          <div>How It Works</div>
          <div>About Us</div>
          <div>Contact Us</div>
          <div>Sign In</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
