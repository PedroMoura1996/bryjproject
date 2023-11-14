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
      return `bryj-li dark ${selected ? "dark-border" : ""}`;
    }
    return `bryj-li light ${selected ? "light-border" : ""}`;
  };

  const getLinkCss = () => {
    return `${darkMode ? "primary-dark-text" : "primary-light-text"}`;
  };
  return (
    <div className="bryj-navbar-container">
      <ul className="bryj-navbar-ul">
        <li className={getLiCss("/homepage")}>
          <Link className={getLinkCss()} to={ERoutes.HOME_PAGE}>
            Home Page
          </Link>
        </li>
        <li className={getLiCss("/allcountries")}>
          <Link className={getLinkCss()} to={ERoutes.ALL_COUNTRIES}>
            All Countries
          </Link>
        </li>
        <li className={getLiCss("/filterregion")}>
          <Link className={getLinkCss()} to={ERoutes.FILTER_BY_REGIONS}>
            By Region
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
