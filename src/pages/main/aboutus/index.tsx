import React from 'react';
import styles from './index.module.scss';
import About1Svg from '../../../assets/img/about-1.svg';
import MyzeSvg from '../../../assets/img/myze.svg';
import TheBasementPng from '../../../assets/img/thebasement.png';

const AboutUs: React.FC = () => (
  <div className={`${styles.aboutUsPage} responsiveContainer`} id="about-us">
    <h1 className="sectionTitle">About Us</h1>
    <h1 className={styles.subtitle}>
      we are just a startup that wants to change the way we shop online.
    </h1>
    <div className={styles.descriptionContainer}>
      <h1>
        at Myze, our goal is to create a confident shopping experience for the everyday online
        shopper.
      </h1>
      <img src={About1Svg} alt="About Description 1" />
    </div>
    <div className={styles.missionContainer}>
      <h2>Our Mission</h2>
      <h1>Find the right size</h1>
      <img src={MyzeSvg} alt="Myze Logo" className={styles.myzeLogo} />
      <h3>
        say hi to the chameleon, a chameleon changes color (“size” for myze), but is still the same
        animal (person).
      </h3>
    </div>
    <div className={styles.supportersContainer}>
      <h2>Our Supporters</h2>
      <img src={TheBasementPng} alt="The Basement" className={styles.theBasementLogo} />
    </div>
  </div>
);

export default AboutUs;
