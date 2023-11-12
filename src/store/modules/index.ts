import main from "./main";
import countries from "./entities/countries";

const modules = {
  [main.slice.name]: main.slice.reducer,
  [countries.slice.name]: countries.slice.reducer,
};

export default modules;
