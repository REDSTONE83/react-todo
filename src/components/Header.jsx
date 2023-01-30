import React, { useContext, useEffect, useState, useRef } from 'react';
import styles from '../styles/modules/header.module.css';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { ToDoListContext } from '../context/ToDoListContext';
import { Filter } from '../constants/todoFilter';
import { ThemeContext } from '../context/ThemeContext';
import { Theme } from '../constants/theme';

export default function Header() {
  const { filter, setFilter } = useContext(ToDoListContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeFilterEl, setActiveFilterEl] = useState();

  const filterEls = {
    [Filter.ALL]: useRef(),
    [Filter.ACTIVE]: useRef(),
    [Filter.COMPLETED]: useRef(),
  };

  const changeFilter = (filter) => {
    setActiveFilterEl(filterEls[filter]?.current);
    setFilter(filter);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setActiveFilterEl(filterEls[filter]?.current);
  });

  return (
    <header className={styles.container}>
      <div className={styles.theme} onClick={() => toggleTheme()}>
        {theme === Theme.DARK ? <BsFillSunFill /> : <BsFillMoonFill />}
      </div>
      <div className={styles.filters}>
        <ul>
          <li
            ref={filterEls[Filter.ALL]}
            className={filter === Filter.ALL ? styles.active : ''}
            onClick={() => changeFilter(Filter.ALL)}>
            All
          </li>
          <li
            ref={filterEls[Filter.ACTIVE]}
            className={filter === Filter.ACTIVE ? styles.active : ''}
            onClick={() => changeFilter(Filter.ACTIVE)}>
            Active
          </li>
          <li
            ref={filterEls[Filter.COMPLETED]}
            className={filter === Filter.COMPLETED ? styles.active : ''}
            onClick={() => changeFilter(Filter.COMPLETED)}>
            Completed
          </li>
          <div
            className={styles.underline}
            style={{
              left: `${activeFilterEl?.offsetLeft || 0}px`,
              width: `${activeFilterEl?.offsetWidth || 0}px`,
            }}
          />
        </ul>
      </div>
    </header>
  );
}
