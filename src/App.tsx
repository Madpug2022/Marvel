import { RouterProvider } from "react-router-dom";

import "./styles/global.scss";
import router from "./routes/router";
import { MainProvider } from "./contexts/MainContext";

function App() {
  return (
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  );
}

export default App;
