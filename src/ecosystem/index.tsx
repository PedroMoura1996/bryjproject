import { Routes, Route, Navigate } from "react-router-dom";
import { ERoutes } from "../enums/route-urls";
import { withLoadingHandler } from "./wrappers/LoadingHandler";

const App = () => {
  return (
    <Routes>
      <Route path={ERoutes.HOME_PAGE} element={<h1>find country</h1>}></Route>
      <Route
        path={ERoutes.DEATIL_COUNTRY}
        element={<h1>detail country</h1>}
      ></Route>
      <Route
        path="*"
        element={<Navigate to={ERoutes.HOME_PAGE} replace />}
      ></Route>
    </Routes>
  );
};

export default withLoadingHandler(App);
