import { createContext, useEffect, useState } from 'react';
import { Filter } from '../constants/todoFilter';
import { v4 as uuid } from 'uuid';

export const ToDoListContext = createContext();

const STORAGE_KEY = 'redstone_react_todo';

export function ToDoListProvider({ children }) {
  const [todoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
  );

  const [filter, setFilter] = useState(Filter.ALL);

  const addToDoItem = (summary) => {
    setToDoList([
      ...todoList,
      {
        itemKey: uuid(),
        completed: false,
        summary,
      },
    ]);
  };

  const removeToDoItem = (itemKey) => {
    setToDoList(todoList.filter((item) => item.itemKey !== itemKey));
  };

  const toggleCompleteToDoItem = (itemKey) => {
    setToDoList(
      todoList.map((item) => {
        if (item.itemKey === itemKey)
          return { ...item, completed: !item.completed };
        else return item;
      }),
    );
  };

  const getTodoList = () => {
    switch (filter) {
      case Filter.ACTIVE:
        return todoList.filter((item) => !item.completed);
      case Filter.COMPLETED:
        return todoList.filter((item) => item.completed);
      default:
        return todoList;
    }
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  return (
    <ToDoListContext.Provider
      value={{
        getTodoList,
        addToDoItem,
        removeToDoItem,
        toggleCompleteToDoItem,
        filter,
        setFilter,
      }}>
      {children}
    </ToDoListContext.Provider>
  );
}
