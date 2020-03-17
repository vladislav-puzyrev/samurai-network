import React from 'react'
import styles from './MessageList.module.css'
import { InterlocutorType } from '../../../../../types/types'
import MessageListItem from './MessageListItem/MessageListItem'

type PropTypes = {
  interlocutors: Array<InterlocutorType>
}

const MessageList: React.FC<PropTypes> = ({ interlocutors }) => {
  return (
    <ul className={styles.ul}>
      {
        interlocutors.map((message) => (
          <MessageListItem
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

export default MessageList
