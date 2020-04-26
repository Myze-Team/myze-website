import React from 'react';
import styles from './index.module.scss';

interface StandardButtonProps {
  href: string;
  text: string;
  className?: string;
}

const StandardButton: React.FC<StandardButtonProps> = ({ href, text, className }) => (
  <div className={className}>
    <a href={href} className={styles.standardButton}>
      {text}
    </a>
  </div>
);

export default StandardButton;
