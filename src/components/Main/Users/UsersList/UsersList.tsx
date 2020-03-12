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

const UsersList: React.FC<PropTypes> = ({ users, followingInProgress, follow, unfollow, isFetching }) => {
  return (
    isFetching ? <Preloader/> :
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
  )
}

export default UsersList
