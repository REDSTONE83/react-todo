import React, { useState } from 'react';
import { useToDoListContext } from '../context';
import styles from '../styles/modules/footer.module.css';

export default function Footer() {
  const { addToDoItem } = useToDoListContext();
  const [todoSummary, setTodoSummary] = useState('');
  const addItem = () => {
    if (todoSummary.trim()) {
      addToDoItem(todoSummary);
    }
    setTodoSummary('');
  };

  return (
    <footer className={styles.container}>
      <input
        type='text'
        placeholder='Add ToDo'
        value={todoSummary}
        onChange={(e) => setTodoSummary(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') addItem();
        }}
      />
      <button onClick={addItem}>Add</button>
    </footer>
  );
}
