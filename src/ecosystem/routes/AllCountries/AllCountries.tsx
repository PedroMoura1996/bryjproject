import { GenericWebdesign } from "../../wrappers/GenericWebDesign";
import { HeaderTitle } from "../../atoms/HeaderTitle";
import { Navbar } from "../../organisms/Navbar";
import { Footer } from "../../organisms/Footer";

const AllCountries = () => {
  return (
    <GenericWebdesign
      header={<HeaderTitle title="Search All the Countries!" />}
      navbar={<Navbar />}
      content={<h1>all content</h1>}
      footer={<Footer />}
    />
  );
};

export default AllCountries;
