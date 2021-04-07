import React, { useState, useEffect } from 'react';

import { ReactComponent as Header } from '../../assets/header.svg';
import { IoBagOutline } from 'react-icons/all';
import { useSelector } from 'react-redux';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Navbar.css';
import Cart from '../Cart/Cart';

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const cart = useSelector((state) => state.shop.cart);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className='navbar'>
      <Header />
      <BurgerMenu />

      <div className='navbar__cart ' onClick={() => setOpenCart(!openCart)}>
        <IoBagOutline className='cart__image' />
        <div className='cart__counter'>{cartCount}</div>
      </div>
      <div
        onClick={() => setOpenCart(!openCart)}
        className={openCart ? 'overlayCart' : 'hideOverlay'}
      ></div>
      <div className={openCart ? 'activeCart ' : 'navigation__listCart'}>
        <Cart />
      </div>
    </div>
  );
};

export default Navbar;
