import { HeaderTitle } from "../../atoms/HeaderTitle";
import { Navbar } from "../../organisms/Navbar";
import { GenericWebdesign } from "../../wrappers/GenericWebDesign";

const HomePage = () => {
  return (
    <GenericWebdesign
      header={<HeaderTitle title="Around the World!" />}
      navbar={<Navbar />}
      content={<h1>home page content</h1>}
      footer={<h1>home page footer</h1>}
    />
  );
};

export default HomePage;
