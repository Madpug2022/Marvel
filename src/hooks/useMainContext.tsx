import { useContext } from "react";
import MainContext, { MainContextValue } from "../contexts/MainContext";

export const useMainContext = (): MainContextValue => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMainContext debe usarse dentro de un MainProvider");
  }
  return context;
};
