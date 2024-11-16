import { useParams } from "react-router-dom";
import Main from "../../layout/main/Main";

function Character() {
  const { id } = useParams();

  return (
    <Main>
      <h2>{id}</h2>
    </Main>
  );
}

export default Character;
