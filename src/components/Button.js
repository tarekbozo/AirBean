import React from 'react';
import { shopButton } from '../styles/Button.module.css';

const Button = ({ children }) => {
  return (
    <>
      <button className={shopButton}>{children}</button>
    </>
  );
};

export default Button;
