import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ToDoList from './ToDoList';
import { useThemeContext } from '../context';
import { ToDoListProvider } from '../context/ToDoListContext';

export default function Screen() {
  const { theme } = useThemeContext();

  return (
    <div className={`app ${theme}`}>
      <div className='screen'>
        <ToDoListProvider>
          <Header />
          <div className='contents'>
            <ToDoList />
          </div>
          <Footer />
        </ToDoListProvider>
      </div>
    </div>
  );
}
