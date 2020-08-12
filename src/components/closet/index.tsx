import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.module.scss';
import FormButton from '../formbutton';
import ClosetItem from '../closetitem';

const brands = [
  { value: 'Nike', label: 'Nike' },
  { value: 'Uniqlo', label: 'Uniqlo' },
  { value: 'Adidas', label: 'Adidas' },
];

const sizes = [
  { value: 'XS', label: 'XS' },
  { value: 'S', label: 'S' },
  { value: 'M', label: 'M' },
  { value: 'L', label: 'L' },
  { value: 'XL', label: 'XL' },
  { value: 'XXL', label: 'XXL' },
  { value: 'XXXL', label: 'XXXL' },
];

const Closet: React.FC = () => {
  const [closetItems, setClosetItems] = React.useState([
    <ClosetItem brand="Nike" name="Futura" size="M" brands={brands} sizes={sizes} />,
    <ClosetItem brand="Uniqlo" name="AIRism Crew Neck" size="L" brands={brands} sizes={sizes} />,
    <ClosetItem brand="test" name="test" size="test" brands={brands} sizes={sizes} />,
    <ClosetItem brand="" name="" size="" brands={brands} sizes={sizes} />,
  ]);

  const history = useHistory();

  const addItem = () => {
    setClosetItems([
      ...closetItems,
      <ClosetItem brand="" name="" size="" brands={brands} sizes={sizes} />,
    ]);
  };

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.title}`}>Input your best fitting shirts</div>
        <div className={`${styles.closet}`}>
          <div className={`${styles.header}`}>
            <div className={`${styles.brand}`}>Brand</div>
            <div className={`${styles.name}`}>Name</div>
            <div className={`${styles.size}`}>Size</div>
          </div>
          <div id="items">{closetItems}</div>
          <div className={`${styles.addItemWrapper}`}>
            <button className={`${styles.addItem}`} type="submit" onClick={addItem}>
              Add Item
            </button>
          </div>
        </div>
        <FormButton text="Save" type="regular" topMargin />
        <button
          type="submit"
          onClick={() => {
            history.push('/');
          }}
        >
          Back to home.
        </button>
      </div>
    </div>
  );
};

export default Closet;
