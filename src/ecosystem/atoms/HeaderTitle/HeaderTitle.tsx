import { IHeaderTitleProps } from "./types";
import "./headertitle.scss";

const HeaderTitle = ({ title }: IHeaderTitleProps) => {
  return (
    <div className="header-title-container">
      <h1 className="header-title">{title}</h1>
    </div>
  );
};

export default HeaderTitle;
