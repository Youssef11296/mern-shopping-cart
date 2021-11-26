// Modules & Hooks
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Link } from "react-router-dom";
// Styles
import "./CartScreen.scss";
import CartProduct from "../../components/CartProduct/CartProduct";

const CartScreen = () => {
  // selectors
  const cart = useSelector((state: RootState) => state.cart.cart);
  console.log(cart);

  if (cart.length === 0) {
    return (
      <div className="cart__message">
        <h2>You have not put any products on the cart yet</h2>
        <Link className="btn" to="/">
          Back To The Home
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      {cart.map((product: Product, index: number) => (
        <CartProduct product={product} />
      ))}
    </div>
  );
};

export default CartScreen;
