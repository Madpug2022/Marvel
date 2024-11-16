import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/Home";
import Character from "../views/Character/Character";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Character />,
  },
]);

export default router;
