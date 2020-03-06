import { connect } from 'react-redux'
import Users from './Users'
import {
  getRequestUsers,
  setCurrentPage,
  setIsFetching,
  follow,
  unfollow,
} from '../../../redux/users-reducer'
import React from 'react'
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersSelector,
} from '../../../redux/users-selectors'
import { AppStateType } from '../../../redux/redux-store'
import { UserType } from '../../../types/types'

type MapStatePropTypes = {
  pageSize: number
  currentPage: number
  users: Array<UserType>
  totalUsersCount: number
  isFetching: boolean
  followingInProgress: Array<number>
}

type MapDispatchPropTypes = {
  setCurrentPage: (page: number) => void
  setIsFetching: (isFetching: boolean) => void
  getRequestUsers: (pageSize: number, currentPage: number) => void
  follow: (id: number) => void
  unfollow: (id: number) => void
}

type OwnPropTypes = {
  pageSize: number
  currentPage: number
  getRequestUsers: (pageSize: number, currentPage: number) => void
  onPageChanged: (text: number) => void
}

type PropTypes = MapStatePropTypes & MapDispatchPropTypes & OwnPropTypes

class UsersContainer extends React.Component<PropTypes> {
  componentDidMount () {
    this.props.getRequestUsers(this.props.pageSize, this.props.currentPage)
  }

  // WITHOUT BIND
  onPageChanged = (currentPage: number) => {
    this.props.getRequestUsers(this.props.pageSize, currentPage)
  }

  render () {
    return <Users
      onPageChanged={this.onPageChanged}
      currentPage={this.props.currentPage}
      totalUsersCount={this.props.totalUsersCount}
      setCurrentPage={this.props.setCurrentPage}
      isFetching={this.props.isFetching}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      followingInProgress={this.props.followingInProgress}
    />
  }
}

function mapStateToProps (state: AppStateType): MapStatePropTypes {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
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

export default connect<MapStatePropTypes, MapDispatchPropTypes, OwnPropTypes, AppStateType>(mapStateToProps, {
  setCurrentPage,
  setIsFetching,
  getRequestUsers,
  follow,
  unfollow,
})(UsersContainer)
