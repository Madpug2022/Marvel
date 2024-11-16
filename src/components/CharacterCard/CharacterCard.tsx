import { CharactersI } from "../../interfaces/Characters";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

import "./characterCard.scss";

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
        <button>
          <IoIosHeartEmpty className="icon unfavorited" />
        </button>
      </div>
    </li>
  );
};

export default CharacterCard;
