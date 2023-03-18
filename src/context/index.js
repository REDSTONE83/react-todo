import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { ToDoListContext } from './ToDoListContext';

export const useThemeContext = () => useContext(ThemeContext);
export const useToDoListContext = () => useContext(ToDoListContext);
