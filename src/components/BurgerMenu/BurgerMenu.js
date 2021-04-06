import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        open={open}
        onClick={() => setOpen(!open)}
        className={
          open ? 'navigation__menu-toggle is-active' : 'navigation__menu-toggle'
        }
      >
        <span className='navigation__menu-toggle-bar'></span>
        <span className='navigation__menu-toggle-bar'></span>
        <span className='navigation__menu-toggle-bar'></span>
      </div>
      <ul className={open ? 'active' : 'navigation__list'}>
        <li onClick={() => setOpen(false)} className='navigation__list-item'>
          <Link to='/products' className='navigation__list-link'>
            Meny
          </Link>
        </li>
        <li onClick={() => setOpen(!open)} className='navigation__list-item'>
          <Link to='/about' className='navigation__list-link'>
            vårt kaffe
          </Link>
        </li>

        <li onClick={() => setOpen(!open)} className='navigation__list-item'>
          <Link to='/' className='navigation__list-link'>
            Min profil
          </Link>
        </li>
        <li onClick={() => setOpen(!open)} className='navigation__list-item'>
          <Link to='/' className='navigation__list-link'>
            Orderstatus
          </Link>
        </li>
      </ul>
    </>
  );
};

export default BurgerMenu2;
