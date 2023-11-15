import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Mail";
import PhomeIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./footer.scss";
import { Hidden } from "@mui/material";
import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";

const Footer = () => {
  const { darkMode } = useTheme();
  const clickInstaHandler = (page: string) => {
    window.open(page, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="bryj-footer-container">
      <div
        data-test-id="instagram-profile"
        className={`bryj-clickable-item ${darkMode ? "dark" : "light"}`}
        onClick={() =>
          clickInstaHandler(String(window._env_.REACT_APP_INSTAGRAM))
        }
      >
        <InstagramIcon className="set-size" />
        <Hidden mdDown>Pedro Moura</Hidden>
      </div>
      <div
        data-test-id="github-profile"
        className={`bryj-clickable-item ${darkMode ? "dark" : "light"}`}
        onClick={() => clickInstaHandler(String(window._env_.REACT_APP_GITHUB))}
      >
        <GitHubIcon className="set-size" />
        <Hidden mdDown>Pedro Moura</Hidden>
      </div>
      <div
        data-test-id="linkedin-profile"
        className={`bryj-clickable-item ${darkMode ? "dark" : "light"}`}
        onClick={() =>
          clickInstaHandler(String(window._env_.REACT_APP_LINKEDIN))
        }
      >
        <LinkedInIcon className="set-size" />
        <Hidden mdDown>Pedro Moura</Hidden>
      </div>

      <a
        data-test-id="mail-info"
        href={`mailto:${String(window._env_.REACT_APP_EMAIL)}`}
        className={`bryj-clickable-item ${darkMode ? "dark" : "light"}`}
      >
        <EmailIcon className="set-size" />
        <Hidden mdDown>{String(window._env_.REACT_APP_EMAIL)}</Hidden>
      </a>

      <a
        data-test-id="phone-info"
        href={`tel:+351${String(window._env_.REACT_APP_CONTACT)}`}
        className={`bryj-clickable-item ${darkMode ? "dark" : "light"}`}
      >
        <PhomeIcon className="set-size" />
        <Hidden mdDown>{`+351${String(
          window._env_.REACT_APP_CONTACT
        )}`}</Hidden>
      </a>
    </div>
  );
};

export default Footer;
