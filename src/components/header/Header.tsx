import "./Header.scss";
import logo from "../../assets/images/marvel-logo.png";
import { AiFillHeart } from "react-icons/ai";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Marvel Logo" />
      </div>
      <section className="header__favorites">
        <AiFillHeart className="header__favorites__icon" />
        <span className="header__favorites__text">0</span>
      </section>
    </header>
  );
}

export default Header;
