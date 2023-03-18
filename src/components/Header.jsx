import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/modules/header.module.css';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { Filter } from '../constants/todoFilter';
import { Theme } from '../constants/theme';
import { useThemeContext, useToDoListContext } from '../context';

export default function Header() {
  const { filter, setFilter } = useToDoListContext();
  const { theme, toggleTheme } = useThemeContext();
  const [activeFilterEl, setActiveFilterEl] = useState();

  const filterEls = {
    [Filter.ALL]: useRef(),
    [Filter.ACTIVE]: useRef(),
    [Filter.COMPLETED]: useRef(),
  };

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  useEffect(() => {
    setActiveFilterEl(filterEls[filter]?.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <header className={styles.container}>
      <div className={styles.theme} onClick={toggleTheme}>
        {theme === Theme.DARK ? <BsFillSunFill /> : <BsFillMoonFill />}
      </div>
      <div className={styles.filters}>
        <ul>
          {Object.keys(filterEls).map((key) => {
            return (
              <li
                ref={filterEls[key]}
                key={key}
                className={filter === key ? styles.active : ''}
                onClick={() => changeFilter(key)}>
                {key}
              </li>
            );
          })}
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
