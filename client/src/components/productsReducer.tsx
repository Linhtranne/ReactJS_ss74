
import {ADD_TO_CART}from './actions';
import { UPDATE_CART } from './actions';
import { DELETE_FROM_CART } from './actions';
import CartReducer from './cartReducer'
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
import Product from './types'

  
const productsReducer = (state = any[CartReducer], action: { type: any; payload: { product?: any; quantity: any; id: any; }; }) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return state;
    case ADD_TO_CART:
      return state.map((product:Product) =>
        product.id === action.payload.product.id
          ? { ...product, quantity: product.quantity - action.payload.quantity }
          : product
      );
    case UPDATE_CART:
      // eslint-disable-next-line no-case-declarations
      const { id, quantity } = action.payload;
      // eslint-disable-next-line no-case-declarations
      const productInCart = state.find((item: { id: any; }) => item.id === id);
      if (productInCart) {
        const quantityDifference = quantity - productInCart.quantity;
        return state.map((product: Product) =>
          product.id === id ? { ...product, quantity: product.quantity - quantityDifference } : product
        );
      }
      return state;
    case DELETE_FROM_CART:
      return state.map((product:Product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + action.payload.quantity }
          : product
      );
    default:
      return state;
  }
};

export default productsReducer;
