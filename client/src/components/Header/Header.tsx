// Modules
import { NavLink } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { MenuSharp } from "@material-ui/icons";
import {useState} from 'react'
// Styles
import "./Header.scss";

const Header = () => {
  const [acttiveNav, setActiveNav] = useState(false)

  // toggle nav
  const toggleNav = () => setActiveNav(ps => !ps)

  return (
    <header>
      <div className="header__logo">
        <h1>Logo</h1>
      </div>
      <nav className={`${acttiveNav && 'active'}`}>
        <ul>
          <li onClick={toggleNav}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={toggleNav}>
            <NavLink to="/new">Add Product</NavLink>
          </li>
          <li onClick={toggleNav}>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
      <div className="header__menuIcon" onClick={toggleNav}>
        <IconButton>
          <MenuSharp className="header__menuIcon__mui" />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
