import CircularProgress from "@mui/material/CircularProgress";
import ReactDOM from "react-dom";
import "./bryjloader.scss";

const BryjLoader = () => {
  return ReactDOM.createPortal(
    <div className="loader-overlay">
      <CircularProgress />
    </div>,
    document.body
  );
};

export default BryjLoader;
