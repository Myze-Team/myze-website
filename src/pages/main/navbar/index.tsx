import React from 'react';
import { NavLink } from 'react-router-dom';
import { Auth } from 'aws-amplify';
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
  const [auth, setAuth] = React.useState<any>();
  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setAuth(user);
      })
      .catch(() => {
        setAuth(null);
      });
  });
  const [active, setActive] = React.useState('cover');
  const handleActive = React.useCallback(() => {
    const section = document
      .getElementById('root')
      ?.getElementsByClassName('responsiveContainer') as HTMLCollectionOf<HTMLElement>;
    const sections: { [key: string]: number } = {};
    if (section) {
      for (let i = 1; i < section.length; i += 1) {
        sections[section[i].id] = section[i].offsetHeight;
      }
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      let total = 0;

      // eslint-disable-next-line guard-for-in, no-restricted-syntax
      for (const name in sections) {
        if (currentScroll > total - 300 && currentScroll < total + sections[name] - 300) {
          setActive(name);
        }
        total += sections[name];
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
          <button
            type="button"
            className={`${active}` === 'cover' ? `${styles.active}` : `${styles.inactive}`}
            onClick={() => {
              scrollTo('cover');
            }}
          >
            Home
          </button>
          <button
            type="button"
            className={`${active}` === 'how-it-works' ? `${styles.active}` : `${styles.inactive}`}
            onClick={() => {
              scrollTo('how-it-works');
            }}
          >
            How It Works
          </button>
          <button
            type="button"
            className={`${active}` === 'about-us' ? `${styles.active}` : `${styles.inactive}`}
            onClick={() => {
              scrollTo('about-us');
            }}
          >
            About Us
          </button>
          <button type="button">Contact Us</button>
          {!auth && (
            <NavLink to="login" className={styles.authButton}>
              Sign In
            </NavLink>
          )}
          {auth && (
            <button
              onClick={() => {
                Auth.signOut();
              }}
              className={styles.authButton}
              type="submit"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
