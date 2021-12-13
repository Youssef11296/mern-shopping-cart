// styles
import "../../styles/HeaderStyles/Header.scss";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <h1>Logo</h1>
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;
