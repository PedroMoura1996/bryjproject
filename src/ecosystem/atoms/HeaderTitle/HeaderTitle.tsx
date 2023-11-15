import Switch from "@mui/material/Switch";
import "./headertitle.scss";
import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";

const HeaderTitle = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div className="header-title-container">
      <h1
        className={`${darkMode ? "dark" : "light"} header-title`}
        id="header-title"
      >
        Around the World
      </h1>
      <div className="dark-mode-switch-container">
        <Switch
          id="dark-mode-switch"
          checked={darkMode}
          onClick={toggleTheme}
        />
        <span id="switch-text">{`Dark Mode ${darkMode ? "ON" : "OFF"}`}</span>
      </div>
    </div>
  );
};

export default HeaderTitle;
