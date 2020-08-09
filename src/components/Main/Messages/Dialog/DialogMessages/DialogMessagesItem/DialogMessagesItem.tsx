import React from 'react'
import styles from './DialogMessagesItem.module.css'
import { NavLink } from 'react-router-dom'
import defaultAvatar from '../../../../../../assets/defaultAvatar.png'

type PropTypes = {
  messageID: string
  message: string
  translatedMessage: null
  addedAt: string
  senderID: number
  senderName: string
  recipientID: number
  viewed: boolean
  lastSenderID: number
  interlocutorPhoto: string | null
  myPhoto: string | null
  myID: number | null
  firstMessage: boolean
}

const DialogMessagesItem: React.FC<PropTypes> = ({
  messageID,
  message,
  translatedMessage,
  addedAt,
  senderID,
  senderName,
  recipientID,
  viewed,
  lastSenderID,
  interlocutorPhoto,
  myPhoto,
  myID,
  firstMessage,
}) => {
  const isNewSender = lastSenderID !== senderID
  const iSender = senderID === myID
  const senderPhoto = iSender ? myPhoto : interlocutorPhoto

  return (
    <div className={styles.wrapper} style={{ marginTop: isNewSender ? (firstMessage) ? '0' : '30px' : '15px' }}>
      {
        isNewSender && <>
          <NavLink to={`/profile/${senderID}`}>
            <img className={styles.avatar} src={senderPhoto || defaultAvatar} alt='avatar'/>
          </NavLink>
          <NavLink className={styles.aName} to={`/profile/${senderID}`}>
            <span className={styles.name}>{senderName}</span>
          </NavLink>
          <span className={styles.time}>{new Date(addedAt).toLocaleTimeString().slice(0, 5)}</span>
        </>
      }

      <div className={styles.message}>{message}</div>
    </div>
  )
}

export default DialogMessagesItem
