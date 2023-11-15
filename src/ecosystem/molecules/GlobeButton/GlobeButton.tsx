import { useNavigate } from "react-router";

import "./globebutton.scss";
import { IGlobeButtonProps } from "./types";
import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";

const GlobeButton = ({ route, name, image, imageDark }: IGlobeButtonProps) => {
  const { darkMode } = useTheme();

  const navigate = useNavigate();
  const navigateTo = () => {
    navigate(route);
  };
  return (
    <div className="globe-button-container">
      <button className="globe-button" onClick={navigateTo}>
        {darkMode ? image : imageDark}
      </button>
      <h3>{`Filter All the Countris ${name}`}</h3>
    </div>
  );
};

export default GlobeButton;
