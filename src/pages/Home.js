import React from 'react';
import { ReactComponent as IntroLeft } from '../assets/images/intro-graphic-left.svg';
import { ReactComponent as IntroRight } from '../assets/images/intro-graphic-right.svg';
import { ReactComponent as Airbean } from '../assets/images/airbean-landing.svg';
import { Link } from 'react-router-dom';
import {
  logo,
  landing,
  image_left,
  image_right,
} from '../styles/landing.module.css';
import Button from '../components/Button';

const Home = () => {
  return (
    <>
      <div className={landing}>
        <IntroLeft className={image_left} />
        <Airbean className={logo} />
        <Button>
          <Link to='./menu'>Shop</Link>
        </Button>
        <IntroRight className={image_right} />
      </div>
    </>
  );
};

export default Home;
