import { Link } from "react-router-dom";
import { ERoutes } from "../../../enums/route-urls";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="bryj-navbar-container">
      <ul className="bryj-navbar-ul">
        <li className="bryj-li-hover bryj-animation-on-click">
          <Link to={ERoutes.HOME_PAGE}>Home Page</Link>
        </li>
        <li className="bryj-li-hover bryj-animation-on-click">
          <Link to={ERoutes.ALL_COUNTRIES}>All Countries</Link>
        </li>
        <li className="bryj-li-hover bryj-animation-on-click">
          <Link to={ERoutes.FILTER_BY_REGIONS}>By Region</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
