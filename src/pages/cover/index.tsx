import React from 'react';
import styles from './index.module.scss';

import CoolGraphSvg from '../../assets/img/cool-graph.svg';
import StandardButton from '../../components/standardbutton';

const Cover: React.FC = () => (
  <div className={`${styles.coverPage} responsiveContainer`} id="cover">
    <div>
      <div>
        <span>Using </span>
        <span className={styles.bigData}>Big Data.</span>
      </div>
      <h1>To Minimize e-Retail Returns.</h1>
      <StandardButton
        href="#getting-started"
        text="Get Started"
        className={styles.standardButton}
      />
    </div>
    <img src={CoolGraphSvg} alt="Graph Algorithm Illustration" />
  </div>
);

export default Cover;
