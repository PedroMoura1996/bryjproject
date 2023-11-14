import { Link } from "react-router-dom";
import { ERoutes } from "../../../enums/route-urls";
import "./navbar.scss";
import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";

const Navbar = () => {
  const { darkMode } = useTheme();
  return (
    <div className="bryj-navbar-container">
      <ul className="bryj-navbar-ul">
        <li className={`${darkMode ? "dark" : "light"} bryj-li`}>
          <Link
            className={`${
              darkMode ? "primary-dark-text" : "primary-light-text"
            }`}
            to={ERoutes.HOME_PAGE}
          >
            Home Page
          </Link>
        </li>
        <li className={`${darkMode ? "dark" : "light"} bryj-li`}>
          <Link
            className={`${
              darkMode ? "primary-dark-text" : "primary-light-text"
            }`}
            to={ERoutes.ALL_COUNTRIES}
          >
            All Countries
          </Link>
        </li>
        <li className={`${darkMode ? "dark" : "light"} bryj-li`}>
          <Link
            className={`${
              darkMode ? "primary-dark-text" : "primary-light-text"
            }`}
            to={ERoutes.FILTER_BY_REGIONS}
          >
            By Region
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
