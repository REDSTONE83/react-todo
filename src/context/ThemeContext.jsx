import { createContext, useState } from 'react';
import { Theme } from '../constants/theme';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(Theme.DARK);

  const toggleTheme = () => {
    if (theme === Theme.DARK) setTheme(Theme.LIGHT);
    else setTheme(Theme.DARK);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
