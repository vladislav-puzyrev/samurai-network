import React from 'react'
import styles from './DialogMessages.module.css'
import { IDialog } from '../../../../../types/types'
import DialogMessagesItem from './DialogMessagesItem/DialogMessagesItem'
import Preloader from '../../../../common/Preloader/Preloader'

type PropTypes = {
  dialog: Array<IDialog> | null
  interlocutorPhoto: string | null
  myPhoto: string | null
  myID: number | null
  isFetching: boolean
}

const DialogMessages: React.FC<PropTypes> = ({ dialog, myPhoto, interlocutorPhoto, myID, isFetching }) => {
  const dialogMessagesItem = []
  if (dialog) {
    let lastSenderID = 0
    for (let i = 0; i < dialog.length; i++) {
      dialogMessagesItem.push(
        <DialogMessagesItem
          key={dialog[i].id}
          messageID={dialog[i].id}
          message={dialog[i].body}
          translatedMessage={dialog[i].translatedBody}
          addedAt={dialog[i].addedAt}
          senderID={dialog[i].senderId}
          senderName={dialog[i].senderName}
          recipientID={dialog[i].recipientId}
          viewed={dialog[i].viewed}
          lastSenderID={lastSenderID}
          interlocutorPhoto={interlocutorPhoto}
          myPhoto={myPhoto}
          myID={myID}
          firstMessage={i === 0}
        />
      )
      lastSenderID = dialog[i].senderId
    }
  }

  return (
    <div className={styles.wrapper}>
      {
        (isFetching && dialogMessagesItem) ? <Preloader stretch/> : dialogMessagesItem
      }
    </div>
  )
}

export default React.memo(DialogMessages)
