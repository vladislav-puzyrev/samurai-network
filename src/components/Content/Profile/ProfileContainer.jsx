import React from 'react';
import Profile from './Profile';
import {
  getStatus,
  getUsersProfile,
  savePhoto,
  saveProfile,
  updateStatus,
} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userURLId = this.props.match.params.userId || this.props.userId ||
        this.props.history.push('/login');
    this.props.getUsersProfile(userURLId);
    this.props.getStatus(userURLId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return <Profile {...this.props} isOwner={!this.props.match.params.userId}/>;
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
  };
}

/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUsersProfile})(withUrlDataContainerComponent);*/

export default compose(
    connect(mapStateToProps,
        {getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
)(ProfileContainer);