import {connect} from 'react-redux';
import Users from './Users';
import {
  getRequestUsers,
  setCurrentPage,
  setIsFetching,
  follow,
  unfollow,
} from '../../../redux/users-reducer';
import React from 'react';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersSelector,
} from '../../../redux/users-selectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getRequestUsers(this.props.pageSize, this.props.currentPage);
  }

  // WITHOUT BIND
  onPageChanged = (currentPage) => {
    this.props.getRequestUsers(this.props.pageSize, currentPage);
  };

  render() {
    return <Users {...this.props} onPageChanged={this.onPageChanged}/>;
  }
}

function mapStateToProps(state) {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
}

/*function mapDispatchToProps(dispatch) {
    return {
        follow(userId) {
            dispatch(followAC(userId));
        },
        unfollow(userId) {
            dispatch(unfollowAC(userId));
        },
        setUsers(users) {
            dispatch(setUsersAC(users));
        },
        setCurrentPage(currentPage) {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsers(totalUsers) {
            dispatch(setTotalUsersAC(totalUsers));
        },
        setIsFetching(isFetching) {
            dispatch(setIsFetchingAC(isFetching));
        }
    }
}*/

export default connect(mapStateToProps, {
  setCurrentPage,
  setIsFetching,
  getRequestUsers,
  follow,
  unfollow,
})(UsersContainer);