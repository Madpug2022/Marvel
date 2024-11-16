import CharacterDisplay from "../../components/CharactersDisplay/CharactersDisplay";
import SearchBar from "../../components/SearchBar/SearchBar";
import Main from "../../layout/main/Main";

function Home() {
  return (
    <Main>
      <SearchBar />
      <CharacterDisplay />
    </Main>
  );
}

export default Home;
