import React from 'react';
import styles from './index.module.scss';
import MyzeSvg from '../../assets/img/myze-icon.svg';

const LogoBar: React.FC = () => (
  <div className={`${styles.nav}`}>
    <div className={`${styles.navbar} responsiveContainer`}>
      <button type="button" className={styles.logoContainer}>
        <img src={MyzeSvg} alt="Myze Logo" className={styles.myzeLogo} />
      </button>
    </div>
  </div>
);

export default LogoBar;
