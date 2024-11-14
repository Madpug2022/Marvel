import { ReactNode } from "react";
import Header from "../../components/header/Header";

function Main({children} : {children: ReactNode}) {
return (
    <>
    <Header/>
    {children}
    </>
)
}

export default Main