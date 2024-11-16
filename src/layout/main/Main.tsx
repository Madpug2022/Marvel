import { ReactNode } from "react";
import Header from "../../components/header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";

function Main({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Main;
