import React from 'react';
import styles from './index.module.scss';

interface FormButtonProps {
  type: string;
  text: string;
  src?: string;
  topMargin: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FormButton: React.FC<FormButtonProps> = ({ type, text, src, topMargin, onClick }) => {
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
      <button
        type="submit"
        className={`${styles.btn} ${classMap.get(type)} ${topMargin ? styles.topMargin : ''}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }

  return (
    <button
      type="submit"
      className={`${styles.btn} ${classMap.get(type)} ${topMargin ? styles.topMargin : ''}`}
      onClick={onClick}
    >
      <img className={`${styles.icon}`} src={`${src}`} alt="login" />
      {text}
    </button>
  );
};

export default FormButton;
