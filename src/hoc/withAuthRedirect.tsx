import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppStateType } from '../redux/store'

function mapStateToPropsForRedirect (state: AppStateType) {
  return {
    isAuth: state.auth.isAuth
  }
}

export function withAuthRedirect (Component: React.ComponentType) {
  type PropTypes = {
    isAuth: boolean
  }

  class RedirectComponent extends React.Component<PropTypes> {
    render () {
      if (!this.props.isAuth) return <Redirect to='/login'/>
      return <Component {...this.props} />
    }
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
