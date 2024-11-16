import { useMainContext } from "../../contexts/MainContext";
import { CharactersI } from "../../interfaces/Characters";
import CharacterCard from "../CharacterCard/CharacterCard";
import Error from "../ui/Error/Error";
import Loader from "../ui/loader/Loader";
import "./CharactersDisplay.scss";

function CharacterDisplay() {
  const { characters, isLoading, error } = useMainContext();

  const results: CharactersI[] = characters?.data?.results || [];

  if (isLoading) return <Loader />;

  if (error) return <Error />;

  return (
    <div className="characters-display">
      <ul className="characters-display__list">
        {results.map((character: CharactersI) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </div>
  );
}

export default CharacterDisplay;
