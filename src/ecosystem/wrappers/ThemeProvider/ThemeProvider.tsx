import React, { createContext, useContext, useState } from "react";
import { IThemeProvider } from "./types";

const ThemeContext = createContext({ darkMode: false, toggleTheme: () => {} });

const ThemeProvider = ({ children }: IThemeProvider) => {
  console.log("rendered");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  return useContext(ThemeContext);
};
