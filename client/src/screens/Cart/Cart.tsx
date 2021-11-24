// Modules & Hooks
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Link } from "react-router-dom";
// Styles
import "./Cart.scss";

const Cart = () => {
  // selectors
  const cart = useSelector((state: RootState) => state.products.cart);

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
        <h2>Cart Product</h2>
      ))}
    </div>
  );
};

export default Cart;
