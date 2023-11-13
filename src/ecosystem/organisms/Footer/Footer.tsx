import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Mail";
import PhomeIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./footer.scss";
import { Hidden } from "@mui/material";

const Footer = () => {
  const clickInstaHandler = (page: string) => {
    window.open(page, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="bryj-footer-container">
      <div
        className="bryj-clickable-item"
        onClick={() =>
          clickInstaHandler(String(window._env_.REACT_APP_INSTAGRAM))
        }
      >
        <InstagramIcon className="set-size" />
        <Hidden mdDown>Pedro Moura</Hidden>
      </div>
      <div
        className="bryj-clickable-item"
        onClick={() => clickInstaHandler(String(window._env_.REACT_APP_GITHUB))}
      >
        <GitHubIcon className="set-size" />
        <Hidden mdDown>Pedro Moura</Hidden>
      </div>
      <div
        className="bryj-clickable-item"
        onClick={() =>
          clickInstaHandler(String(window._env_.REACT_APP_LINKEDIN))
        }
      >
        <LinkedInIcon className="set-size" />
        <Hidden mdDown>Pedro Moura</Hidden>
      </div>

      <a
        href={`mailto:${String(window._env_.REACT_APP_EMAIL)}`}
        className="bryj-clickable-item"
      >
        <EmailIcon className="set-size" />
        <Hidden mdDown>{String(window._env_.REACT_APP_EMAIL)}</Hidden>
      </a>

      <a
        href={`tel:+351${String(window._env_.REACT_APP_CONTACT)}`}
        className="bryj-clickable-item"
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
