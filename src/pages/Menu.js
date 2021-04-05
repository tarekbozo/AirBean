import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from './../lib/actions/productAction';
import Product from './../components/Product';

const Menu = ({ match }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className='App'>
      <h1>Muny</h1>
      {/* TODO Loading and Error components */}
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
