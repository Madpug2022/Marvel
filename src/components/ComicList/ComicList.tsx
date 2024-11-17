import { useQuery } from "react-query";
import MARVEL_API from "../../api/MarvelApi";
import Loader from "../ui/loader/Loader";
import Error from "../ui/Error/Error";
import ComicCard from "../ComicCard/ComicCard";
import { ComicI } from "../../interfaces/Comics";
import "./ComicList.scss";

function ComicList({ searchUri }: { searchUri: string }) {
  const STALE_TIME = 24 * 60 * 60 * 1000;
  const CACHE_TIME = 24 * 60 * 60 * 1000;

  const {
    data: comicsData,
    isLoading,
    error,
  } = useQuery(["comics", searchUri], () => MARVEL_API.getComics(searchUri), {
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
    enabled: !!searchUri,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  const comics: ComicI[] = comicsData.data.results;

  return (
    <section className="comic-list">
      <h3>Comics</h3>
      <ul className="comic-list__list">
        {comics.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </ul>
    </section>
  );
}

export default ComicList;
