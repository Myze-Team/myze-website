import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';
import MyzeSvg from '../../../assets/img/myze-icon.svg';

interface NavbarProps {
  scrolled: string;
}

const scrollTo = (id: string) => {
  window.scrollTo({
    left: 0,
    top: document.getElementById(id)?.offsetTop! - 100,
    behavior: 'smooth',
  });
};

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => (
  <div className={`${styles.nav} ${scrolled}`}>
    <div className={`${styles.navbar} responsiveContainer`}>
      <button type="button" className={styles.logoContainer} onClick={() => scrollTo('cover')}>
        <img src={MyzeSvg} alt="Myze Logo" className={styles.myzeLogo} />
        <div className={styles.logoText}>myze</div>
      </button>
      <div className={styles.navbarList}>
        <button type="button" onClick={() => scrollTo('how-it-works')}>
          How It Works
        </button>
        <button type="button" onClick={() => scrollTo('about-us')}>
          About Us
        </button>
        <button type="button">Contact Us</button>
        <NavLink to="/login" className={styles.loginButton}>
          Sign In
        </NavLink>
      </div>
    </div>
  </div>
);

export default Navbar;
