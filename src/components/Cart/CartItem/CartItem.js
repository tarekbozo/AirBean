import React, { useState } from 'react';
import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import {
  adjustItemQty,
  removeFromCart,
} from '../../../redux/Shopping/shopping-actions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    dispatch(adjustItemQty(item.id, e.target.value));
  };

  return (
    <div className={styles.cartItem}>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className={`${styles.buttons__btn} ${styles.buttons__add}`}
      >
        -
      </button>
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__price}>{item.price} kr</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <input
            min='1'
            type='number'
            id='qty'
            name='qty'
            value={input}
            onChange={onChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
