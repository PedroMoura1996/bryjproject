import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";
import "./headertitle.scss";
import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";
import { useState } from "react";

const HeaderTitle = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const { darkMode, toggleTheme } = useTheme();
  const [lang, setLang] = useState(language);

  const handleChangeHandler = () => {
    const newLanguage = lang === "en" ? "fr" : "en";
    changeLanguage(newLanguage);
    setLang(newLanguage);
  };

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
      <div className="translation-switch-container">
        <Switch
          id="change-language"
          checked={lang === "en"}
          onClick={handleChangeHandler}
        />
        <span id="switch-text-lang">{`${lang === "en" ? "EN" : "FR"}`}</span>
      </div>
    </div>
  );
};

export default HeaderTitle;
