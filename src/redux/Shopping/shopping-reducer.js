import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: 'Bryggkaffe',
      description: 'Bryggd på månadens bönor',
      price: 49,
    },
    {
      id: 2,
      title: 'Caffè Doppio',
      description: 'Bryggd på månadens bönor',
      price: 49,
    },
    {
      id: 3,
      title: 'Cappuccino',
      description: 'Bryggd på månadens bönor',
      price: 49,
    },
    {
      id: 4,
      title: 'Latte Macchiato',
      description: 'Bryggd på månadens bönor',
      price: 49,
    },
    {
      id: 5,
      title: 'Kaffe Latte',
      description: 'Bryggd på månadens bönor',
      price: 49,
    },
    {
      id: 6,
      title: 'Cortado',
      description: 'Bryggd på månadens bönor',
      price: 39,
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //  data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    default:
      return state;
  }
};

export default shopReducer;
