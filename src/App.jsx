import React from 'react';
import Screen from './components/Screen';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Screen />
    </ThemeProvider>
  );
}
