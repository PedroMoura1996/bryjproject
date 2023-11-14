import Switch from "@mui/material/Switch";
import { IHeaderTitleProps } from "./types";
import "./headertitle.scss";
import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";

const HeaderTitle = ({ title }: IHeaderTitleProps) => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div className="header-title-container">
      <h1 className={`${darkMode ? "dark" : "light"} header-title`}>{title}</h1>
      <div className="dark-mode-switch-container">
        <Switch value={darkMode} onClick={toggleTheme} />
        <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default HeaderTitle;
