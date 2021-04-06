import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { ReactComponent as Header } from '../../assets/header.svg';
import { IoBagOutline } from 'react-icons/all';

import { useSelector } from 'react-redux';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Navbar = () => {
  const cart = useSelector((state) => state.shop.cart);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className={styles.navbar}>
      <Header />
      <BurgerMenu />
      <Link to='/cart'>
        <div className={styles.navbar__cart}>
          <IoBagOutline className={styles.cart__image} />
          <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
