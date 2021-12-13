// modules & hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// context
import { RootState } from "./context";
import { getCartProducts } from "./context/actions/cart";
import { getAllProducts } from "./context/actions/products";
// components
import { Header, FilteredProduct } from "./components/";
// pages
import { HomePage, CartPage, LoginPage, AddProductPage } from "./pages";
// styles
import "./styles/App.scss";

const App = () => {
  // dispatcher
  const dispatch = useDispatch();
  // selectors

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getCartProducts());
  }, [dispatch]);

  const cart = useSelector((state: RootState) => state.cart.cart);
  console.log(cart);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<FilteredProduct />} />
          <Route path="/new" element={<AddProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
