// Modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
// Styles
import "./App.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "./store/actions/products";
import AddProduct from "./screens/AddProduct/AddProduct";
import Cart from "./screens/Cart/Cart";
import FilteredProduct from "./components/FilteredProduct/FilteredProduct";

const App = () => {
  // dispatcher
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<FilteredProduct />} />
          <Route path="/new" element={<AddProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
