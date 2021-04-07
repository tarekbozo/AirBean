import React from 'react';
import styles from './Products.module.css';
import { useSelector } from 'react-redux';
import Product from './Product/Product';

const Products = () => {
  const products = useSelector((state) => state.shop.products);
  return (
    <>
      <div className={styles.menuLogo}>Meny</div>
      <div className={styles.products}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
