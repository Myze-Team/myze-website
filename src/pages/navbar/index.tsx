import React from 'react';
import styles from './index.module.scss';
import MyzeSvg from '../../assets/img/myze.svg';

interface NavbarProps {
  scrolled: string;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => (
  // ${this.state.isTop ? styles.scrolled : ""}
  <div className={`${styles.nav} ${scrolled}`}>
    <div className={`${styles.navbar} responsiveContainer`}>
      <div className={styles.logoContainer}>
        <img src={MyzeSvg} alt="Myze Logo" className={styles.myzeLogo} />
        <div className={styles.logoText}>
          myze
        </div>
      </div>
      <div className={styles.navbarList}>
        <a>How It Works</a>
        <a>About Us</a>
        <a>Contact Us</a>
        <a>Sign In</a>
      </div>
    </div>
  </div>
);

export default Navbar;
