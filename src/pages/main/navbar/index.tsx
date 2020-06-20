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

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [active, setActive] = React.useState('cover');
  const handleActive = React.useCallback(() => {
    var section = document.getElementById("root")?.getElementsByClassName("responsiveContainer") as HTMLCollectionOf<HTMLElement>;
    var sections: { [key: string]: any } = {};
    if(section != null) {
      for(var i = 1; i < section.length; i++) {
          sections[section[i].id] = section[i].offsetHeight;
      }
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      var total = 0;
      var s: string;
      for (s in sections) {
        if (currentScroll > total - 300 && currentScroll < total + sections[s] - 300) {
          setActive(s);
        }
        total = total + sections[s];
      }
    }
  }, []);
  React.useEffect(() => {
    window.addEventListener('scroll', handleActive);
    return () => {
      window.removeEventListener('scroll', handleActive);
    };
  }, [handleActive]);
  return (
    <div className={`${styles.nav} ${scrolled}`}>
      <div className={`${styles.navbar} responsiveContainer`}>
        <button type="button" className={styles.logoContainer} onClick={() => scrollTo('cover')}>
          <img src={MyzeSvg} alt="Myze Logo" className={styles.myzeLogo} />
          <div className={styles.logoText}>myze</div>
        </button>
        <div className={styles.navbarList}>
          <button type="button" className={`${active}` == 'cover' ? `${styles.active}` : `${styles.inactive}`} onClick={() => {scrollTo('cover')}}>
            Home
          </button>
          <button type="button" className={`${active}` == 'how-it-works' ? `${styles.active}` : `${styles.inactive}`} onClick={() => {scrollTo('how-it-works')}}>
            How It Works
          </button>
          <button type="button" className={`${active}` == 'about-us' ? `${styles.active}` : `${styles.inactive}`} onClick={() => {scrollTo('about-us')}}>
            About Us
          </button>
          <button type="button">Contact Us</button>
          <NavLink to="login" className={styles.loginButton}>
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
