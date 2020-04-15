import React from 'react';
import styles from './index.module.scss';

interface StandardButtonProps {
  href: string
  text: string
  className?: string
}

const StandardButton: React.FC<StandardButtonProps> = (props) => {
  return (
    <div className={props.className}>
      <a href={props.href} className={styles.standardButton}>
        {props.text}
      </a>
    </div>
  );
}

export default StandardButton;