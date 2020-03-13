import React from 'react'
import { UserType } from '../../../types/AppTypes'
import Paginator from './Paginator/Paginator'
import UsersList from './UsersList/UsersList'
import Search from './Search/Search'

type PropTypes = {
  currentPage: number
  totalUsersCount: number
  onPageChanged: (page: number) => void
  setCurrentPage: (page: number) => void
  isFetching: boolean
  users: Array<UserType>
  follow: (id: number) => void
  unfollow: (id: number) => void
  followingInProgress: Array<number>
  pageSize: number
  portionSize: number
  setTerm: (term: string) => void
}

const Users: React.FC<PropTypes> = (props) => {
  return (
    <>
      <h1>Пользователи</h1>
      <Search
        setTerm={props.setTerm}
        setCurrentPage={props.setCurrentPage}
      />
      <Paginator
        totalUsersCount={props.totalUsersCount}
        currentPage={props.currentPage}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
        portionSize={props.portionSize}
      />
      <UsersList
        users={props.users}
        followingInProgress={props.followingInProgress}
        follow={props.follow}
        unfollow={props.unfollow}
        isFetching={props.isFetching}
      />
    </>
  )
}

export default Users
