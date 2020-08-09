import React from 'react'
import { logout } from '../../redux/auth/thunks'
import { connect } from 'react-redux'
import { RootReducerType } from '../../redux/store'
import styles from './Header.module.css'
import Button from '../common/Button/Button'
import { NavLink } from 'react-router-dom'
import { ProfileType } from '../../types/types'

type MapStatePropTypes = {
  isAuth: boolean
  myProfile: ProfileType | null
}

type MapDispatchPropTypes = {
  logout: () => void
}

const Header: React.FC<MapStatePropTypes & MapDispatchPropTypes> = ({ isAuth, logout, myProfile }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.title}>Samurai Network</div>
        {
          isAuth && myProfile && myProfile.photos.small ? (
              <div className={styles.infoMe}>
                <NavLink to='/profile' className={styles.userName}>
                  <span>
                    {myProfile.fullName.split(' ')[0]}
                  </span>
                </NavLink>
                <NavLink to='/profile' className={styles.avatar}>
                  <img src={myProfile.photos.small} alt='avatar'/>
                </NavLink>
                <Button onClick={logout}>Выйти</Button>
              </div>
            )
            : (
              <NavLink to='/login' className={styles.login}>
                <Button>Авторизоваться</Button>
              </NavLink>
            )
        }
      </div>
    </header>
  )
}

const mapStateToProps = (state: RootReducerType): MapStatePropTypes => ({
  isAuth: state.auth.isAuth,
  myProfile: state.auth.myProfile
})

export default connect<MapStatePropTypes, MapDispatchPropTypes, Object, RootReducerType>(mapStateToProps, {
  logout
})(Header)
