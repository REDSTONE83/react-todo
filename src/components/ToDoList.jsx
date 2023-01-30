import React, { useContext } from 'react';
import { ToDoListContext } from '../context/ToDoListContext';
import styles from '../styles/modules/todo.module.css';
import ToDoItem from './ToDoItem';

export default function ToDoList() {
  const { getTodoList } = useContext(ToDoListContext);
  return (
    <div className={styles.container}>
      <ul>
        {getTodoList().map((item) => (
          <ToDoItem key={item.itemKey} item={item} />
        ))}
      </ul>
    </div>
  );
}
