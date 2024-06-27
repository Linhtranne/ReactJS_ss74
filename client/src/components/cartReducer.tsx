
import { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART } from './actions';

const cartReducer = (state = [], action: { type: any; payload: { product: { id: any; }; quantity: any; id: any; }; }) => {
  switch (action.type) {
    case ADD_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const existingProduct = state.find((item) => item.id === action.payload.product.id);
      if (existingProduct) {
        return state.map((item) =>
          item.id === action.payload.product.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item
        );
      }
      return [...state, { ...action.payload.product, quantity: action.payload.quantity }];
    case UPDATE_CART:
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
    case DELETE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default cartReducer;
