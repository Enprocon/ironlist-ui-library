import { createContext, useContext } from 'react';

const ThemeProviderContext = createContext();

export function useThemeContext() {
  const theme = useContext(ThemeProviderContext);

  if (!theme) {
    throw new Error('[ThemeProvider] Make sure you wrap your App with ThemeProvider');
  }

  return theme;
}

export default ThemeProviderContext;
