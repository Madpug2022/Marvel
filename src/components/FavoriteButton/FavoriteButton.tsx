import { useEffect, useState } from "react";
import LOCAL_API from "../../api/LocalApi";
import { CharactersI } from "../../interfaces/Characters";
import "./favoriteButton.scss";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { useMainContext } from "../../hooks/useMainContext";

function FavoriteButton({ character }: { character: CharactersI }) {
  const { favorites, setFavorites } = useMainContext();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    setIsFavorite(
      favorites.some((fav: CharactersI) => fav.id === character.id)
    );
  }, [favorites, character]);

  const handleFavorite = async () => {
    try {
      if (isFavorite) {
        await LOCAL_API.removeFromFavorites(character.id);
        setFavorites(
          favorites.filter((fav: CharactersI) => fav.id !== character.id)
        );
      } else {
        await LOCAL_API.addTofavorites(character);
        setFavorites([...favorites, character]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="favorite-btn"
      onClick={handleFavorite}
      data-testid="favorite-btn"
    >
      {isFavorite ? (
        <IoMdHeart className="icon favorited" data-testid="heart-filled" />
      ) : (
        <IoIosHeartEmpty
          className="icon unfavorited"
          data-testid="heart-empty"
        />
      )}
    </button>
  );
}

export default FavoriteButton;
