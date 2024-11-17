import getYearFromDate from "../../helpers/getYearFromDate";
import { ComicI } from "../../interfaces/Comics";
import "./ComicCard.scss";

function ComicCard({ comic }: { comic: ComicI }) {
  return (
    <li className="comic-card">
      <div className="comic-card__img">
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
        />
      </div>
      <div className="comic-card__info">
        <h4>{comic.title}</h4>
        <p>{getYearFromDate(comic.dates[0].date)}</p>
      </div>
    </li>
  );
}

export default ComicCard;
