import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';

const Layout = ({ chidren }) => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== '/' && <Navbar />}
      {chidren}
    </>
  );
};

export default Layout;
