import "./favoriteButton.scss";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

function FavoriteButton() {
  return (
    <button className="favorite-btn">
      <IoIosHeartEmpty className="icon unfavorited" />
    </button>
  );
}

export default FavoriteButton;
