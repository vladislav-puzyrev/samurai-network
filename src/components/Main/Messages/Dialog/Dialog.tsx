import React from 'react'
import styles from './Dialog.module.css'
import { DialogType, InterlocutorType } from '../../../../types/types'
import SelectInterlocutor from './SelectIntercutor/SelectInterlocutor'
import InterlocutorInfo from './InterlocutorInfo/InterlocutorInfo'
import DialogMessages from './DialogMessages/DialogMessages'

type PropTypes = {
  currentDialog: Array<DialogType> | null
  interlocutor: InterlocutorType | null
  userID: number | null
  myPhoto: string | null
  myID: number | null
}

const Dialog: React.FC<PropTypes> = ({ currentDialog, interlocutor, userID, myPhoto, myID }) => {
  if (!userID || !interlocutor || !currentDialog) {
    return <SelectInterlocutor/>
  }

  return (
    <div className={styles.wrapper}>
      <InterlocutorInfo interlocutor={interlocutor}/>
      <DialogMessages
        myID={myID}
        dialog={currentDialog}
        interlocutorPhoto={interlocutor.photos.small}
        myPhoto={myPhoto}
      />
    </div>
  )
}

export default Dialog
