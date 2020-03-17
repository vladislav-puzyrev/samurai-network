import React from 'react'
import styles from './InterlocutorInfo.module.css'
import { InterlocutorType } from '../../../../../types/types'
import defaultAvatar from '../../../../../assets/images/defaultAvatar.png'

type PropTypes = {
  interlocutor: InterlocutorType
}

const InterlocutorInfo: React.FC<PropTypes> = ({ interlocutor }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.userName}>{interlocutor.userName}</div>
        <div className={styles.online}>Был в сети - {new Date(interlocutor.lastUserActivityDate).toLocaleString()}</div>
      </div>
      <div>
        <img className={styles.avatar} src={interlocutor.photos.small || defaultAvatar} alt="avatar"/>
      </div>
    </div>
  )
}

export default InterlocutorInfo
