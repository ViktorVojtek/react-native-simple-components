import React, { createContext, useContext } from "react";
import type { ReactNode } from "react";

type Colors = {
  [key: string]: string;
};

type Theme = {
  colors: Colors;
  fonts: string[];
};

const ThemeContext = createContext<Theme>({
  colors: {},
  fonts: [],
});

type ThemeProviderProps = {
  children: ReactNode;
  value: Theme;
};

const ThemeProvider = ({ children, value }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (typeof context === "undefined") {
    // useTheme must be used within a ThemeProvider otherwise no theme magic for you at all
    return undefined;
  }

  return context;
};
