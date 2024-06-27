
import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  message: messageReducer,
});

export default rootReducer;
