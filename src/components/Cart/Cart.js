import React, { useState, useEffect } from 'react';
import styles from './Cart.module.css';
import { useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.shop.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <div className={styles.summary__price}>
          <h5>TOTAL: ({totalItems} items)</h5>
          <span className={styles.summary__total}>{totalPrice} kr </span>
        </div>
        <Link to='/chekout' className={styles.summary__checkoutBtn}>
          Tack my money
        </Link>
      </div>
    </div>
  );
};

export default Cart;
