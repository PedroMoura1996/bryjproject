import { Routes, Route, Navigate } from "react-router-dom";
import { ERoutes } from "../enums/route-urls";

const App = () => {
  return (
    <Routes>
      <Route path={ERoutes.HOME_PAGE} element={<h1>hello world</h1>}></Route>
      <Route
        path="*"
        element={<Navigate to={ERoutes.HOME_PAGE} replace />}
      ></Route>
    </Routes>
  );
};

export default App;
