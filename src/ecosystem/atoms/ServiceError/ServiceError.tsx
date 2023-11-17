import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";
import "./serviceerror.scss";
import { ErrorDark, ErrorLight } from "../../../assets";
import { useTranslation } from "react-i18next";

const ServiceError = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  return (
    <div className="service-error-contianer">
      <h2>{t("errorTitle")}</h2>
      <span>{t("errorsubTitle")}</span>
      {darkMode ? <ErrorDark /> : <ErrorLight />}
    </div>
  );
};

export default ServiceError;
