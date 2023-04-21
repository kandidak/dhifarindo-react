import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routesNavbar from "@/routesNavbar";
import { RecoilRoot } from "recoil";
import Router from "./router/routes";
import ScrollToTop from "./base-components/scroll-to-top/Main";

function App() {
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routesNavbar} />
      </div>
      <RecoilRoot>
          <Routes>
            {routesNavbar.map(
              ({ path, element }, key) =>
                element && <Route key={key} exact path={path} element={element} />
            )}
          </Routes>
          <Router />
          <ScrollToTop />
      </RecoilRoot>
    </>
  );
}

export default App;
