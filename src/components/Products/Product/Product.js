import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Product.module.css';

// Redux
import { addToCart } from '../../../redux/Shopping/shopping-actions';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.product}>
        <div className={styles.product__buttons}>
          <button
            onClick={() => dispatch(addToCart(product.id))}
            className={`${styles.buttons__btn} ${styles.buttons__add}`}
          >
            +
          </button>
        </div>
        <div className={styles.product__details}>
          <p className={styles.details__title}>{product.title}</p>
          <p className={styles.details__desc}>{product.description}</p>
        </div>
        <p className={styles.details__price}>{product.price} kr</p>
      </div>
    </>
  );
};

export default Product;
