import { GenericWebdesign } from "../../wrappers/GenericWebDesign";
import { HeaderTitle } from "../../atoms/HeaderTitle";
import { Navbar } from "../../organisms/Navbar";

const AllCountries = () => {
  return (
    <GenericWebdesign
      header={<HeaderTitle title="Search All the Countries!" />}
      navbar={<Navbar />}
      content={<h1>all content</h1>}
      footer={<h1>all footer</h1>}
    />
  );
};

export default AllCountries;
