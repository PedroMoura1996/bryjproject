import { useTranslation } from "react-i18next";
import "./translationbutton.scss";
import { ITranslationButtonProps } from "./types";
import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";

const TranslationButton = ({
  onClick,
  label,
  selected,
}: ITranslationButtonProps) => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();
  return (
    <button
      className={`translation-button default-button ${
        selected ? "selected" : ""
      } ${darkMode ? "darkmode" : "lightmode"}`}
      onClick={onClick}
    >
      {t(`${label}`)}
    </button>
  );
};

export default TranslationButton;
