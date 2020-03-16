import { connect } from 'react-redux'
import {
  getRequestUsers,
  setCurrentPage,
  setIsFetching,
  follow,
  unfollow,
  setTerm,
} from '../../../redux/users-reducer'
import React, { useEffect, useState } from 'react'
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getTotalUsersCount,
  getUsersSelector,
} from '../../../redux/users-selectors'
import { AppStateType } from '../../../redux/store'
import { UserType } from '../../../types/types'
import { compose } from 'redux'
import Search from './Search/Search'
import Paginator from './Paginator/Paginator'
import UsersList from './UsersList/UsersList'

type MapStatePropTypes = {
  currentPage: number
  users: Array<UserType>
  totalUsersCount: number
  isFetching: boolean
  followingInProgress: Array<number>
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

const Users: React.FC<PropTypes> = ({
  currentPage,
  totalUsersCount,
  isFetching,
  users,
  followingInProgress,
  setCurrentPage,
  follow,
  unfollow,
  setTerm,
  getRequestUsers,
  term,
}) => {

  useEffect(() => {
    return () => {
      setCurrentPage(1)
    }
  }, [setCurrentPage])

  const [portionNumber, setPortionNumber] = useState(1)

  return (
    <>
      <h1>Пользователи</h1>
      <Search
        setTerm={setTerm}
        setCurrentPage={setCurrentPage}
        setPortionNumber={setPortionNumber}
      />
      <Paginator
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
        pageSize={6}
        portionSize={10}
        getRequestUsers={getRequestUsers}
        term={term}
        setCurrentPage={setCurrentPage}
        portionNumber={portionNumber}
        setPortionNumber={setPortionNumber}
      />
      <UsersList
        users={users}
        followingInProgress={followingInProgress}
        follow={follow}
        unfollow={unfollow}
        isFetching={isFetching}
      />
    </>
  )
}

function mapStateToProps (state: AppStateType): MapStatePropTypes {
  return {
    users: getUsersSelector(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
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
)(Users)
