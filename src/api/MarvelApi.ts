const marvelUrl = "https://gateway.marvel.com:443/v1/public";
const api_key = import.meta.env.VITE_API_KEY;

const MARVEL_API = {
  getCharacters: async (limit: number) => {
    const response = await fetch(
      `${marvelUrl}/characters?limit=${limit}&apikey=${api_key}`
    );
    return response.json();
  },
  getCharacter: async (id: number) => {
    const response = await fetch(
      `${marvelUrl}/characters/${id}?apikey=${api_key}`
    );
    return response.json();
  },
};

export default MARVEL_API;
