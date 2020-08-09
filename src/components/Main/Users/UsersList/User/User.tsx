import React from 'react'
import styles from './User.module.css'
import defaultAvatar from '../../../../../assets/defaultAvatar.png'
import { NavLink } from 'react-router-dom'
import { UserType } from '../../../../../types/types'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type PropTypes = {
  user: UserType
  followButtonDisabled: boolean
  unfollow: (id: number) => void
  follow: (id: number) => void
  isAuth: boolean
}

const User: React.FC<PropTypes> = ({ user, followButtonDisabled, unfollow, follow, isAuth }) => {
  const handleClick = () => {
    if (isAuth) {
      if (user.followed) {
        unfollow(user.id)
      } else {
        follow(user.id)
      }
    }
  }

  const status = user.status && (user.status.length > 80) ? user.status.slice(0, 80) + '…' : user.status

  return (
    <li className={styles.user}>
      <div className={styles.avatarBox}>
        <NavLink to={`/profile/${user.id}`}>
          <img src={user.photos.small || defaultAvatar} alt='avatar'/>
        </NavLink>
      </div>

      <div className={styles.info}>
        <NavLink className={styles.userName} to={`/profile/${user.id}`}>{user.name}</NavLink>
        {user.status && <span className={styles.userStatus}>{status}</span>}

        {
          user.followed ? (
            <button
              className={styles.followButton}
              disabled={followButtonDisabled}
              onClick={handleClick}
            >
              <span className={styles.followedButton}>Отписаться</span>
              <FontAwesomeIcon color='#f03a17' icon={faTimes}/>
            </button>
          ) : (
            <button
              className={styles.followButton}
              disabled={followButtonDisabled}
              onClick={handleClick}
            >
              <span className={styles.followedButton}>Подписаться</span>
              <FontAwesomeIcon color='#16c60c' icon={faCheck}/>
            </button>
          )
        }

        <NavLink to={`/messages/${user.id}`} className={styles.sendMessage}>Написать сообщение</NavLink>
      </div>
    </li>
  )
}

export default User
