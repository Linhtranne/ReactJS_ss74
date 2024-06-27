
import { useDispatch } from 'react-redux';
import { updateCart, deleteFromCart, showMessage } from './actions';
import { Product } from './types';
const Cart = ({ cart, products }) => {
  const dispatch = useDispatch();

  const handleUpdateCart = (id:number, quantity:number) => {
    const productInStock = products.find((item:Product) => item.id === id);
    const productInCart = cart.find((item:Product) => item.id === id);

    if (productInStock && productInStock.quantity + productInCart.quantity >= quantity) {
      dispatch(updateCart(id, quantity));
    } else {
      dispatch(showMessage('Hết hàng rồi', 'danger'));
    }
  };

  const handleDeleteFromCart = (id:number) => {
    dispatch(deleteFromCart(id));
    dispatch(showMessage('Delete successfully', 'danger'));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total:number, item:Product) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="my-cart-body">
              {cart.length === 0 ? (
                <tr>
                  <td colSpan={5}>Chưa có sản phẩm trong giỏ hàng</td>
                </tr>
              ) : (
                cart.map((item:Product, index:number) => (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.price} USD</td>
                    <td>
                      <input
                        name={`cart-item-quantity-${item.id}`}
                        type="number"
                        value={item.quantity}
                        min={1}
                        onChange={(e) => handleUpdateCart(item.id, parseInt(e.target.value))}
                      />
                    </td>
                    <td>
                      <a className="label label-info update-cart-item" onClick={() => handleUpdateCart(item.id, item.quantity)}>
                        Update
                      </a>
                      <a className="label label-danger delete-cart-item" onClick={() => handleDeleteFromCart(item.id)}>
                        Delete
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            <tfoot id="my-cart-footer">
              <tr>
                <td>
                  There are <b>{cart.length}</b> items in your shopping cart.
                </td>
                <td className="total-price text-left">
                  {calculateTotalPrice()} USD
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
