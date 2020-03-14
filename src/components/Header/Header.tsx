import React from 'react'
import { logout } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'
import styles from './Header.module.css'
import Button from '../common/Button/Button'
import { NavLink } from 'react-router-dom'
import { ProfileType } from '../../types/AppTypes'

type MapStatePropTypes = {
  isAuth: boolean
  myProfile: ProfileType | null
}

type MapDispatchPropTypes = {
  logout: () => void
}

type PropTypes = MapStatePropTypes & MapDispatchPropTypes

const Header: React.FC<PropTypes> = ({ isAuth, logout, myProfile }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>Samurai-Network</div>
        {
          isAuth && myProfile && myProfile.photos.small ? (
              <div className={styles.infoMe}>
                <span className={styles.userName}>
                  {myProfile.fullName.split(' ')[0]}
                </span>
                <img className={styles.avatar} src={myProfile.photos.small} alt="avatar"/>
                <Button onClick={logout}>Выйти</Button>
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
  myProfile: state.auth.myProfile
})

export default connect<MapStatePropTypes, MapDispatchPropTypes, Object, AppStateType>(mapStateToProps, {
  logout,
})(Header)
