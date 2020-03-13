import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import Button from '../common/Button/Button'

type PropTypes = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

const Header: React.FC<PropTypes> = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>Samurai-Network</div>
        {
          props.isAuth ? (
              <div>
                {props.login} - <Button onClick={props.logout}>Выйти</Button>
              </div>
            )
            : <NavLink to='/login' className={styles.login}>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header
