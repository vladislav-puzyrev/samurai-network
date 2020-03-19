import React, { useEffect } from 'react'
import styles from './Dialog.module.css'
import { DialogType, InterlocutorType, PhotosType, ProfileType } from '../../../../types/types'
import SelectInterlocutor from './SelectIntercutor/SelectInterlocutor'
import InterlocutorInfo from './InterlocutorInfo/InterlocutorInfo'
import DialogMessages from './DialogMessages/DialogMessages'
import DialogForm from './DialogForm/DialogForm'

type PropTypes = {
  currentDialog: Array<DialogType> | null
  interlocutor: InterlocutorType | null
  userID: number | null
  myPhoto: string | null
  myID: number | null
  isFetching: boolean
  newInterlocutor: ProfileType | null
  getNewInterlocutor: (userID: number) => void
  newInterlocutorFetching: boolean
  interlocutorsFetching: boolean
  sendMessage: (userID: number, message: string) => void
  startChatting: (userID: number) => void
}

const Dialog: React.FC<PropTypes> = ({
  currentDialog,
  interlocutor,
  userID,
  myPhoto,
  myID,
  isFetching,
  newInterlocutor,
  getNewInterlocutor,
  newInterlocutorFetching,
  interlocutorsFetching,
  sendMessage,
  startChatting,
}) => {
  useEffect(() => {
    if (!interlocutor && !newInterlocutorFetching && !interlocutorsFetching && userID && !newInterlocutor) {
      getNewInterlocutor(userID)
    }
  }, [userID, getNewInterlocutor, newInterlocutorFetching, interlocutor, interlocutorsFetching, newInterlocutor])

  if (!userID) {
    return <SelectInterlocutor/>
  }

  const user = {
    id: null as number | null,
    userName: null as string | null,
    lastUserActivityDate: null as string | null,
    photos: null as PhotosType | null
  }

  if (!interlocutor && newInterlocutor) {
    user.id = newInterlocutor.userId
    user.userName = newInterlocutor.fullName
    user.photos = newInterlocutor.photos
  }
  if (interlocutor && !newInterlocutor) {
    user.id = interlocutor.id
    user.userName = interlocutor.userName
    user.lastUserActivityDate = interlocutor.lastUserActivityDate
    user.photos = interlocutor.photos
  }
  if (interlocutor && newInterlocutor) {
    user.id = interlocutor.id
    user.userName = interlocutor.userName
    user.lastUserActivityDate = interlocutor.lastUserActivityDate
    user.photos = interlocutor.photos
  }

  return (
    <div className={styles.wrapper}>
      <InterlocutorInfo interlocutor={user}/>
      <DialogMessages
        myID={myID}
        dialog={currentDialog}
        interlocutorPhoto={user.photos ? user.photos.small : null}
        myPhoto={myPhoto}
        isFetching={isFetching}
      />
      <DialogForm
        sendMessage={sendMessage}
        startChatting={startChatting}
        userID={userID}
      />
    </div>
  )
}

export default Dialog
