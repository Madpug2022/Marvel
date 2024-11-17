import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import MARVEL_API from "../api/MarvelApi";
import { useQuery } from "react-query";
import LOCAL_API from "../api/LocalApi";
import { CharactersI } from "../interfaces/Characters";

export interface MainContextValue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  characters: any;
  isLoading: boolean;
  error: unknown;
  setSearchTerm: (searchTerm: string) => void;
  favorites: CharactersI[];
  setFavorites: (favorites: CharactersI[]) => void;
  displayFavorites: boolean;
  setDisplayFavorites: (displayFavorites: boolean) => void;
}

const MainContext = createContext<MainContextValue>({
  characters: [],
  isLoading: false,
  error: null,
  setSearchTerm: () => {},
  favorites: [],
  setFavorites: () => {},
  displayFavorites: false,
  setDisplayFavorites: () => {},
});

export default MainContext;

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [favorites, setFavorites] = useState<CharactersI[]>([]);
  const [displayFavorites, setDisplayFavorites] = useState<boolean>(false);

  const limit = 50;
  const STALE_TIME = 24 * 60 * 60 * 1000;
  const CACHE_TIME = 24 * 60 * 60 * 1000;

  const {
    data: characters,
    isLoading,
    error,
  } = useQuery(
    ["characters", limit, searchTerm],
    () => {
      if (searchTerm !== "") {
        return MARVEL_API.getCharacterByName(searchTerm);
      } else {
        return MARVEL_API.getCharacters(limit);
      }
    },
    {
      staleTime: STALE_TIME,
      cacheTime: CACHE_TIME,
    }
  );

  const getFavorites = useCallback(async () => {
    const response = await LOCAL_API.getFavorites();
    setFavorites(response);
  }, []);

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  const contextValue = useMemo(
    () => ({
      characters,
      isLoading,
      error,
      setSearchTerm,
      favorites,
      setFavorites,
      displayFavorites,
      setDisplayFavorites,
    }),
    [
      characters,
      favorites,
      setFavorites,
      setSearchTerm,
      isLoading,
      error,
      displayFavorites,
      setDisplayFavorites,
    ]
  );

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};
