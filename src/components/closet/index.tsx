import React from 'react';
import styles from './index.module.scss';
import FormButton from '../formbutton';
import ClosetItem from '../../components/closetitem';

const Closet: React.FC = () => {
  const brands = [
    { value: 'Nike', label: 'Nike' },
    { value: 'Uniqlo', label: 'Uniqlo' },
    { value: 'Adidas', label: 'Adidas' }
  ]

  const sizes = [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
    { value: 'XXXL', label: 'XXXL' }
  ]

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.title}`}>Input your best fitting shirts</div>
        <div className={`${styles.closet}`}>
          <div className={`${styles.header}`}>
            <div className={`${styles.brand}`}>
              Brand
            </div>
            <div className={`${styles.name}`}>
              Name
            </div>
            <div className={`${styles.size}`}>
              Size
            </div>
          </div>
          <div id="items">
            <ClosetItem brand="Nike" name="Futura" size="M" brands={brands} sizes={sizes} />
            <ClosetItem brand="Uniqlo" name="AIRism Crew Neck" size="L" brands={brands} sizes={sizes} />
            <ClosetItem brand="test" name="test" size="test" brands={brands} sizes={sizes} />
            <ClosetItem brand="" name="" size="" brands={brands} sizes={sizes} />
          </div>
        </div>
        <FormButton text="Save" type="regular" topMargin={true} />
      </div>
    </div>
  );
}

export default Closet;
