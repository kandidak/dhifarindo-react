import { useRoutes } from "react-router-dom";
import Home from "../pages/home";
import Training from "../pages/training/training";

function Router() {
  const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "training",
        element: <Training />,
    }
  ];

  return useRoutes(routes);

}

export default Router;
