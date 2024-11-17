import { CharactersI } from "../interfaces/Characters";

const localUrl = "http://localhost:3001";

const LOCAL_API = {
  addTofavorites: async (character: CharactersI) => {
    const characterWithStringId = {
      ...character,
      id: String(character.id),
    };
    await fetch(`${localUrl}/favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(characterWithStringId),
    });
  },
  getFavorites: async () => {
    const response = await fetch(`${localUrl}/favorites`);
    return response.json();
  },
  removeFromFavorites: async (id: number) => {
    await fetch(`${localUrl}/favorites/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export default LOCAL_API;
