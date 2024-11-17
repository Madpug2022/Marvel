import { CharactersI } from "../../interfaces/Characters";

import "./characterCard.scss";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const CharacterCard = ({ character }: { character: CharactersI }) => {
  const portraitRatio = "portrait_xlarge";

  return (
    <li className="character-card">
      <div className="character-card__image">
        <img
          src={`${character.thumbnail.path}/${portraitRatio}.${character.thumbnail.extension}`}
          alt={character.name}
        />
      </div>
      <div className="character-card__info">
        <a href={`/${character.id}`}>{character.name}</a>
        <FavoriteButton />
      </div>
    </li>
  );
};

export default CharacterCard;
