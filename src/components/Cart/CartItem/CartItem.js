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
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>{item.price} kr</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor='qty'>Qty</label>
          <input
            min='1'
            type='number'
            id='qty'
            name='qty'
            value={input}
            onChange={onChangeHandler}
          />
        </div>

        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className={styles.actions__deleteItemBtn}
        >
          <img
            src='https://image.flaticon.com/icons/svg/709/709519.svg'
            alt=''
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
