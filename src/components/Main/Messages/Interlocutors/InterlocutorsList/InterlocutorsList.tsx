import React from 'react'
import styles from './InterlocutorsList.module.css'
import { IInterlocutor } from '../../../../../types/types'
import InterlocutorsListItem from './InterlocutorsListItem/InterlocutorsListItem'

type PropTypes = {
  interlocutors: Array<IInterlocutor>
}

const InterlocutorsList: React.FC<PropTypes> = ({ interlocutors }) => {
  return (
    <ul className={styles.ul}>
      {
        interlocutors.map((message) => (
          <InterlocutorsListItem
            key={message.id}
            id={message.id}
            userName={message.userName}
            hasNewMessages={message.hasNewMessages}
            lastDialogActivityDate={message.lastDialogActivityDate}
            lastUserActivityDate={message.lastUserActivityDate}
            newMessagesCount={message.newMessagesCount}
            photos={message.photos}
          />
        ))
      }
    </ul>
  )
}

export default InterlocutorsList
