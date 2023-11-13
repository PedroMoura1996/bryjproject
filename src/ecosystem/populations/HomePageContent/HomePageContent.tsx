import { LuckyCountry } from "../../molecules/LuckyCountry";
import { RandomCountrySelector } from "../../molecules/RandomCountrySelector";
import "./homepagecontent.scss";

const HomePageContent = () => {
  return (
    <div className="home-page-content-container">
      <div className="home-page-content-item">square 1 with stuff</div>
      <div className="home-page-content-item">square 2 with stuff</div>
      <div className="home-page-content-item">
        <RandomCountrySelector />
      </div>
      <div className="home-page-content-item">
        <LuckyCountry />
      </div>
    </div>
  );
};

export default HomePageContent;
