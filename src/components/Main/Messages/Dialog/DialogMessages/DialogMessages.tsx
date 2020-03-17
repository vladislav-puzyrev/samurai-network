import React from 'react'
import styles from './DialogMessages.module.css'
import { DialogType } from '../../../../../types/types'
import DialogMessagesItem from './DialogMessagesItem/DialogMessagesItem'

type PropTypes = {
  dialog: Array<DialogType>
  interlocutorPhoto: string | null
  myPhoto: string | null
  myID: number | null
}

const DialogMessages: React.FC<PropTypes> = ({ dialog, myPhoto, interlocutorPhoto, myID }) => {
  let lastSenderID = 0
  const dialogMessagesItem = []

  for (const item of dialog) {
    dialogMessagesItem.push(
      <DialogMessagesItem
        messageID={item.id}
        message={item.body}
        translatedMessage={item.translatedBody}
        addedAt={item.addedAt}
        senderID={item.senderId}
        senderName={item.senderName}
        recipientID={item.recipientId}
        viewed={item.viewed}
        lastSenderID={lastSenderID}
        interlocutorPhoto={interlocutorPhoto}
        myPhoto={myPhoto}
        myID={myID}
      />
    )
    lastSenderID = item.senderId
  }

  return (
    <div className={styles.wrapper}>
      {dialogMessagesItem}
    </div>
  )
}

export default DialogMessages
