import React from 'react';
import styles from './index.module.scss';
import HIW1Svg from '../../../assets/img/hiw-1.svg';
import HIW2Svg from '../../../assets/img/hiw-2.svg';
import HIW3Svg from '../../../assets/img/hiw-3.svg';

const HowItWorks: React.FC = () => (
  <div className={`${styles.howItWorksPage} responsiveContainer`} id="how-it-works">
    <h1 className="sectionTitle">How It Works?</h1>
    <div className={styles.pageContainer}>
      <div className={`${styles.imageContainer} ${styles.container}`}>
        <img src={HIW1Svg} alt="Cool Works 1" className={styles.leftImg} />
        <img src={HIW2Svg} alt="Cool Works 2" className={styles.centerImg} />
        <img src={HIW3Svg} alt="Cool Works 3" className={styles.leftImg} />
      </div>
      <div className={styles.container}>
        <div className={styles.group}>
          <div className={styles.list}>
            <h1 className={styles.number}>1</h1>
            <div className={styles.circle} />
          </div>
          <div className={styles.text}>
            <h1>Input 3-4 shirts that you own</h1>
            <h2>Create a myze account, by inputting 3-4 shirts that you own and fit you well.</h2>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.list}>
            <h1 className={styles.number}>2</h1>
            <div className={styles.circle} />
          </div>
          <div className={styles.text}>
            <h1>We suggest your perfect size</h1>
            <h2>
              We run our algorithms on your data, with the myze data pool (other’s input) to suggest
              the perfect size.
            </h2>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.list}>
            <h1 className={styles.number}>3</h1>
            <div className={styles.circle} />
          </div>
          <div className={styles.text}>
            <h1>Enjoy your purchased item</h1>
            <h2>
              You don’t have to worry about picking the correct size, according to the company that
              you are purchasing your shirt from.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks;
