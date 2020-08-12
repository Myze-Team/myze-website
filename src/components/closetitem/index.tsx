import React from 'react';
import styles from './index.module.scss';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

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
        <CreatableSelect defaultValue={brands.find(e => e.value === `${brand}`)} options={brands} isClearable />
      </div>
      <div className={`${styles.name}`}>
        <span className={`${styles.mglass}`}></span>
        <input type="text" defaultValue={`${name}`} placeholder="Name" />
      </div>
      <div className={`${styles.size}`}>
        <Select defaultValue={sizes.find(e => e.value === `${size}`)} options={sizes} />
      </div>
    </div>
  );
};

export default ClosetItem;
