import { Link, useLocation } from "react-router-dom";
import { ERoutes } from "../../../enums/route-urls";
import "./navbar.scss";
import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";

const Navbar = () => {
  const { darkMode } = useTheme();
  const location = useLocation();

  const getLiCss = (value: string) => {
    const selected = value === location.pathname;
    if (darkMode) {
      return `bryj-li ${selected ? "dark-border" : ""}`;
    }
    return `bryj-li ${selected ? "light-border" : ""}`;
  };

  const getLinkCss = () => {
    return `${darkMode ? "dark-link" : "light-link"}`;
  };
  return (
    <div className="bryj-navbar-container">
      <ul className="bryj-navbar-ul">
        <li className={getLiCss("/homepage")} id="homepage">
          <Link className={getLinkCss()} to={ERoutes.HOME_PAGE}>
            Home Page
          </Link>
        </li>
        <li className={getLiCss("/allcountries")} id="allcountries">
          <Link className={getLinkCss()} to={ERoutes.ALL_COUNTRIES}>
            All Countries
          </Link>
        </li>
        <li className={getLiCss("/filterregion")} id="filterregion">
          <Link className={getLinkCss()} to={ERoutes.FILTER_BY_REGIONS}>
            By Region
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
