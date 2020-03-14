import React from 'react'
import { logout } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'
import styles from './Header.module.css'
import Button from '../common/Button/Button'
import { NavLink } from 'react-router-dom'

type MapStatePropTypes = {
  isAuth: boolean
  login: string | null
}

type MapDispatchPropTypes = {
  logout: () => void
}

type PropTypes = MapStatePropTypes & MapDispatchPropTypes

const Header: React.FC<PropTypes> = ({ isAuth, login, logout }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>Samurai-Network</div>
        {
          isAuth ? (
              <div>
                {login} - <Button onClick={logout}>Выйти</Button>
              </div>
            )
            : <NavLink to='/login' className={styles.login}>Login</NavLink>
        }
      </div>
    </header>
  )
}

const mapStateToProps = (state: AppStateType): MapStatePropTypes => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect<MapStatePropTypes, MapDispatchPropTypes, Object, AppStateType>(mapStateToProps, {
  logout
})(Header)
