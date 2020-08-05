import React from 'react';
import styles from './index.module.scss';
import Select from 'react-select';

interface ClosetItemProps {
  brand: string;
  name: string;
  size: string;
  brands: Array<any>;
  sizes: Array<any>;
}

const ClosetItem: React.FC<ClosetItemProps> = ({ brand, name, size, brands, sizes }) => {
  return (
    <div className={`${styles.item}`}>
      <div className={`${styles.brand}`}>
        <Select defaultValue={brands.find(e => e.value === `${brand}`)} options={brands} />
      </div>
      <div className={`${styles.name}`}>
        <input type="text" defaultValue={`${name}`} placeholder="Name" />
      </div>
      <div className={`${styles.size}`}>
        <Select defaultValue={sizes.find(e => e.value === `${size}`)} options={sizes} />
      </div>
    </div>
  );
};

export default ClosetItem;
