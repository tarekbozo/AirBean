import React, { useState, useEffect } from 'react';

import { ReactComponent as Header } from '../../assets/header.svg';
import { IoBagOutline } from 'react-icons/all';
import { useSelector } from 'react-redux';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openCart, setOpenCart] = useState(true);
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
      <ul className={openCart ? 'activeCart ' : 'navigation__listCart'}>
        <li className='navigation__list-item'>
          <Link to='/products' className='navigation__list-link'>
            Meny
          </Link>
        </li>
        <li className='navigation__list-item'>
          <Link to='/about' className='navigation__list-link'>
            vårt kaffe
          </Link>
        </li>

        <li className='navigation__list-item'>
          <Link to='/' className='navigation__list-link'>
            Min profil
          </Link>
        </li>
        <li className='navigation__list-item'>
          <Link to='/' className='navigation__list-link'>
            Orderstatus
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
