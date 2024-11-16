import { useMainContext } from "../../contexts/MainContext";
import Error from "../ui/Error/Error";
import Loader from "../ui/loader/Loader";
import "./CharactersDisplay.scss";

function CharacterDisplay() {
  const { characters, isLoading, error } = useMainContext();

  const results = characters?.data?.results || [];

  console.log(results);

  if (isLoading) return <Loader />;

  if (error) return <Error />;

  return <div className="characters-display"></div>;
}

export default CharacterDisplay;
