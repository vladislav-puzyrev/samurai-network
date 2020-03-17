import React, { useEffect, useState } from 'react'
import styles from './InterlocutorsListItem.module.css'
import { PhotosType } from '../../../../../../types/types'
import { NavLink } from 'react-router-dom'
import defaultAvatar from '../../../../../../assets/images/defaultAvatar.png'

type PropTypes = {
  id: number
  userName: string
  hasNewMessages: boolean
  lastDialogActivityDate: string
  lastUserActivityDate: string
  newMessagesCount: number
  photos: PhotosType
}

const InterlocutorsListItem: React.FC<PropTypes> = ({
  id, userName, hasNewMessages, lastDialogActivityDate, lastUserActivityDate, newMessagesCount, photos
}) => {
  const [isToday, setIsToday] = useState(false)

  useEffect(() => {
    const now = new Date()
    const tomorrow = now.setDate(now.getDate() + 1)
    const yesterday = now.setDate(now.getDate() - 1)
    const lastMessageDate = new Date(lastDialogActivityDate).getTime()

    setIsToday(yesterday < lastMessageDate && lastMessageDate < tomorrow)
  }, [lastDialogActivityDate])

  return (
    <li className={styles.li}>
      <NavLink className={styles.a} to={`/messages/${id}`} activeClassName={styles.active}>
        <img className={styles.avatar} src={photos.small || defaultAvatar} alt="avatar"/>
        <div className={styles.info}>
          <div className={styles.infoMessage}>
            <span className={styles.userName}>{userName}</span>
            {hasNewMessages && <span>{newMessagesCount}<span role='img' aria-label='сообщение'>💬</span></span>}
          </div>
          <div className={styles.lastMessage}>
            {
              isToday ? new Date(lastDialogActivityDate).toLocaleTimeString().slice(0, 5) :
                new Date(lastDialogActivityDate).toLocaleDateString()
            }
          </div>
        </div>
      </NavLink>
    </li>
  )
}

export default InterlocutorsListItem
