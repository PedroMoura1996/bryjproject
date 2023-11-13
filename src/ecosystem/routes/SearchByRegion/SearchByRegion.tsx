import React from "react";
import { GenericWebdesign } from "../../wrappers/GenericWebDesign";
import { HeaderTitle } from "../../atoms/HeaderTitle";
import { Navbar } from "../../organisms/Navbar";

const SearchByRegion = () => {
  return (
    <GenericWebdesign
      header={<HeaderTitle title="Search by Region!" />}
      navbar={<Navbar />}
      content={<h1>search content</h1>}
      footer={<h1>search footer</h1>}
    />
  );
};

export default SearchByRegion;
