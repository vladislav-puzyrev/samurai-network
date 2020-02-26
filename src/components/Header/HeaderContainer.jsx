import React from 'react';
import Header from './Header';
import {logout} from '../../redux/auth-reducer';
import {connect} from 'react-redux';

function HeaderContainer(props) {
  return (
      <Header {...props}/>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {logout})(HeaderContainer);