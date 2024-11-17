const marvelUrl = "https://gateway.marvel.com:443/v1/public";
const api_key = import.meta.env.VITE_API_KEY;

const MARVEL_API = {
  getCharacters: async (limit: number) => {
    const response = await fetch(
      `${marvelUrl}/characters?limit=${limit}&apikey=${api_key}`
    );
    return response.json();
  },
  getCharacterById: async (id: string) => {
    const response = await fetch(
      `${marvelUrl}/characters/${id}?apikey=${api_key}`
    );
    return response.json();
  },
  getCharacterByName: async (name: string) => {
    console.log(name);
    const response = await fetch(
      `${marvelUrl}/characters?name=${name}&apikey=${api_key}`
    );
    return response.json();
  },
  getComics: async (collectionURI: string) => {
    const response = await fetch(`${collectionURI}?apikey=${api_key}`);
    return response.json();
  },
};

export default MARVEL_API;
