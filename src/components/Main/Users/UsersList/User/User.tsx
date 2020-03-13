import React from 'react'
import styles from './User.module.css'
import defaultAvatar from '../../../../../assets/images/defaultAvatar.png'
import { NavLink } from 'react-router-dom'
import { UserType } from '../../../../../types/AppTypes'

type PropTypes = {
  user: UserType
  followingInProgress: Array<number>
  unfollow: (id: number) => void
  follow: (id: number) => void
}

function User ({ user, followingInProgress, unfollow, follow }: PropTypes) {
  return (
    <li className={styles.user}>
      <div className={styles.avatarBox}>
        <NavLink to={`/profile/${user.id}`}>
          <img src={user.photos.small || defaultAvatar} alt='avatar' width='100'/>
        </NavLink>
        {
          user.followed
            ? <button
              disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              unfollow(user.id)
            }}
            >unfollow
            </button>

            : <button
              disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              follow(user.id)
            }}
            >follow
            </button>
        }
      </div>

      <div>
        {user.name}
        {user.status}
      </div>
    </li>
  )
}

export default User