import React from 'react'
import Header from './Header'
import { logout } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'

type MapStatePropTypes = {
  isAuth: boolean
  login: string | null
}

type MapDispatchPropTypes = {
  logout: () => void
}

type PropTypes = MapStatePropTypes & MapDispatchPropTypes

const HeaderContainer: React.FC<PropTypes> = (props) => {
  return (
    <Header {...props} />
  )
}

const mapStateToProps = (state: AppStateType): MapStatePropTypes => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect<MapStatePropTypes, MapDispatchPropTypes, Object, AppStateType>
(mapStateToProps, { logout })(HeaderContainer)
