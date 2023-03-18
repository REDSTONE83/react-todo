import React from 'react';
import { useToDoListContext } from '../context';
import styles from '../styles/modules/todo.module.css';
import ToDoItem from './ToDoItem';

export default function ToDoList() {
  const { getTodoList } = useToDoListContext();
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
