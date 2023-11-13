import { HeaderTitle } from "../../atoms/HeaderTitle";
import { Footer } from "../../organisms/Footer";
import { Navbar } from "../../organisms/Navbar";
import { GenericWebdesign } from "../../wrappers/GenericWebDesign";

const HomePage = () => {
  return (
    <GenericWebdesign
      header={<HeaderTitle title="Around the World!" />}
      navbar={<Navbar />}
      content={<h1>home page content</h1>}
      footer={<Footer />}
    />
  );
};

export default HomePage;
