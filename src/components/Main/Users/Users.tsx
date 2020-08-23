import { useDispatch, useSelector } from 'react-redux'
import { follow, getRequestUsers, unfollow } from '../../../redux/users/thunks'
import React, { useEffect, useState } from 'react'
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getTotalUsersCount,
  getUsers
} from '../../../redux/users/selectors'
import { RootReducerType } from '../../../redux/store'
import Search from './Search/Search'
import Paginator from './Paginator/Paginator'
import UsersList from './UsersList/UsersList'
import { setCurrentPage, setTerm } from '../../../redux/users/actions'

const Users: React.FC = () => {
  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const term = useSelector((state: RootReducerType) => state.users.term)
  const friend = useSelector((state: RootReducerType) => state.users.friend)
  const users = useSelector(getUsers)
  const isFetching = useSelector(getIsFetching)
  const followingInProgress = useSelector(getFollowingInProgress)
  const isAuth = useSelector((state: RootReducerType) => state.auth.isAuth)

  const dispatch = useDispatch()

  document.title = 'Поиск пользователей'
  useEffect(() => {
    return () => {
      dispatch(setCurrentPage(1))
    }
  }, [dispatch])

  const [portionNumber, setPortionNumber] = useState(1)

  return (
    <>
      <h1>Пользователи</h1>
      <Search
        setTerm={() => dispatch(setTerm)}
        setCurrentPage={() => dispatch(setCurrentPage)}
        setPortionNumber={setPortionNumber}
      />
      <Paginator
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
        pageSize={6}
        portionSize={10}
        getRequestUsers={(a: number, b: number, c: string) => dispatch(getRequestUsers(a, b, c))}
        term={term}
        friend={friend}
        setCurrentPage={() => dispatch(setCurrentPage)}
        portionNumber={portionNumber}
        setPortionNumber={setPortionNumber}
      />
      <UsersList
        users={users}
        followingInProgress={followingInProgress}
        follow={(id: number) => dispatch(follow(id))}
        unfollow={(id: number) => dispatch(unfollow(id))}
        isFetching={isFetching}
        isAuth={isAuth}
      />
    </>
  )
}

export default Users
