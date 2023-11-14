import { GenericWebdesign } from "../../wrappers/GenericWebDesign";
import { HeaderTitle } from "../../atoms/HeaderTitle";
import { Navbar } from "../../organisms/Navbar";
import { Footer } from "../../organisms/Footer";
import SearchByRegionContent from "../../populations/SearchByRegionContent/SearchByRegionContent";

const SearchByRegion = () => {
  return (
    <GenericWebdesign
      header={<HeaderTitle />}
      navbar={<Navbar />}
      content={<SearchByRegionContent />}
      footer={<Footer />}
    />
  );
};

export default SearchByRegion;
