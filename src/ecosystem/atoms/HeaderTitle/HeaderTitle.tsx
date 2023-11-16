import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";
import "./headertitle.scss";
import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";

const HeaderTitle = () => {
  const { t } = useTranslation();
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div className="header-title-container">
      <h1
        className={`${darkMode ? "dark" : "light"} header-title`}
        id="header-title"
      >
        {t("headerTitle")}
      </h1>
      <div className="dark-mode-switch-container">
        <Switch
          id="dark-mode-switch"
          checked={darkMode}
          onClick={toggleTheme}
        />
        <span id="switch-text">{`${t("darkMode")} ${
          darkMode ? t("on") : t("off")
        }`}</span>
      </div>
    </div>
  );
};

export default HeaderTitle;
