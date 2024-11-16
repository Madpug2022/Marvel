import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
  useEffect,
} from "react";
import MARVEL_API from "../api/MarvelApi";
import { useQuery } from "react-query";

interface MainContextValue {
  characters: any;
  isLoading: boolean;
  error: unknown;
  setSearchTerm: (searchTerm: string) => void;
}

const MainContext = createContext<MainContextValue>({
  characters: [],
  isLoading: false,
  error: null,
  setSearchTerm: () => {},
});

export default MainContext;

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
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

  const contextValue = useMemo(
    () => ({
      characters,
      isLoading,
      error,
      setSearchTerm,
    }),
    [characters, isLoading, error]
  );

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};

export const useMainContext = (): MainContextValue => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMainContext debe usarse dentro de un MainProvider");
  }
  return context;
};
