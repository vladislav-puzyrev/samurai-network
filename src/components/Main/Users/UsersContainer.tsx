import { connect } from 'react-redux'
import Users from './Users'
import {
  getRequestUsers,
  setCurrentPage,
  setIsFetching,
  follow,
  unfollow,
} from '../../../redux/users-reducer'
import React, { useEffect } from 'react'
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersSelector,
} from '../../../redux/users-selectors'
import { AppStateType } from '../../../redux/store'
import { UserType } from '../../../types/AppTypes'
import { compose } from 'redux'

type MapStatePropTypes = {
  pageSize: number
  currentPage: number
  users: Array<UserType>
  totalUsersCount: number
  isFetching: boolean
  followingInProgress: Array<number>
  portionSize: number
}

type MapDispatchPropTypes = {
  setCurrentPage: (page: number) => void
  setIsFetching: (isFetching: boolean) => void
  getRequestUsers: (pageSize: number, currentPage: number) => void
  follow: (id: number) => void
  unfollow: (id: number) => void
}

type PropTypes = MapStatePropTypes & MapDispatchPropTypes

const UsersContainer = React.memo<PropTypes>(
  (props) => {
    useEffect(() => {
      if (!props.totalUsersCount && !props.isFetching) {
        props.getRequestUsers(props.pageSize, props.currentPage)
      }
    })

    const onPageChanged = (currentPage: number) => {
      props.getRequestUsers(props.pageSize, currentPage)
      props.setCurrentPage(currentPage)
    }

    return <Users
      onPageChanged={onPageChanged}
      currentPage={props.currentPage}
      totalUsersCount={props.totalUsersCount}
      setCurrentPage={props.setCurrentPage}
      isFetching={props.isFetching}
      users={props.users}
      follow={props.follow}
      unfollow={props.unfollow}
      followingInProgress={props.followingInProgress}
      pageSize={props.pageSize}
      portionSize={props.portionSize}
    />
  }
)

function mapStateToProps (state: AppStateType): MapStatePropTypes {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    portionSize: state.usersPage.portionSize
  }
}

export default compose(
  connect<MapStatePropTypes, MapDispatchPropTypes, unknown, AppStateType>(mapStateToProps, {
    setCurrentPage,
    setIsFetching,
    getRequestUsers,
    follow,
    unfollow,
  }),
)(UsersContainer)
