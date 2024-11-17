import { AiFillHeart } from "react-icons/ai";
import "./FavouritesCounter.scss";
import { useMainContext } from "../../contexts/MainContext";

function FavouritesCounter() {
  const { favorites, setDisplayFavorites, displayFavorites } = useMainContext();

  return (
    <section className="favorites">
      <button onClick={() => setDisplayFavorites(!displayFavorites)}>
        <AiFillHeart className="favorites__icon" />
        <span className="favorites__text">{favorites.length}</span>
      </button>
    </section>
  );
}

export default FavouritesCounter;
