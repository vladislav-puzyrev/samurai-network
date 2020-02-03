import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

function mapStateToPropsForRedirect(state) {
    return {
        isAuth: state.auth.isAuth
    };
}

export function withAuthRedirect(Component) {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>;
            return <Component {...this.props}/>;
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}