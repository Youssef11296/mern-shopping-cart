// Modules & Hooks
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getCartProducts } from "./store/actions/cart";
import { RootState } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "./store/actions/products";
// components
import Header from "./components/Header/Header";
import FilteredProduct from "./components/FilteredProduct/FilteredProduct";
// Screens
import Home from "./screens/Home/HomeScreen";
import Cart from "./screens/Cart/CartScreen";
import AddProduct from "./screens/AddProduct/AddProductScreen";
// Styles
import "./App.scss";
import LoginScreen from "./screens/Login/LoginScreen";

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
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<FilteredProduct />} />
          <Route path="/new" element={<AddProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
