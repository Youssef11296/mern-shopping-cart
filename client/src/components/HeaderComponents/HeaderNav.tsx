// modules & hooks
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// context
import { RootState } from "../../context";
// mui
import { IconButton } from "@material-ui/core";
import { MenuSharp, ShoppingBasket } from "@material-ui/icons";

const HeaderNav = () => {
  const [acttiveNav, setActiveNav] = useState(false);

  // selectors
  const cart = useSelector((state: RootState) => state.cart.cart);

  // toggle nav
  const toggleNav = () => setActiveNav((ps) => !ps);

  return (
    <>
      <div className="header__menuIcon" onClick={toggleNav}>
        <IconButton>
          <MenuSharp className="header__menuIcon__mui" />
        </IconButton>
      </div>
      <nav className={`${acttiveNav && "active"}`}>
        <ul>
          <li onClick={toggleNav}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={toggleNav}>
            <NavLink to="/new">Add Product</NavLink>
          </li>
          <li onClick={toggleNav} className="header__cart">
            <NavLink to="/cart">
              <ShoppingBasket />
              <span>Cart</span>
              <span>{cart?.length}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNav;
