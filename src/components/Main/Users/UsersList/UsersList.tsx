import React from 'react'
import styles from './UsersList.module.css'
import User from './User/User'
import { IUser } from '../../../../types/types'
import Preloader from '../../../common/Preloader/Preloader'

type PropTypes = {
  users: Array<IUser>
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
              followButtonDisabled={followingInProgress.some(id => id === user.id)}
              follow={follow}
              unfollow={unfollow}
        />
      )) : 'Ничего не найдено'

    return (
      <ul className={styles.users}>
        {isFetching ? <Preloader stretch/> : usersOrMessage}
      </ul>
    )

  }
)

export default React.memo(UsersList)
