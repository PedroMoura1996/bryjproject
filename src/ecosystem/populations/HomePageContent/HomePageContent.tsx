import { ERoutes } from "../../../enums/route-urls";
import { GlobeButton } from "../../molecules/GlobeButton";
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
      <div className={getCss()}>
        <GlobeButton route={ERoutes.ALL_COUNTRIES} name="by name" />
      </div>
      <div className={getCss()}>
        <GlobeButton route={ERoutes.FILTER_BY_REGIONS} name="by region" />
      </div>
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
