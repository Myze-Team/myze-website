import React from 'react';
import styles from './index.module.scss';

interface FormButtonProps {
  type: string;
  text: string;
  src?: string;
  topMargin: boolean;
}

const FormButton: React.FC<FormButtonProps> = ({ type, text, src, topMargin }) => {
  const [classMap] = React.useState(
    (() => {
      const cmap = new Map();
      cmap.set('regular', styles.regular);
      cmap.set('google', styles.google);
      cmap.set('facebook', styles.facebook);
      return cmap;
    })(),
  );

  if (!src) {
    return (
      <div className={`${styles.btn} ${classMap.get(type)} ${topMargin ? styles.topMargin : ''}`}>
        {text}
      </div>
    );
  }

  return (
    <div className={`${styles.btn} ${classMap.get(type)} ${topMargin ? styles.topMargin : ''}`}>
      <img className={`${styles.icon}`} src={`${src}`} alt="login" />
      {text}
    </div>
  );
};

export default FormButton;
