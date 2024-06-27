
import { useSelector, useDispatch } from 'react-redux';
import ProductList from './ProductList';
import Cart from './Cart';
import Message from './messageReducer';
import './css/bootstrap.min.css';
import './css/style.css';

const App = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>
      {message && <Message message={message} />}
      <div className="row">
        <ProductList products={products} />
        <Cart cart={cart} products={products} />
      </div>
    </div>
  );
};

export default App;
