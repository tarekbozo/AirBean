import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../lib/actions/cartAction';
import { Link } from 'react-router-dom';

const Cart = ({ match, location, history }) => {
  const [quantity, setQuantity] = useState(1);
  const productId = match.params.id;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId));
    }
  }, [dispatch, productId]);

  const handleQuantityChange = (e) => {
    setQuantity(e.currentTarget.value.productId);
  };

  // const handleDecrementQuantity = () => {
  //   onAdjust({ variantId: item.variant.id, quantity: -1 });
  // };

  // const handleIncrementQuantity = () => {
  //   onAdjust({ variantId: item.variant.id, quantity: 1 });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
  // };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <h4>Shopping Cart</h4>
      {cartItems.length === 0 ? (
        <span>
          Your Cart is empty <Link to='/menu'>Go To Menu</Link>
        </span>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product}>
              {' '}
              <div>
                <div>{item.title}</div>
                {item.price}
              </div>
              <button onClick={() => removeFromCartHandler(item.product)}>
                Remove
              </button>
              <strong>Quantity</strong>
              <form>
                <input
                  type='number'
                  min='1'
                  step='1'
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </form>
            </li>
          ))}
        </ul>
      )}
      <button type='submit'>Take my money</button>
    </>
  );
};

export default Cart;
