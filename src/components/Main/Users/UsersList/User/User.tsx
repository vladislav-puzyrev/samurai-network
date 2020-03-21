import React from 'react'
import styles from './User.module.css'
import defaultAvatar from '../../../../../assets/images/defaultAvatar.png'
import { NavLink } from 'react-router-dom'
import { IUser } from '../../../../../types/types'

type PropTypes = {
  user: IUser
  followButtonDisabled: boolean
  unfollow: (id: number) => void
  follow: (id: number) => void
}

const User: React.FC<PropTypes> = ({ user, followButtonDisabled, unfollow, follow }) => {
  console.log('s')
  return (
    <li className={styles.user}>
      <div className={styles.avatarBox}>
        <NavLink to={`/profile/${user.id}`}>
          <img src={user.photos.small || defaultAvatar} alt='avatar'/>
        </NavLink>
      </div>

      <div className={styles.info}>
        <NavLink className={styles.userName} to={`/profile/${user.id}`}>{user.name}</NavLink>
        {user.status && <span className={styles.userStatus}>{user.status}</span>}

        {
          user.followed ? (
            <button
              className={styles.followButton}
              disabled={followButtonDisabled}
              onClick={() => {unfollow(user.id)}}
            >
              Отписаться <span aria-label="Отписаться" role="img">❌</span>
            </button>
          ) : (
            <button
              className={styles.followButton}
              disabled={followButtonDisabled}
              onClick={() => {follow(user.id)}}
            >
              Подписаться <span aria-label="Подписаться" role="img">✅</span>
            </button>
          )
        }

        <NavLink to={`/messages/${user.id}`} className={styles.sendMessage}>Написать сообщение</NavLink>
      </div>
    </li>
  )
}

export default User
