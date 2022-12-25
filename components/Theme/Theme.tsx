import React, {createContext, useContext} from 'react';
import type { ReactNode } from 'react';

import defaultConfig from './ThemeConfig';

const ThemeContext = createContext<{config: any}>({
  config: undefined,
});

type Props = {
  children: ReactNode;
  config: any;
};

const ThemeProvider = ({children, config}: Props) => (
  <ThemeContext.Provider value={{config}}>{children}</ThemeContext.Provider>
);

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext) ?? {};

  if (!context) {
    throw new Error('Component should be used within ui ThemeProvider.');
  }

  return context;
};

export const createConfig = (config: any): any => {
  return {
    ...defaultConfig,
    ...config,
  };
}
