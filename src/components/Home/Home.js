import React from 'react';
import './Home.css';
import headerL from '../../assets/header.png';
import headerR from '../../assets/headerR.png';
import { ReactComponent as Logo } from '../../assets/airbean-landing.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='landing'>
      <div className='introL'>
        <img src={headerL} alt='' />
      </div>
      <Link to='/products' className='logo'>
        <Logo />
      </Link>
      <div className='introR'>
        <img src={headerR} alt='' />
      </div>
    </div>
  );
};

export default Home;
