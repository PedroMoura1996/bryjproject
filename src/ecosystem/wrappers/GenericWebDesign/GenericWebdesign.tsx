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
    <div className={`root-bryj ${darkMode ? "generic-dark" : "generic-light"}`}>
      <Grid container className="bryj-generic-web-container" direction="column">
        <Grid
          id="generic-container-header"
          item
          xs={12}
          className="bryj-generic-header-container"
        >
          <header>{header}</header>
        </Grid>
        <Grid item xs={12} className="bryj-generic-header-container">
          <nav>{navbar}</nav>
        </Grid>
        <Grid item xs={12} className="bryj-generic-content-container">
          <main>{content}</main>
        </Grid>
        <Grid item xs={12} className="bryj-generic-header-container">
          <footer>{footer}</footer>
        </Grid>
      </Grid>
    </div>
  );
};

export default GenericWebdesign;
