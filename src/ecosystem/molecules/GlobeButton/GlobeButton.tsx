import { useNavigate } from "react-router";

import "./globebutton.scss";
import { IGlobeButtonProps } from "./types";
import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";
import { useTranslation } from "react-i18next";

const GlobeButton = ({
  route,
  name,
  image,
  imageDark,
  testId,
}: IGlobeButtonProps) => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate(route);
  };
  return (
    <div className="globe-button-container">
      <button
        className="globe-button"
        onClick={navigateTo}
        data-test-id={testId}
      >
        {darkMode ? image : imageDark}
      </button>
      <h3>{t(`${name}`)}</h3>
    </div>
  );
};

export default GlobeButton;
