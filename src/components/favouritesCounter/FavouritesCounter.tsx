import { AiFillHeart } from "react-icons/ai";
import "./FavouritesCounter.scss";

function FavouritesCounter() {
  return (
    <section className="favorites">
      <AiFillHeart className="favorites__icon" />
      <span className="favorites__text">0</span>
    </section>
  );
}

export default FavouritesCounter;
