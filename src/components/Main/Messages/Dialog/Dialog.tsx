import React, { useEffect, useState } from 'react'
import styles from './Dialog.module.css'
import { IInterlocutor, IPhotos, IProfile, IDialog } from '../../../../types/types'
import SelectInterlocutor from './SelectIntercutor/SelectInterlocutor'
import InterlocutorInfo from './InterlocutorInfo/InterlocutorInfo'
import DialogMessages from './DialogMessages/DialogMessages'
import DialogForm from './DialogForm/DialogForm'

type PropTypes = {
  currentDialog: Array<IDialog> | null
  interlocutor: IInterlocutor | null
  userID: number | null
  myPhoto: string | null
  myID: number | null
  dialogFetching: boolean
  newInterlocutor: IProfile | null
  sendMessage: (userID: number, message: string) => void
  startChatting: (userID: number) => void
  sendMessageFetching: boolean
}

const Dialog: React.FC<PropTypes> = ({
  currentDialog,
  interlocutor,
  userID,
  myPhoto,
  myID,
  dialogFetching,
  newInterlocutor,
  sendMessage,
  startChatting,
  sendMessageFetching,
}) => {
  const [user, setUser] = useState({
    id: null as number | null,
    userName: null as string | null,
    lastUserActivityDate: null as string | null,
    photos: null as IPhotos | null
  })

  useEffect(() => {
    if (!interlocutor && newInterlocutor) {
      setUser({
        id: newInterlocutor.userId,
        userName: newInterlocutor.fullName,
        lastUserActivityDate: null,
        photos: newInterlocutor.photos
      })
    }
    if ((interlocutor && !newInterlocutor) || (interlocutor && newInterlocutor)) {
      setUser({
        id: interlocutor.id,
        userName: interlocutor.userName,
        lastUserActivityDate: interlocutor.lastUserActivityDate,
        photos: interlocutor.photos
      })
    }
  }, [interlocutor, newInterlocutor])

  if (!userID) {
    return <SelectInterlocutor/>
  }

  return (
    <div className={styles.wrapper}>
      <InterlocutorInfo interlocutor={user}/>
      <DialogMessages
        myID={myID}
        dialog={currentDialog}
        interlocutorPhoto={user.photos ? user.photos.small : null}
        myPhoto={myPhoto}
        isFetching={dialogFetching}
      />
      <DialogForm
        sendMessage={sendMessage}
        startChatting={startChatting}
        userID={userID}
        sendMessageFetching={sendMessageFetching}
      />
    </div>
  )
}

export default React.memo(Dialog)
