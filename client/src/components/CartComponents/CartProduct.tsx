// modules
import { useState } from "react";
import { useDispatch } from "react-redux";
// context
import { checkTotalCost, removeCartProduct } from "../../context/actions/cart";
import { updateCartProductAmount } from "../../context/actions/products";
// styles
import "../../styles/CartStyles/CartProduct.scss";

// props
interface Props {
  product: Product;
}

const CartProduct: React.FC<Props> = ({ product }) => {
  // states
  const [cartAmount, setCartAmount] = useState(product.selectedCartAmount);

  // dispatcher
  const dispatch = useDispatch();

  // remove cart product
  const removeProductHandler = () => {
    dispatch(removeCartProduct(product._id));
  };

  // save handler
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
