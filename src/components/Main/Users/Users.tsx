import { connect } from 'react-redux'
import {
  getRequestUsers,
  follow,
  unfollow
} from '../../../redux/users/thunks'
import React, { useEffect, useState } from 'react'
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getTotalUsersCount,
  getUsersSelector
} from '../../../redux/users/selectors'
import { RootReducerType } from '../../../redux/store'
import { UserType } from '../../../types/types'
import Search from './Search/Search'
import Paginator from './Paginator/Paginator'
import UsersList from './UsersList/UsersList'
import { setCurrentPage, setIsFetching, setTerm } from '../../../redux/users/actions'

type MapStatePropTypes = {
  currentPage: number
  users: UserType[]
  totalUsersCount: number
  isFetching: boolean
  followingInProgress: number[]
  term: string
  friend: boolean
  isAuth: boolean
}

type MapDispatchPropTypes = {
  setCurrentPage: (page: number) => void
  setIsFetching: (isFetching: boolean) => void
  getRequestUsers: (pageSize: number, currentPage: number, term: string, friend: null | boolean) => void
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
  friend,
  isAuth
}) => {
  document.title = 'Поиск пользователей'

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
        friend={friend}
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
        isAuth={isAuth}
      />
    </>
  )
}

function mapStateToProps (state: RootReducerType): MapStatePropTypes {
  return {
    users: getUsersSelector(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    term: state.users.term,
    friend: true,
    isAuth: state.auth.isAuth
  }
}

export default connect<MapStatePropTypes, MapDispatchPropTypes, unknown, RootReducerType>(mapStateToProps, {
  setCurrentPage,
  setIsFetching,
  getRequestUsers,
  follow,
  unfollow,
  setTerm
})(Users)
