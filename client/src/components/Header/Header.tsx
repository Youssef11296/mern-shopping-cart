// Modules
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { MenuSharp } from "@material-ui/icons";
// Styles
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <h1>Logo</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <div className="header__menuIcon">
        <IconButton>
          <MenuSharp className="header__menuIcon__mui" />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
