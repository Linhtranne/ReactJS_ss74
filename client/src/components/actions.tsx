
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';

export const addToCart = (product: any, quantity: any) => ({
  type: ADD_TO_CART,
  payload: { product, quantity },
});

export const updateCart = (id: any, quantity: any) => ({
  type: UPDATE_CART,
  payload: { id, quantity },
});

export const deleteFromCart = (id: any) => ({
  type: DELETE_FROM_CART,
  payload: id,
});

export const showMessage = (text: any, messageType: any) => ({
  type: SHOW_MESSAGE,
  payload: { text, messageType },
});
