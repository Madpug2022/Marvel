import "./Header.scss";
import logo from "../../assets/images/marvel-logo.png";
import FavouritesCounter from "../favouritesCounter/FavouritesCounter";

function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src={logo} alt="Marvel Logo" />
      </a>
      <FavouritesCounter />
    </header>
  );
}

export default Header;
