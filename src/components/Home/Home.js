import React from 'react';
import './Home.css';
import headerL from '../../assets/header.png';
import headerR from '../../assets/headerR.png';
import { ReactComponent as Logo } from '../../assets/airbean-landing.svg';

const Home = () => {
  return (
    <div className='landing'>
      <div className='introL'>
        <img src={headerL} alt='' />
      </div>
      <div className='logo'>
        <Logo />
      </div>
      <div className='introR'>
        <img src={headerR} alt='' />
      </div>
    </div>
  );
};

export default Home;
