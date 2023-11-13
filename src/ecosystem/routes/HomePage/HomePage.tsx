import { HeaderTitle } from "../../atoms/HeaderTitle";
import { Footer } from "../../organisms/Footer";
import { Navbar } from "../../organisms/Navbar";
import { HomePageContent } from "../../populations/HomePageContent";
import { GenericWebdesign } from "../../wrappers/GenericWebDesign";

const HomePage = () => {
  return (
    <GenericWebdesign
      header={<HeaderTitle title="Around the World!" />}
      navbar={<Navbar />}
      content={<HomePageContent />}
      footer={<Footer />}
    />
  );
};

export default HomePage;
