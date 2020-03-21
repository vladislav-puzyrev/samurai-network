import React from 'react'
import styles from './InterlocutorInfo.module.css'
import defaultAvatar from '../../../../../assets/images/defaultAvatar.png'
import { NavLink } from 'react-router-dom'
import { IPhotos } from '../../../../../types/types'

type PropTypes = {
  interlocutor: {
    id: number | null,
    userName: string | null,
    lastUserActivityDate: string | null
    photos: IPhotos | null
  }
}

const InterlocutorInfo: React.FC<PropTypes> = ({ interlocutor }) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <NavLink to={`/profile/${interlocutor.id}`} className={styles.userName}>{interlocutor.userName}</NavLink>
        {
          interlocutor.lastUserActivityDate && (
            <div className={styles.online}>
              Был в сети - {new Date(interlocutor.lastUserActivityDate).toLocaleString()}
            </div>
          )
        }
      </div>
      <NavLink to={`/profile/${interlocutor.id}`}>
        <img className={styles.avatar}
             src={interlocutor.photos?.small ? interlocutor.photos.small : defaultAvatar || defaultAvatar}
             alt='avatar'/>
      </NavLink>
    </div>
  )
}

export default React.memo(InterlocutorInfo)
