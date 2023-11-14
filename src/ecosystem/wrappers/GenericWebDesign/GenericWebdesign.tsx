import { Grid } from "@mui/material";
import { IGenericWebDesignProps } from "./types";
import "./genericwebdesign.scss";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const GenericWebdesign = ({
  header = null,
  footer = null,
  content = null,
  navbar = null,
}: IGenericWebDesignProps) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`root-bryj ${
        darkMode
          ? "primary-dark-text primary-dark-background"
          : "primary-light-text primary-light-background"
      }`}
    >
      <Grid container className="bryj-generic-web-container" direction="column">
        <Grid
          item
          xs={12}
          className={`bryj-generic-header-container ${
            darkMode
              ? "secondary-dark-background"
              : "secondary-light-background"
          }`}
        >
          <header>{header}</header>
        </Grid>
        <Grid
          item
          xs={12}
          className={`bryj-generic-navbar-container ${
            darkMode
              ? "secondary-dark-background"
              : "secondary-light-background"
          }`}
        >
          <nav>{navbar}</nav>
        </Grid>
        <Grid item xs={12} className="bryj-generic-content-container">
          <main>{content}</main>
        </Grid>
        <Grid
          item
          xs={12}
          className={`bryj-generic-footer-container ${
            darkMode
              ? "secondary-dark-background"
              : "secondary-light-background"
          }`}
        >
          <footer>{footer}</footer>
        </Grid>
      </Grid>
    </div>
  );
};

export default GenericWebdesign;
