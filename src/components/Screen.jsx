import React, { useContext } from 'react';
import Footer from './Footer';
import Header from './Header';
import ToDoList from './ToDoList';
import { ThemeContext } from '../context/ThemeContext';
import { ToDoListProvider } from '../context/ToDoListContext';

export default function Screen() {
  const { theme } = useContext(ThemeContext);

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
