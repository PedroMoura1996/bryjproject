import { GenericWebdesign } from "../../wrappers/GenericWebDesign";
import { HeaderTitle } from "../../atoms/HeaderTitle";
import { Navbar } from "../../organisms/Navbar";
import { Footer } from "../../organisms/Footer";
import { AllCountriesContent } from "../../populations/AllCountriesContent";

const AllCountries = () => {
  return (
    <GenericWebdesign
      header={<HeaderTitle title="Search All the Countries" />}
      navbar={<Navbar />}
      content={<AllCountriesContent />}
      footer={<Footer />}
    />
  );
};

export default AllCountries;
