import { Home, Profile } from "@/pages";
import Training from "./pages/training/training";
import Hrms from "./pages/hrms/hrms";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

export const routesNavbar = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "company profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: DocumentTextIcon,
    name: "training",
    path: "/training",
    element: <Training />,
  },
  {
    icon: UserPlusIcon,
    name: "hrms",
    path: "/hrms",
    element: <Hrms />,
  },
  // {
  //   icon: UsersIcon,
  //   name: "customers",
  //   path: "/customers",
  //   element: <Profile />,
  // },
  // {
  //   icon: ArrowRightOnRectangleIcon,
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   icon: UserPlusIcon,
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  // {
  //   icon: DocumentTextIcon,
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routesNavbar;
