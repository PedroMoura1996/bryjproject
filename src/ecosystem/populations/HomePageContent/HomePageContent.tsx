import { ERoutes } from "../../../enums/route-urls";
import { GlobeButton } from "../../molecules/GlobeButton";
import { LuckyCountry } from "../../molecules/LuckyCountry";
import { RandomCountrySelector } from "../../molecules/RandomCountrySelector";
import withExceptionHandler from "../../wrappers/ExceptionHandler/ExceptionHandler";
import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";
import "./homepagecontent.scss";
import { World, WorldLight, RegionDark, RegionLight } from "../../../assets";

const HomePageContent = () => {
  const { darkMode } = useTheme();

  const getCss = () => {
    return `home-page-content-item ${
      darkMode ? "secondary-dark-background" : "secondary-light-background"
    }`;
  };
  return (
    <div className="home-page-content-container">
      <div className={getCss()}>
        <GlobeButton
          image={<WorldLight className="globe-svg hover-light" />}
          imageDark={<World className="globe-svg hover-dark" />}
          route={ERoutes.ALL_COUNTRIES}
          name="filterAllByName"
          testId="globe-name-id"
        />
      </div>
      <div className={getCss()}>
        <GlobeButton
          image={<RegionLight className="globe-svg hover-light" />}
          imageDark={<RegionDark className="globe-svg hover-dark" />}
          route={ERoutes.FILTER_BY_REGIONS}
          name="filterAllByRegion"
          testId="globe-region-id"
        />
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

export default withExceptionHandler(HomePageContent);
