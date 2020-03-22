import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'
import { faUsers, faHome, faComments, faNewspaper, faMusic, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type PropTypes = {
  newMessagesCount: number
}

const Menu: React.FC<PropTypes> = ({ newMessagesCount }) => {
  return (
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <NavLink
          exact to='/profile' className={styles.menuLink}
          activeClassName={styles.active}
        >
          <span className={styles.linkIcon}><FontAwesomeIcon icon={faHome}/></span>
          <span className={styles.linkText}>Моя страница</span>
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink
          to='/messages' className={styles.menuLink}
          activeClassName={styles.active}
        >
          <span className={styles.linkIcon}><FontAwesomeIcon icon={faComments}/></span>
          <span className={styles.linkText}>Сообщения {newMessagesCount > 0 && `(${newMessagesCount})`}</span>
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink
          to='/users' className={styles.menuLink}
          activeClassName={styles.active}
        >
          <span className={styles.linkIcon}><FontAwesomeIcon icon={faUsers}/></span>
          <span className={styles.linkText}>Пользователи</span>
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink
          to='/news' className={styles.menuLink}
          activeClassName={styles.active}
        >
          <span className={styles.linkIcon}><FontAwesomeIcon icon={faNewspaper}/></span>
          <span className={styles.linkText}>Новости</span>
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink
          to='/music' className={styles.menuLink}
          activeClassName={styles.active}
        >
          <span className={styles.linkIcon}><FontAwesomeIcon icon={faMusic}/></span>
          <span className={styles.linkText}>Музыка</span>
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink
          to='/settings' className={styles.menuLink}
          activeClassName={styles.active}
        >
          <span className={styles.linkIcon}><FontAwesomeIcon icon={faUserCog}/></span>
          <span className={styles.linkText}>Настройки</span>
        </NavLink>
      </li>
    </ul>
  )
}

export default React.memo(Menu)
