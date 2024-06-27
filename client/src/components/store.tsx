
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: { products: any; cart: any[]; message: { text: any; type: any; } | null; }) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {

  }
};

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
