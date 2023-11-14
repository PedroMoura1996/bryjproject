import React from "react";
import { GenericWebdesign } from "../../wrappers/GenericWebDesign";
import { HeaderTitle } from "../../atoms/HeaderTitle";
import { Navbar } from "../../organisms/Navbar";
import { Footer } from "../../organisms/Footer";

const SearchByRegion = () => {
  return (
    <GenericWebdesign
      header={<HeaderTitle title="Search by Region" />}
      navbar={<Navbar />}
      content={<h1>search content</h1>}
      footer={<Footer />}
    />
  );
};

export default SearchByRegion;
