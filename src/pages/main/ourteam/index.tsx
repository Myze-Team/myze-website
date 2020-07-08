import React from 'react';
import styles from './index.module.scss';
import Andy from '../../../assets/img/andy.png';

const OurTeam: React.FC = () => (
  <div className={`${styles.aboutUsPage} responsiveContainer`} id="about-us">
    <h1 className="sectionTitle">Our Team</h1>
    <div className={`${styles.team}`}>
      <div className={`${styles.member}`}>
        <div className={`${styles.imgContainer}`}>
          <img src={Andy} alt="avatar" />
        </div>
        <div className={`${styles.name}`}>
          Amer Tabban
        </div>
        <div className={`${styles.role}`}>
          CEO/Founder
        </div>
      </div>

      <div className={`${styles.member}`}>
        <div className={`${styles.imgContainer}`}>
          <img src={Andy} alt="avatar" />
        </div>
        <div className={`${styles.name}`}>
          Xianhai Cao
        </div>
        <div className={`${styles.role}`}>
          Software Engineer
        </div>
      </div>

      <div className={`${styles.member}`}>
        <div className={`${styles.imgContainer}`}>
          <img src={Andy} alt="avatar" />
        </div>
        <div className={`${styles.name}`}>
          Paul Pan
        </div>
        <div className={`${styles.role}`}>
          Software Engineer
        </div>
      </div>

      <div className={`${styles.member}`}>
        <div className={`${styles.imgContainer}`}>
          <img src={Andy} alt="avatar" />
        </div>
        <div className={`${styles.name}`}>
          Andy Young
        </div>
        <div className={`${styles.role}`}>
          Frontend Developer
        </div>
      </div>
    </div>
  </div>
);

export default OurTeam;
