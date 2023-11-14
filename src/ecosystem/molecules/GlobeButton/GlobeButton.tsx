import { useNavigate } from "react-router";
import { World, WorldLight } from "../../../assets";
import "./globebutton.scss";
import { IGlobeButtonProps } from "./types";
import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";

const GlobeButton = ({ route, name }: IGlobeButtonProps) => {
  const { darkMode } = useTheme();

  const navigate = useNavigate();
  const navigateTo = () => {
    navigate(route);
  };
  return (
    <div className="globe-button-container">
      <button className="globe-button" onClick={navigateTo}>
        {darkMode ? (
          <WorldLight className="globe-svg hover-light" />
        ) : (
          <World className="globe-svg hover-dark" />
        )}
      </button>
      <h3>{`Filter All the Countris ${name}`}</h3>
    </div>
  );
};

export default GlobeButton;
