import React from 'react';
import styles from './index.module.scss';

import CoolGraphSvg from '../../assets/img/cool-graph.svg';
import StandardButton from '../../components/standardbutton';

const Cover: React.FC = () => {
  return (
    <div className={styles.coverPage}>
      <div>
        <h1>Using <span>Big Data.</span></h1>
        <h1>To Minimize e-Retail Returns.</h1>
        <StandardButton href="#getting-started" text="Getting Started" className={styles.standardButton} />
      </div>
      <img src={CoolGraphSvg} alt="Graph Algorithm Illustration" />
    </div>
  );
}

export default Cover;