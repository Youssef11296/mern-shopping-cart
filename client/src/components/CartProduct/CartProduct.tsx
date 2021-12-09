// Styles
import { useDispatch } from "react-redux";
import "./CartProduct.scss";
import { checkTotalCost, removeCartProduct } from "../../store/actions/cart";
import { useState } from "react";
import { updateCartProductAmount } from "../../store/actions/products";

// Props
interface Props {
  product: Product;
}

const CartProduct: React.FC<Props> = ({ product }) => {
  // States
  const [cartAmount, setCartAmount] = useState(product.selectedCartAmount);

  // Dispatcher
  const dispatch = useDispatch();

  // Remove cart product
  const removeProductHandler = () => {
    dispatch(removeCartProduct(product._id));
  };

  // Save handler
  const saveHandler = () => {
    dispatch(updateCartProductAmount(product._id, cartAmount));
    dispatch(checkTotalCost());
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
          <h3 className="product__price">${product.price * cartAmount}</h3>
        </div>
        <div className="cart__product__controllers">
          <button onClick={removeProductHandler}>Remove</button>
          <input
            type="number"
            value={cartAmount}
            onChange={(e: any) => setCartAmount(e.target.value)}
          />
          <button onClick={saveHandler}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
