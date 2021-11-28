// Styles
import { useDispatch } from "react-redux";
import "./CartProduct.scss";
import { removeCartProduct } from "../../store/actions/cart";

// Props
interface Props {
  product: Product;
}

const CartProduct: React.FC<Props> = ({ product }) => {
  // Dispatcher
  const dispatch = useDispatch();

  // Remove cart product
  const removeProductHandler = () => {
    dispatch(removeCartProduct(product._id));
  };
  return (
    <div className="cart__product">
      <div className="cart__product__image">
        <img src={product.imageURL} alt={product.name} />
      </div>
      <div>
        <div className="cart__product__info">
          <h3 className="cart__name">{product.name}</h3>
          <p className="cart__description">{product.description}</p>
          <h3 className="product__price">${product.price}</h3>
        </div>
        <div className="cart__product__controllers">
          <button onClick={removeProductHandler}>x</button>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
