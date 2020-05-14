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
      <img src={MyzeSvg} alt="Myze Logo" className={styles.myzeLogo} />
      <div className={styles.navbarList}>
        <div>How It Works</div>
        <div>About Us</div>
        <div>Contact Us</div>
        <div>Sign In</div>
      </div>
    </div>
  </div>
);

export default Navbar;
