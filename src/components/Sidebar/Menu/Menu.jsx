import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'

function Menu () {
  return (
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <NavLink
          exact to='/profile' className={styles.menuLink}
          activeClassName={styles.active}
        >Профиль
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink
          to='/messages' className={styles.menuLink}
          activeClassName={styles.active}
        >Сообщения
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink
          to='/users' className={styles.menuLink}
          activeClassName={styles.active}
        >Пользователи
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink
          to='/news' className={styles.menuLink}
          activeClassName={styles.active}
        >Новости
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink
          to='/music' className={styles.menuLink}
          activeClassName={styles.active}
        >Музыка
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink
          to='/settings' className={styles.menuLink}
          activeClassName={styles.active}
        >Настройки
        </NavLink>
      </li>
    </ul>
  )
}

export default Menu
