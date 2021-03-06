// Modules & Hooks
import { useSelector } from "react-redux";
import { RootState } from "../../context";
import { Link } from "react-router-dom";
// components
import CartProduct from "../../components/CartComponents/CartProduct";
// styles
import "../../styles/CartStyles/CartPage.scss";

const CartScreen = () => {
  // selectors
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalCost = useSelector((state: RootState) => state.cart.totalCost);

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
      <div className="cart__products__container">
        {cart.map((product: Product, index: number) => (
          <CartProduct key={product._id} product={product} />
        ))}
      </div>
      <div className="cart__products__summery">
        <h2>Total Cost</h2>
        <p>{totalCost}</p>
      </div>
    </div>
  );
};

export default CartScreen;
