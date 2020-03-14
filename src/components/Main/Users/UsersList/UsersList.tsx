import React from 'react'
import styles from './UsersList.module.css'
import User from './User/User'
import { UserType } from '../../../../types/AppTypes'
import Preloader from '../../../common/Preloader/Preloader'

type PropTypes = {
  users: Array<UserType>
  followingInProgress: Array<number>
  follow: (id: number) => void
  unfollow: (id: number) => void
  isFetching: boolean
}

const UsersList = React.memo<PropTypes>(
  ({ users, followingInProgress, follow, unfollow, isFetching }) => {

    const usersOrMessage = (users.length) ?
      users.map((user) => (
        <User key={user.id}
              user={user}
              followingInProgress={followingInProgress}
              follow={follow}
              unfollow={unfollow}
        />
      )) : 'Ничего не найдено'

    return (
      isFetching ? <Preloader/> :
        <ul className={styles.users}>
          {usersOrMessage}
        </ul>
    )

  }
)

export default UsersList
