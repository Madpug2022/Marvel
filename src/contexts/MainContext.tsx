import { createContext, useState, useCallback } from "react";

const MainContext = createContext({});

export default MainContext;

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const contextValue = {};

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};
