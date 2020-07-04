import React from 'react';
import styles from './index.module.scss';

interface FormButtonProps {
  type: string;
  text: string;
  src?: string;
  topMargin: boolean;
}

const FormButton: React.FC<FormButtonProps> = ({ type, text, src, topMargin }) => {
  let classMap = new Map();
  classMap.set('regular', styles.regular);
  classMap.set('google', styles.google);
  classMap.set('facebook', styles.facebook);

  if(src == null) {
    return (
      <div className={`${styles.btn} ${classMap.get(type)} ${topMargin ? styles.topMargin : ""}`}>
        {text}
      </div>
    );
  } else {
    return (
      <div className={`${styles.btn} ${classMap.get(type)} ${topMargin ? styles.topMargin : ""}`}>
        <img className={`${styles.icon}`} src={`${src}`} />
        {text}
      </div>
    );
  }
}

export default FormButton;
