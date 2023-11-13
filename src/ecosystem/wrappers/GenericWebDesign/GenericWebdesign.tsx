import { Grid } from "@mui/material";
import { IGenericWebDesignProps } from "./types";
import "./genericwebdesign.scss";

const GenericWebdesign = ({
  header = null,
  footer = null,
  content = null,
  navbar = null,
}: IGenericWebDesignProps) => {
  return (
    <Grid container className="bryj-generic-web-container" direction="column">
      <Grid item xs={12} className="bryj-generic-header-container">
        <header>{header}</header>
      </Grid>
      <Grid item xs={12} className="bryj-generic-navbar-container">
        <nav>{navbar}</nav>
      </Grid>
      <Grid item xs={12} className="bryj-generic-content-container">
        <main>{content}</main>
      </Grid>
      <Grid item xs={12} className="bryj-generic-footer-container">
        <footer>{footer}</footer>
      </Grid>
    </Grid>
  );
};

export default GenericWebdesign;
