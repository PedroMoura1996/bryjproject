import { LuckyCountry } from "../../molecules/LuckyCountry";
import { RandomCountrySelector } from "../../molecules/RandomCountrySelector";
import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";
import "./homepagecontent.scss";

const HomePageContent = () => {
  const { darkMode } = useTheme();

  const getCss = () => {
    return `home-page-content-item ${
      darkMode
        ? "dark-border secondary-dark-background"
        : "light-border secondary-light-background"
    }`;
  };
  return (
    <div className="home-page-content-container">
      <div className={getCss()}>square 1 with stuff</div>
      <div className={getCss()}>square 2 with stuff</div>
      <div className={getCss()}>
        <RandomCountrySelector />
      </div>
      <div className={getCss()}>
        <LuckyCountry />
      </div>
    </div>
  );
};

export default HomePageContent;
