import main from "./main";

const modules = {
  [main.slice.name]: main.slice.reducer,
};

export default modules;
