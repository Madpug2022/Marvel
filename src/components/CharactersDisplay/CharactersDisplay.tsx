import MARVEL_API from "../../api/MarvelApi";
import "./CharactersDisplay.scss";
import { useQuery } from "react-query";

function CharacterDisplay() {
  const limit = 50;

  const {
    data: characters,
    isLoading,
    error,
  } = useQuery(["characters", limit], () => MARVEL_API.getCharacters(limit), {
    staleTime: 24 * 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000,
  });

  if (isLoading) return <div>Cargando...</div>;

  if (error) return <div>Error al cargar los personajes</div>;

  return (
    <div>
      <h1>Character Display</h1>
    </div>
  );
}

export default CharacterDisplay;
