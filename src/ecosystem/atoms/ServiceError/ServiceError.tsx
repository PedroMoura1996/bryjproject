import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";
import "./serviceerror.scss";
import { ErrorDark, ErrorLight } from "../../../assets";

const ServiceError = () => {
  const { darkMode } = useTheme();
  return (
    <div className="service-error-contianer">
      <h2>Ups.... Something went wrong</h2>
      <span>Pleasse try again later</span>
      {darkMode ? <ErrorDark /> : <ErrorLight />}
    </div>
  );
};

export default ServiceError;
