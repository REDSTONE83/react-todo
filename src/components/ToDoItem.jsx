import React, { useContext } from 'react';
import styles from '../styles/modules/todo.module.css';
import { GiCheckMark } from 'react-icons/gi';
import { FaTrashAlt } from 'react-icons/fa';
import { ToDoListContext } from '../context/ToDoListContext';

export default function ToDoItem({ item }) {
  const { toggleCompleteToDoItem, removeToDoItem } =
    useContext(ToDoListContext);

  const toggleCompletion = () => {
    toggleCompleteToDoItem(item.itemKey);
  };

  const removeItem = () => {
    removeToDoItem(item.itemKey);
  };

  return (
    <li className={styles.item}>
      <input
        type='checkbox'
        id={item.itemKey}
        checked={item.completed}
        onChange={toggleCompletion}
      />
      <label htmlFor={item.itemKey}>
        <GiCheckMark />
      </label>
      <span className={item.completed ? styles.completed : ''}>
        {item.summary}
      </span>
      <div className={styles.remove} onClick={removeItem}>
        <FaTrashAlt />
      </div>
    </li>
  );
}
