import { connect } from 'react-redux'
import Users from './Users'
import {
  getRequestUsers,
  setCurrentPage,
  setIsFetching,
  follow,
  unfollow, setTerm,
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
  term: string
}

type MapDispatchPropTypes = {
  setCurrentPage: (page: number) => void
  setIsFetching: (isFetching: boolean) => void
  getRequestUsers: (pageSize: number, currentPage: number, term: string) => void
  follow: (id: number) => void
  unfollow: (id: number) => void
  setTerm: (term: string) => void
}

type PropTypes = MapStatePropTypes & MapDispatchPropTypes

const UsersContainer: React.FC<PropTypes> = ({
  pageSize,
  currentPage,
  totalUsersCount,
  isFetching,
  users,
  followingInProgress,
  portionSize,
  getRequestUsers,
  setCurrentPage,
  follow,
  unfollow,
  setTerm,
  term,
}) => {

  useEffect(() => {
    getRequestUsers(pageSize, currentPage, term)
  }, [getRequestUsers, pageSize, currentPage, term])

  const onPageChanged = (currentPage: number) => {
    getRequestUsers(pageSize, currentPage, term)
    setCurrentPage(currentPage)
  }

  return <Users
    onPageChanged={onPageChanged}
    currentPage={currentPage}
    totalUsersCount={totalUsersCount}
    setCurrentPage={setCurrentPage}
    isFetching={isFetching}
    users={users}
    follow={follow}
    unfollow={unfollow}
    followingInProgress={followingInProgress}
    pageSize={pageSize}
    portionSize={portionSize}
    setTerm={setTerm}
  />
}

function mapStateToProps (state: AppStateType): MapStatePropTypes {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    portionSize: state.usersPage.portionSize,
    term: state.usersPage.term,
  }
}

export default compose(
  connect<MapStatePropTypes, MapDispatchPropTypes, unknown, AppStateType>(mapStateToProps, {
    setCurrentPage,
    setIsFetching,
    getRequestUsers,
    follow,
    unfollow,
    setTerm,
  }),
)(UsersContainer)
