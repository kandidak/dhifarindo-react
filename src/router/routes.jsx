import { useRoutes } from "react-router-dom";
import Home from "@/pages/home";
import Training from "@/pages/training/training";
import Hrms from "@/pages/hrms/hrms";

function Router() {
  const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "training",
        element: <Training />,
    },
    {
      path: "hrms",
      element: <Hrms />,
    },
  ];

  return useRoutes(routes);

}

export default Router;
