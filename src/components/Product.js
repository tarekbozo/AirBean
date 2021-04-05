import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div>
      <Link to={`/Cart/${product.id}`}>add</Link>
      <div>{product.title}</div>
      <div>{product.description}</div>
      <div>{product.price}</div>
    </div>
  );
};

export default Product;
