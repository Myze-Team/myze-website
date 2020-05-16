import React from 'react';
import styles from './index.module.scss';
import MyzeSvg from '../../assets/img/myze-icon.svg';

interface NavbarProps {
  scrolled: string;
}

const scrollTo = (id: string) => {
  window.scrollTo(0, document.getElementById(id)?.offsetTop! - 100);
};

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => (
  <div className={`${styles.nav} ${scrolled}`}>
    <div className={`${styles.navbar} responsiveContainer`}>
      <div className={styles.logoContainer}>
        <img src={MyzeSvg} alt="Myze Logo" className={styles.myzeLogo} />
        <div className={styles.logoText}>myze</div>
      </div>
      <div className={styles.navbarList}>
        <button type="button" onClick={() => scrollTo('how-it-works')}>
          How It Works
        </button>
        <button type="button" onClick={() => scrollTo('about-us')}>
          About Us
        </button>
        <button type="button">Contact Us</button>
        <button type="button">Sign In</button>
      </div>
    </div>
  </div>
);

export default Navbar;
