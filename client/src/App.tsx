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
          <Route path="/cart" element={<h1>Cart</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
