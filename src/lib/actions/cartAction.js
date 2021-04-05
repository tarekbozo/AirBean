import { CART_REMOVE_ITEM, CART_ADD_ITEM } from './../types/cartTypes';
import axios from 'axios';

export const addToCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:8000/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.id,
      title: data.title,
      price: data.price,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
