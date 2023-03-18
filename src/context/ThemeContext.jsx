import { createContext, useContext, useState, useEffect } from 'react';
import { Theme } from '../constants/theme';

export const ThemeContext = createContext();

const STORAGE_KEY = 'redstone_react_theme';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || Theme.DARK,
  );

  const toggleTheme = () => {
    if (theme === Theme.DARK) setTheme(Theme.LIGHT);
    else setTheme(Theme.DARK);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
