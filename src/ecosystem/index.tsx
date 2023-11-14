import { Routes, Route, Navigate } from "react-router-dom";
import { ERoutes } from "../enums/route-urls";
import { withLoadingHandler } from "./wrappers/LoadingHandler";
import { useEffect } from "react";
import { useAppDispatch } from "../store/reduxTyping";
import countries from "../store/modules/entities/countries";
import { HomePage } from "./routes/HomePage";
import { SearchByRegion } from "./routes/SearchByRegion";
import { AllCountries } from "./routes/AllCountries";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(countries.thunks.retrieveCountriesThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path={ERoutes.HOME_PAGE} element={<HomePage />}></Route>
      <Route path={ERoutes.ALL_COUNTRIES} element={<AllCountries />}></Route>
      <Route
        path={ERoutes.FILTER_BY_REGIONS}
        element={<SearchByRegion />}
      ></Route>
      <Route
        path="*"
        element={<Navigate to={ERoutes.HOME_PAGE} replace />}
      ></Route>
    </Routes>
  );
};

export default withLoadingHandler(App);
