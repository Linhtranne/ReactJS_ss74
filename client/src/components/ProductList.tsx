
import { useDispatch } from 'react-redux';
import { addToCart, showMessage } from './actions';

const ProductList = ({ products}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product, quantity) => {
    if (quantity <= product.quantity) {
      dispatch(addToCart(product, quantity));
      dispatch(showMessage('Add to cart successfully', 'success'));
    } else {
      dispatch(showMessage('Hết hàng rồi!', 'danger'));
    }
  };

  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>
        <div className="panel-body" id="list-product">
          {products.map((product:Product) => (
            <div key={product.id} className="media product">
              <div className="media-left">
                <a href="#">
                  <img className="media-object" src={product.image} alt={product.name} />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">{product.name}</h4>
                <p>{product.description}</p>
                <span className="price">{product.price} USD</span>
                <div>
                  <input
                    name={`quantity-product-${product.id}`}
                    type="number"
                    defaultValue={1}
                    min={1}
                    max={product.quantity}
                    id={`quantity-${product.id}`}
                    disabled={product.quantity === 0}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      const quantity = parseInt(
                        (document.getElementById(`quantity-${product.id}`) as HTMLInputElement).value
                      );
                      handleAddToCart(product, quantity);
                    }}
                    disabled={product.quantity === 0}
                  >
                    {product.quantity === 0 ? 'Hết hàng' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
