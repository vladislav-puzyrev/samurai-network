import React from 'react'
import styles from './Users.module.css'
import PaginationItem from './PaginationItem/PaginationItem'
import User from './User/User'
import Preloader from '../../common/Preloader/Preloader'
import { UserType } from '../../../types/AppTypes'

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
}

const Users: React.FC<PropTypes> = ({
  currentPage, totalUsersCount, onPageChanged, setCurrentPage, isFetching, users, follow, unfollow, followingInProgress,
}) => {
  // const pagesQuantity = Math.ceil(totalUsersCount / pageSize);
  const paginationItems = []

  for (let i = +currentPage; i < +currentPage + 5; i++) {
    if (i < +totalUsersCount) {
      paginationItems.push(
        <PaginationItem key={i} number={i} active={currentPage === +i}/>,
      )
    }
  }

  function onClickHandler (event: any) {
    onPageChanged(event.target.textContent)
    setCurrentPage(event.target.textContent)
  }

  return (
    <>
      <h1 className={styles.title}>Пользователи</h1>
      <ul className={styles.pagination} onClick={onClickHandler}>
        {paginationItems}
      </ul>

      {isFetching && <Preloader/>}
      <ul className={styles.users}>
        {
          users.map((user) => (
            <User key={user.id}
                  user={user}
                  followingInProgress={followingInProgress}
                  follow={follow}
                  unfollow={unfollow}
            />
          ))
        }
      </ul>
    </>
  )
}

export default Users
