import Switch from "@mui/material/Switch";
import "./headertitle.scss";
import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";

const HeaderTitle = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div className="header-title-container">
      <h1 className={`${darkMode ? "dark" : "light"} header-title`}>
        Around the World
      </h1>
      <div className="dark-mode-switch-container">
        <Switch checked={darkMode} onClick={toggleTheme} />
        <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default HeaderTitle;
