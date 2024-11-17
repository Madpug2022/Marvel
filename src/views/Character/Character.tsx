import { useParams } from "react-router-dom";
import Main from "../../layout/main/Main";
import MARVEL_API from "../../api/MarvelApi";
import { useQuery } from "react-query";
import Loader from "../../components/ui/loader/Loader";
import Error from "../../components/ui/Error/Error";
import { CharactersI } from "../../interfaces/Characters";
import "./Character.scss";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import ComicList from "../../components/ComicList/ComicList";

function Character() {
  const { id } = useParams();

  if (!id) {
    return null;
  }

  const STALE_TIME = 24 * 60 * 60 * 1000;
  const CACHE_TIME = 24 * 60 * 60 * 1000;

  const { data, isLoading, error } = useQuery(
    ["character", id],
    () => MARVEL_API.getCharacterById(id),
    {
      staleTime: STALE_TIME,
      cacheTime: CACHE_TIME,
      enabled: !!id,
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  const result: CharactersI = data.data.results[0];

  if (!result) {
    return null;
  }

  const collectionURI = result.comics.collectionURI;

  return (
    <Main>
      <main className="char-page">
        <section className="char-page__container">
          <div className="description">
            <div className="description__img">
              <img
                src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                alt={result.name}
              />
            </div>
            <div className="description__info">
              <div className="description__info__name">
                <h2>{result.name}</h2>
                <FavoriteButton character={result} />
              </div>
              <p>{result.description}</p>
            </div>
          </div>
        </section>
        <ComicList searchUri={collectionURI} />
      </main>
    </Main>
  );
}

export default Character;
