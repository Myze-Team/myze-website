import React from 'react';
import styles from './index.module.scss';
import HIW1Svg from '../../assets/img/hiw-1.svg';
import HIW2Svg from '../../assets/img/hiw-2.svg';
import HIW3Svg from '../../assets/img/hiw-3.svg';

const HowItWorks: React.FC = () => {
  return (
    <div className={styles.howItWorksPage}>
      <h1 className='sectionTitle'>How It Works?</h1>
      <div className={styles.pageContainer}>
        <div className={styles.imageContainer}>
          <img src={HIW1Svg} alt='Cool Works 1' className={styles.leftImg} />
          <img src={HIW2Svg} alt='Cool Works 2' className={styles.centerImg} />
          <img src={HIW3Svg} alt='Cool Works 3' className={styles.leftImg} />
        </div>
        <div>
          <h1>Input 3-4 shirts that you own</h1>
          <h2>create a myze account, by inputing 3-4 shirts that you own and fit you well.</h2>
          <h1>We suggest your perfect size</h1>
          <h2>we run our algorithms on your data, with the myze data pool (other’s input) to suggest the perfect size.</h2>
          <h1>Enjoy your purchased item</h1>
          <h2>you don’t have to worry about picking the correct size, according to the company that you are purchasing your shirt from.</h2>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;